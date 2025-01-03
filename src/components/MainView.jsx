import { useState, useEffect } from "react"; // 引入 React 的 useState 和 useEffect
import axios from "axios"; // 引入 axios，用來發出網路請求

// API 基本路徑和指定的 API PATH
const API_BASE = "https://ec-course-api.hexschool.io/v2";
const API_PATH = "book-rental";

export default function MainView({
  products, // 產品列表
  checkLogin, // 確認是否登入的函式
  logout, // 登出的函式
  setTempProduct, // 設定單一產品細節
  setProducts, // 更新產品列表的函式
  // postBooks, // 新增商品的函式
}) {
  const [loading, setLoading] = useState(true); // 管理載入狀態

  // 模擬資料加載的 useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // 開始加載
        const response = await axios.get(
          `${API_BASE}/api/${API_PATH}/admin/products`
        );
        setProducts(response.data.products); // 更新產品列表
      } catch (error) {
        console.error("載入產品資料失敗:", error.message);
      } finally {
        setLoading(false); // 資料加載完成
      }
    };

    fetchData();
  }, [setProducts]);

  // 切換產品啟用狀態
  const toggleProductStatus = async (product) => {
    try {
      // 將完整的產品資料發送到 API，僅修改 `is_enabled`
      const updatedProduct = {
        ...product, // 保留原本的資料
        is_enabled: !product.is_enabled, // 反轉啟用狀態
      };

      // 發送 PUT 請求以更新產品狀態
      await axios.put(
        `${API_BASE}/api/${API_PATH}/admin/product/${product.id}`,
        {
          data: updatedProduct, // 傳遞完整的產品資料
        }
      );

      // 更新本地的產品列表狀態
      setProducts((prevProducts) =>
        prevProducts.map((p) => (p.id === product.id ? updatedProduct : p))
      );

      // 切換成功的訊息
      console.log(`${product.id} ${product.title}：產品狀態切換成功`);
    } catch (error) {
      // 捕捉錯誤並顯示錯誤訊息
      console.error(
        `切換狀態失敗: ${error.response?.data?.message || error.message}`
      );
    }
  };

  return (
    <main className="col-md-6">
      {/* 功能按鈕 */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary">產品管理</h2>
        <div>
          {/* 確認是否登入按鈕 */}
          <button
            className="btn btn-warning me-2"
            type="button"
            id="check"
            onClick={checkLogin}>
            確認是否登入
          </button>
          {/* 登出按鈕 */}
          <button
            className="btn btn-danger me-2"
            type="button"
            id="logout"
            onClick={logout}>
            登出
          </button>
          {/* <button
            className="btn btn-secondary"
            type="button"
            id="postBooks"
            onClick={postBooks}>
            匯入資料
          </button> */}
        </div>
      </div>

      {/* 產品列表或 Spinner */}
      <div className="table-responsive">
        {loading ? (
          // 當資料加載中時顯示 Spinner
          <div className="d-flex justify-content-center align-items-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">載入中...</span>
            </div>
          </div>
        ) : (
          <table className="table table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th scope="col">產品名稱</th>
                <th scope="col">原價 (元)</th>
                <th scope="col">售價 (元)</th>
                <th scope="col">狀態</th>
                <th scope="col" className="text-center">
                  操作
                </th>
              </tr>
            </thead>
            <tbody>
              {/* 檢查是否有產品資料 */}
              {products && products.length > 0 ? (
                // 將每個產品渲染成一行
                products.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <strong>{item.title}</strong> {/* 顯示產品名稱 */}
                    </td>
                    <td className="text-secondary">
                      <del>{item.origin_price}</del> {/* 原價，並使用刪除線 */}
                    </td>
                    <td className="text-success fw-bold">{item.price}</td>{" "}
                    {/* 售價 */}
                    <td>
                      {/* 狀態標籤，點擊可切換狀態 */}
                      <span
                        className={`badge ${
                          item.is_enabled ? "bg-success" : "bg-secondary"
                        }`}
                        style={{ cursor: "pointer" }}
                        onClick={() => toggleProductStatus(item)}>
                        {item.is_enabled ? "啟用" : "未啟用"}
                      </span>
                    </td>
                    <td className="text-center">
                      {/* 查看產品細節按鈕 */}
                      <button
                        className="btn btn-primary btn-sm text-nowrap"
                        onClick={() => setTempProduct(item)}>
                        查看細節
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                // 如果沒有產品資料，顯示提示訊息
                <tr>
                  <td colSpan="5" className="text-center text-muted">
                    尚無產品資料
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}
