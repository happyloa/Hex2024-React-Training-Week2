export default function ProductDetail({ tempProduct }) {
  return (
    <aside className="col-md-6">
      <h2>單一產品細節</h2>
      {tempProduct ? (
        <div className="card mb-3">
          {/* 主圖 */}
          <img
            src={tempProduct.imageUrl}
            className="card-img-top primary-image"
            alt="主圖"
          />
          {/* 詳細內容 */}
          <div className="card-body">
            <h5 className="card-title">
              {tempProduct.title}
              <span className="badge bg-primary ms-2">
                {tempProduct.category}
              </span>
            </h5>
            <p className="card-text">商品描述：{tempProduct.category}</p>
            <p className="card-text">商品內容：{tempProduct.content}</p>
            <div className="d-flex">
              <p className="card-text text-secondary">
                <del>{tempProduct.origin_price}</del>
              </p>
              元 / {tempProduct.price} 元
            </div>
            {/* 更多圖片 */}
            <h5 className="mt-3">更多圖片：</h5>
            <div className="d-flex flex-wrap">
              {tempProduct.imagesUrl?.map((url, index) => (
                <img key={index} src={url} className="images" alt="副圖" />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-secondary">請選擇一個商品查看</p>
      )}
    </aside>
  );
}
