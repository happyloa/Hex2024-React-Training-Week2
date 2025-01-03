export default function ProductDetail({ tempProduct }) {
  return (
    <aside className="col-md-6">
      <h2 className="text-primary mb-4">單一產品細節</h2>
      {tempProduct ? (
        <div className="card shadow-sm">
          {/* 主圖 */}
          <img
            src={tempProduct.imageUrl}
            className="card-img-top rounded"
            alt="主圖"
          />
          {/* 詳細內容 */}
          <div className="card-body">
            <h5 className="card-title d-flex align-items-center">
              {tempProduct.title}
              <span className="badge bg-primary ms-3">
                {tempProduct.category}
              </span>
            </h5>
            <p className="card-text text-muted">
              商品描述：{tempProduct.category}
            </p>
            <p className="card-text">商品內容：{tempProduct.content}</p>
            <div className="d-flex align-items-center">
              <p className="card-text text-secondary mb-0 me-2">
                <del>{tempProduct.origin_price}</del>
              </p>
              <p className="card-text text-success fw-bold mb-0">
                {tempProduct.price} 元
              </p>
            </div>
            {/* 更多圖片 - Bootstrap 輪播 */}
            {tempProduct.imagesUrl && tempProduct.imagesUrl.length > 0 && (
              <div className="mt-4">
                <h5 className="mb-3">更多圖片：</h5>
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {tempProduct.imagesUrl.map((url, index) => (
                      <div
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                        key={index}>
                        <img
                          src={url}
                          className="d-block w-100 rounded"
                          alt={`圖片 ${index + 1}`}
                          style={{ maxHeight: "300px", objectFit: "cover" }}
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
        <p className="text-secondary">請選擇一個商品查看</p>
      )}
    </aside>
  );
}
