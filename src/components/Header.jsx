import { useState } from "react";
import logoUrl from "../assets/logo.png";
import { NavLink, Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/useCart";
import { useAuth } from "../context/AuthContext";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const { isAuthenticated } = useAuth();

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className={mobileMenuOpen ? "close" : "open"}>
        <div className="container">
          <nav>
            <div className="logo-container">
              <Link to={"/"}>
                <img src={logoUrl} alt="NOVA E-commerece logo" />
              </Link>
            </div>

            <div className="link-container links-container">
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to={"/store"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Store
              </NavLink>

              <NavLink
                aria-label={`Cart, ${itemCount} items`}
                className="cart-link"
                to={"/cart"}
              >
                <FontAwesomeIcon icon={faCartShopping} />
                {itemCount > 0 && (
                  <span className="cart-count">{itemCount}</span>
                )}
              </NavLink>
              <NavLink to={isAuthenticated ? "/account" : "/login"}>
                <FontAwesomeIcon icon={faUser} />
              </NavLink>
            </div>

            <button className="menu-btn" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </nav>
        </div>
      </header>

      <div className={`mobile-menu ${mobileMenuOpen ? "open" : "close"}`}>
        <div className="conatiner">
          <div className="logo-container">
            <Link to={"/"}>
              <img src={logoUrl} alt="NOVA E-commerece logo" />
            </Link>

            <button className="close-btn" onClick={closeMenu}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <div className="links-container">
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to={"/store"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Store
            </NavLink>
            <NavLink
              to={"/catagories"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Catagories
            </NavLink>
            <NavLink
              aria-label={`Cart, ${itemCount} items`}
              className="cart-link"
              to={"/cart"}
              onClick={closeMenu}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
            </NavLink>
            <NavLink
              to={isAuthenticated ? "/account" : "/login"}
              onClick={closeMenu}
            >
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
