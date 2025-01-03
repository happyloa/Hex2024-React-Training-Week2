export default function ProductDetail({ tempProduct }) {
  return (
    <aside className="col-md-6">
      {/* 頁面標題 */}
      <h2 className="mb-4">單一產品細節</h2>

      {/* 判斷是否有選中的產品 */}
      {tempProduct ? (
        <div className="card shadow-sm">
          {/* 主圖 */}
          <img
            src={tempProduct.imageUrl} // 主圖的圖片 URL
            className="card-img-top rounded" // 使用 Bootstrap 樣式
            alt="主圖" // 圖片的替代文字
          />
          {/* 詳細內容 */}
          <div className="card-body">
            {/* 商品標題與分類 */}
            <div className="d-flex justify-content-center align-items-center gap-2 mb-4">
              {/* 商品標題 */}
              <h5 className="mb-0 card-title">{tempProduct.title}</h5>
              {/* 商品分類標籤 */}
              <span className="badge bg-primary">{tempProduct.category}</span>
            </div>

            {/* 商品描述與內容 */}
            <p className="card-text text-muted text-center">
              {tempProduct.category} {/* 商品描述 */}
            </p>
            <p className="card-text text-center">
              {tempProduct.content} {/* 商品內容 */}
            </p>

            {/* 分隔線 */}
            <hr />

            {/* 價格區域 */}
            <div className="text-center my-4">
              {/* 原價 */}
              <p className="mb-1 text-secondary" style={{ fontSize: "0.9rem" }}>
                原價：
                <span style={{ textDecoration: "line-through" }}>
                  {tempProduct.origin_price} 元 {/* 顯示刪除線的原價 */}
                </span>
              </p>
              {/* 特價 */}
              <p
                className="text-success fw-bold"
                style={{ fontSize: "1.5rem" }}>
                特價：{tempProduct.price} 元 {/* 強調的特價 */}
              </p>
            </div>

            {/* 分隔線 */}
            <hr />

            {/* 更多圖片 - Bootstrap 輪播 */}
            {tempProduct.imagesUrl && tempProduct.imagesUrl.length > 0 && (
              <div className="mt-4">
                {/* 輪播標題 */}
                <h5 className="mb-3 text-center">更多圖片：</h5>
                <div
                  id="carouselExampleControls" // 輪播 ID
                  className="carousel slide"
                  data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {/* 動態生成圖片項目 */}
                    {tempProduct.imagesUrl.map((url, index) => (
                      <div
                        className={`carousel-item ${
                          index === 0 ? "active" : "" // 第一張設為 active
                        }`}
                        key={index}>
                        <img
                          src={url} // 輪播圖片 URL
                          className="d-block w-100 rounded" // Bootstrap 樣式
                          alt={`圖片 ${index + 1}`} // 圖片的替代文字
                          style={{ maxHeight: "300px", objectFit: "cover" }} // 控制圖片顯示樣式
                        />
                      </div>
                    ))}
                  </div>
                  {/* 左右控制按鈕 */}
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"></span>
                    <span className="visually-hidden">上一張</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"></span>
                    <span className="visually-hidden">下一張</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        // 無選中商品時顯示的提示
        <p className="text-secondary">請選擇一個商品查看</p>
      )}
    </aside>
  );
}
