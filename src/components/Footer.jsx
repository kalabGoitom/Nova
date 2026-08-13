import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-brand">
          <h2>NOVA</h2>
          <p>Everything you need, all in one place.</p>
        </div>

        <nav className="footer-categories" aria-label="Product categories">
          <h3>Shop categories</h3>
          <NavLink to="/clothing">Clothing</NavLink>
          <NavLink to="/electronics">Electronics</NavLink>
          <NavLink to="/home-equipment">Home Equipment</NavLink>
          <NavLink to="/beauty-equipment">Beauty Equipment</NavLink>
        </nav>

        <p className="footer-copyright">&copy; 2026 NOVA. All rights reserved.</p>
      </div>
    </footer>
  );
}
