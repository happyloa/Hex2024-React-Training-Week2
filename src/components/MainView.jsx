import axios from "axios";

const API_BASE = "https://ec-course-api.hexschool.io/v2";
const API_PATH = "book-rental";

export default function MainView({
  products,
  checkLogin,
  logout,
  setTempProduct,
  setProducts,
}) {
  // 切換產品啟用狀態
  const toggleProductStatus = async (product) => {
    try {
      // 將完整的產品資料發送到 API，僅修改 `is_enabled`
      const updatedProduct = {
        ...product,
        is_enabled: !product.is_enabled, // 反轉啟用狀態
      };

      const response = await axios.put(
        `${API_BASE}/api/${API_PATH}/admin/product/${product.id}`,
        {
          data: updatedProduct, // 傳遞完整的產品資料
        }
      );

      // 更新本地的產品列表狀態
      setProducts((prevProducts) =>
        prevProducts.map((p) => (p.id === product.id ? updatedProduct : p))
      );

      console.log(`${product.id} ${product.title}：產品狀態切換成功`);
    } catch (error) {
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
          <button
            className="btn btn-warning me-2"
            type="button"
            id="check"
            onClick={checkLogin}>
            確認是否登入
          </button>
          <button
            className="btn btn-danger"
            type="button"
            id="logout"
            onClick={logout}>
            登出
          </button>
          {/* <button
            className="btn btn-secondary"
            type="button"
            id="logout"
            onClick={postBooks}>
            登出
          </button> */}
        </div>
      </div>

      {/* 產品列表 */}
      <div className="table-responsive">
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
            {products && products.length > 0 ? (
              products.map((item) => (
                <tr key={item.id}>
                  <td>
                    <strong>{item.title}</strong>
                  </td>
                  <td className="text-secondary">
                    <del>{item.origin_price}</del>
                  </td>
                  <td className="text-success fw-bold">{item.price}</td>
                  <td>
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
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => setTempProduct(item)}>
                      查看細節
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  尚無產品資料
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
