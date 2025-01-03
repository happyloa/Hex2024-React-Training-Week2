import { useState } from "react"; // 從 react 套件中解構出 useState hook

import axios from "axios"; // 引入 axios，用來發出網路請求

import MainView from "./components/MainView"; // 主畫面元件，顯示產品列表與功能按鈕
import ProductDetail from "./components/ProductDetail"; // 單一產品細節元件，顯示選定產品的詳細資訊
import LoginContainer from "./components/LoginContainer"; // 登入畫面元件

// import books from "./books"; // 預留書籍資料的匯入

import "./assets/style.css"; // 匯入全域樣式檔案

const API_BASE = "https://ec-course-api.hexschool.io/v2"; // API 的基礎路徑

// 請自行替換 API_PATH
const API_PATH = "book-rental"; // API 路徑，依需求替換

// 預留的批量匯入書籍資料功能
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
  // 管理表單輸入的狀態
  const [formData, setFormData] = useState({
    username: "", // 使用者名稱或電子郵件
    password: "", // 使用者密碼
  });

  const [isAuth, setisAuth] = useState(false); // 使用者是否已登入
  const [products, setProducts] = useState([]); // 產品列表資料
  const [tempProduct, setTempProduct] = useState(null); // 單一產品的詳細資料

  // 確認使用者是否已登入
  async function checkLogin() {
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("hexToken="))
        ?.split("=")[1];
      console.log(token); // 確認從 Cookie 提取的 Token
      axios.defaults.headers.common.Authorization = token;

      const res = await axios.post(`${API_BASE}/api/user/check`);
      console.log(res); // 驗證成功後的伺服器回應
    } catch (error) {
      console.error(error); // 若驗證失敗，顯示錯誤訊息
    }
  }

  // 登出功能
  const logout = async () => {
    try {
      await axios.post(`${API_BASE}/logout`); // 向伺服器發送登出請求
      document.cookie = "hexToken=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"; // 清除 Cookie 中的 Token
      axios.defaults.headers.common.Authorization = null; // 移除全域 Authorization Header
      setisAuth(false); // 更新狀態為未登入
      setProducts([]); // 清空產品列表
      alert("已成功登出！"); // 提示登出成功
    } catch (error) {
      console.error("登出失敗:", error.response.data.message); // 顯示登出失敗的錯誤訊息
    }
  };

  // 從伺服器獲取產品資料
  const getData = async () => {
    try {
      const response = await axios.get(
        `${API_BASE}/api/${API_PATH}/admin/products`
      );
      setProducts(response.data.products); // 更新產品列表資料
    } catch (err) {
      console.error(err.response.data.message); // 顯示錯誤訊息
    }
  };

  // 表單輸入變更處理
  const handleInputChange = (e) => {
    const { id, value } = e.target; // 獲取輸入的欄位 ID 和值
    setFormData((prevData) => ({
      ...prevData,
      [id]: value, // 動態更新對應的欄位值
    }));
  };

  // 表單提交處理
  const handleSubmit = async (e) => {
    e.preventDefault(); // 阻止表單的預設提交行為

    try {
      const response = await axios.post(`${API_BASE}/admin/signin`, formData); // 向伺服器發送登入請求
      const { token, expired } = response.data; // 獲取伺服器回傳的 Token 和到期時間
      document.cookie = `hexToken=${token};expires=${new Date(expired)};`; // 將 Token 儲存到 Cookie

      axios.defaults.headers.common.Authorization = `${token}`; // 設定 Axios 的全域 Authorization Header

      getData(); // 登入成功後獲取產品資料

      setisAuth(true); // 更新狀態為已登入
    } catch (error) {
      alert("登入失敗: " + error.response.data.message); // 顯示登入失敗的提示訊息
    }
  };

  return (
    <>
      {isAuth ? (
        // 若已登入，顯示主畫面
        <section className="container py-5">
          <div className="row">
            {/* 主畫面：顯示產品列表 */}
            <MainView
              products={products}
              setProducts={setProducts}
              checkLogin={checkLogin}
              logout={logout}
              // postBooks={postBooks}
              setTempProduct={setTempProduct}
            />
            {/* 單一產品細節 */}
            <ProductDetail tempProduct={tempProduct} />
          </div>
        </section>
      ) : (
        // 未登入，顯示登入畫面
        <LoginContainer
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}
