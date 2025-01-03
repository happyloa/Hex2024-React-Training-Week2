import { useState } from "react";

import axios from "axios";

import MainView from "./components/MainView";
import ProductDetail from "./components/ProductDetail";
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
            <MainView
              products={products}
              checkLogin={checkLogin}
              logout={logout}
              setTempProduct={setTempProduct}
            />
            <ProductDetail tempProduct={tempProduct} />
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
