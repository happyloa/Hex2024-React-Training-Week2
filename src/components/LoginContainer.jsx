import LoginForm from "./LoginForm";

export default function LoginContainer({
  formData,
  handleInputChange,
  handleSubmit,
}) {
  return (
    <section className="container login">
      <div className="row justify-content-center">
        {/* 登入標題 */}
        <div className="col-12 text-center mb-4">
          <h1 className="h3 fw-bold text-primary">請先登入</h1>
          <p className="text-muted">輸入您的帳號與密碼以進行登入</p>
        </div>
        {/* 表單區域 */}
        <div className="col-10 col-md-8 col-lg-6">
          <div className="card shadow p-4 border-0">
            <h2 className="h5 text-center mb-4">登入您的帳戶</h2>
            <LoginForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
      {/* 版權資訊 */}
      <footer className="mt-5 mb-3 text-muted text-center">
        <p>&copy; 2024~∞ - 六角學院 2024 React 作品實戰冬季班</p>
        <p>第二週作業 - RESTful API 串接 by Aaron</p>
      </footer>
    </section>
  );
}
