export default function MainView({
  products,
  checkLogin,
  logout,
  setTempProduct,
}) {
  return (
    <main className="col-md-6">
      {/* 功能按鈕 */}
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

      {/* 產品列表 */}
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
  );
}
