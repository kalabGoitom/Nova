import logoUrl from "../assets/logo.png";
import { NavLink, Link } from "react-router";

function Nav() {
  return (
    <header>
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

          <div className="link-container">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/store"}>Store</NavLink>
            <NavLink to={"/catagories"}>Catagories</NavLink>
          </div>

          {/* Cart and login link container */}

          <div className="cart-link-container">
            <NavLink to={"/cart"}>Cart</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
