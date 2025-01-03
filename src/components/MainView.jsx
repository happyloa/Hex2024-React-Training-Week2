export default function MainView({
  products,
  checkLogin,
  logout,
  setTempProduct,
}) {
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
                      }`}>
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
