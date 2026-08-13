import { useAuth } from "../context/AuthContext";

function Account() {
  const { user, token, logout } = useAuth();

  return (
    <main className="auth-page">
      <div className="auth-card account-card">
        <h1>My account</h1>
        <p>Protected area — you can only see this when logged in.</p>

        <div className="account-info">
          <p>
            <strong>Name:</strong> {user?.name}
          </p>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
          <p>
            <strong>Token:</strong> {token || "No token"}
          </p>
        </div>

        <button className="auth-button danger" onClick={logout}>
          Logout
        </button>
      </div>
    </main>
  );
}

export default Account;
