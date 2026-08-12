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

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);
  return (
    <>
      <header className={mobileMenuOpen ? "close" : "open"}>
        <div className="container">
          <nav>
            {/* Logo container */}
            <div className="logo-container">
              <Link to={"/"}>
                {" "}
                <img src={logoUrl} alt="NOVA E-commerece logo" />
              </Link>
            </div>

            {/* links container */}

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
                to={"/catagories"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Catagories
              </NavLink>
            </div>

            {/* Cart and login link container */}

            <div className="cart-link-container links-container">
              <NavLink to={"/cart"}>
                {" "}
                <FontAwesomeIcon icon={faCartShopping} />
              </NavLink>
              <NavLink to={"/login"}>
                {" "}
                <FontAwesomeIcon icon={faUser} />
              </NavLink>
            </div>

            {/* Mobile menu toggle button*/}
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
              {" "}
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
              to={"/catagories"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Catagories
            </NavLink>
            <NavLink to={"/cart"}>
              {" "}
              <FontAwesomeIcon icon={faCartShopping} />
            </NavLink>
            <NavLink to={"/login"}>
              {" "}
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
