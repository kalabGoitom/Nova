import { Link } from "react-router";

function CheckoutVerification() {
  const verification = JSON.parse(
    localStorage.getItem("nova_checkout_verification") || "{}",
  );

  return (
    <main className="auth-page">
      <div className="auth-card account-card">
        <h1>Checkout verified</h1>
        <p>Your purchase was successfully processed.</p>

        <div className="account-info">
          <p>
            <strong>Order ID:</strong> {verification.orderId || "N/A"}
          </p>
          <p>
            <strong>Total:</strong> ${verification.total || "0.00"}
          </p>
          <p>
            <strong>Email:</strong> {verification.email || "N/A"}
          </p>
          <p>
            <strong>Time:</strong>{" "}
            {verification.timestamp
              ? new Date(verification.timestamp).toLocaleString()
              : "N/A"}
          </p>
        </div>

        <Link
          to="/account"
          className="auth-button"
          style={{ display: "inline-block", textAlign: "center" }}
        >
          View account
        </Link>
      </div>
    </main>
  );
}

export default CheckoutVerification;
