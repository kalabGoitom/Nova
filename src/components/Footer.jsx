import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-brand">
          <h2>NOVA</h2>
          <p>Everything you need, all in one place.</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <div className="footer-column">
            <h3>Shop</h3>
            <NavLink to="/store">All products</NavLink>
            <NavLink to="/products">Browse store</NavLink>
            <NavLink to="/cart">Cart</NavLink>
          </div>

          <div className="footer-column">
            <h3>Categories</h3>
            <NavLink to="/clothing">Clothing</NavLink>
            <NavLink to="/electronics">Electronics</NavLink>
            <NavLink to="/home-equipment">Home Equipment</NavLink>
            <NavLink to="/beauty-equipment">Beauty Equipment</NavLink>
          </div>

          <div className="footer-column">
            <h3>Account</h3>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
            <NavLink to="/account">My Account</NavLink>
          </div>
        </nav>

        <p className="footer-copyright">
          &copy; 2026 NOVA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
