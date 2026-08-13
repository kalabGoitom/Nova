import { Link } from "react-router";

function NotFound() {
  return (
    <main className="auth-page">
      <div className="auth-card" style={{ textAlign: "center" }}>
        <h1>404</h1>
        <p>Oops! This page does not exist.</p>
        <Link
          to="/"
          className="auth-button"
          style={{ display: "inline-block" }}
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
