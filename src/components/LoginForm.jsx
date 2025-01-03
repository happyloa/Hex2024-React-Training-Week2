export default function LoginForm({
  formData,
  handleInputChange,
  handleSubmit,
}) {
  return (
    <form id="form" className="form-signin" onSubmit={handleSubmit}>
      {/* Email 輸入框 */}
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="username"
          placeholder="name@example.com"
          value={formData.username}
          onChange={handleInputChange}
          required
          autoFocus
          style={{ height: "50px", width: "100%" }} // 增加高度與寬度
        />
        <label htmlFor="username">Email address</label>
      </div>
      {/* 密碼輸入框 */}
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
          style={{ height: "50px", width: "100%" }} // 增加高度與寬度
        />
        <label htmlFor="password">Password</label>
      </div>
      {/* 提交按鈕 */}
      <button
        className="btn btn-lg btn-primary w-100 mt-3"
        type="submit"
        style={{ height: "50px" }}>
        登入
      </button>
    </form>
  );
}
