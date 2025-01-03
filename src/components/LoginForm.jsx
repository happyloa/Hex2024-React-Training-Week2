export default function LoginForm({
  formData,
  handleInputChange,
  handleSubmit,
}) {
  return (
    <form id="form" className="form-signin" onSubmit={handleSubmit}>
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
        />
        <label htmlFor="username">Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="password">Password</label>
      </div>
      <button className="btn btn-lg btn-primary w-100 mt-3" type="submit">
        登入
      </button>
    </form>
  );
}
