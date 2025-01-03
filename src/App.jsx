import { useState } from "react";

import axios from "axios";

import LoginContainer from "./components/LoginContainer";

// import books from "./books";

import "./assets/style.css";

const API_BASE = "https://ec-course-api.hexschool.io/v2";

// 請自行替換 API_PATH
const API_PATH = "book-rental";

// const data = books;

// async function postBooks() {
//   try {
//     const token = document.cookie
//       .split("; ")
//       .find((row) => row.startsWith("hexToken="))
//       ?.split("=")[1];

//     if (!token) {
//       console.error("Token 未找到，請先登入！");
//       return;
//     }

//     axios.defaults.headers.common.Authorization = token;

//     for (const book of data) {
//       const response = await axios.post(
//         `${API_BASE}/api/${API_PATH}/admin/product`,
//         {
//           data: book, // API 要求的資料格式
//         }
//       );
//       console.log(`成功新增: ${book.title}`, response.data);
//     }

//     alert("所有書籍資料已成功新增！");
//   } catch (error) {
//     console.error(
//       "新增資料失敗:",
//       error.response?.data?.message || error.message
//     );
//   }
// }

export default function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [isAuth, setisAuth] = useState(false);
  const [products, setProducts] = useState([]);
  const [tempProduct, setTempProduct] = useState(null);

  async function checkLogin() {
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("hexToken="))
        ?.split("=")[1];
      console.log(token);
      axios.defaults.headers.common.Authorization = token;

      const res = await axios.post(`${API_BASE}/api/user/check`);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  const logout = async () => {
    try {
      await axios.post(`${API_BASE}/logout`);
      document.cookie = "hexToken=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      axios.defaults.headers.common.Authorization = null;
      setisAuth(false);
      setProducts([]);
      alert("已成功登出！");
    } catch (error) {
      console.error("登出失敗:", error.response.data.message);
    }
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        `${API_BASE}/api/${API_PATH}/admin/products`
      );
      setProducts(response.data.products);
    } catch (err) {
      console.error(err.response.data.message);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_BASE}/admin/signin`, formData);
      const { token, expired } = response.data;
      document.cookie = `hexToken=${token};expires=${new Date(expired)};`;

      axios.defaults.headers.common.Authorization = `${token}`;

      getData();

      setisAuth(true);
    } catch (error) {
      alert("登入失敗: " + error.response.data.message);
    }
  };

  return (
    <>
      {isAuth ? (
        <section className="container">
          <div className="row mt-5">
            <main className="col-md-6">
              <button
                className="btn btn-warning mb-5"
                type="button"
                id="check"
                onClick={checkLogin}>
                確認是否登入
              </button>
              <button
                className="btn btn-danger mb-5 ms-2"
                type="button"
                id="logout"
                onClick={logout}>
                登出
              </button>
              {/* <button
                className="btn btn-secondary mb-5 ms-2"
                type="button"
                id="postBooks"
                onClick={postBooks}>
                匯入資料
              </button> */}
              <h2>產品列表</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>產品名稱</th>
                    <th>原價</th>
                    <th>售價</th>
                    <th>是否啟用</th>
                    <th>查看細節</th>
                  </tr>
                </thead>
                <tbody>
                  {products && products.length > 0 ? (
                    products.map((item) => (
                      <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.origin_price}</td>
                        <td>{item.price}</td>
                        <td>{item.is_enabled ? "啟用" : "未啟用"}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => setTempProduct(item)}>
                            查看細節
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5">尚無產品資料</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </main>
            <aside className="col-md-6">
              <h2>單一產品細節</h2>
              {tempProduct ? (
                <div className="card mb-3">
                  <img
                    src={tempProduct.imageUrl}
                    className="card-img-top primary-image"
                    alt="主圖"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {tempProduct.title}
                      <span className="badge bg-primary ms-2">
                        {tempProduct.category}
                      </span>
                    </h5>
                    <p className="card-text">
                      商品描述：{tempProduct.category}
                    </p>
                    <p className="card-text">商品內容：{tempProduct.content}</p>
                    <div className="d-flex">
                      <p className="card-text text-secondary">
                        <del>{tempProduct.origin_price}</del>
                      </p>
                      元 / {tempProduct.price} 元
                    </div>
                    <h5 className="mt-3">更多圖片：</h5>
                    <div className="d-flex flex-wrap">
                      {tempProduct.imagesUrl?.map((url, index) => (
                        <img
                          key={index}
                          src={url}
                          className="images"
                          alt="副圖"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-secondary">請選擇一個商品查看</p>
              )}
            </aside>
          </div>
        </section>
      ) : (
        <LoginContainer
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}
