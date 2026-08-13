import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShirt,
  faLaptop,
  faCouch,
  faSpa,
} from "@fortawesome/free-solid-svg-icons";

const featuredProducts = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  name: `Featured Product ${index + 1}`,
  category: "Product category",
  price: "$00.00",
}));

function Home() {
  return (
    <main>
      <section id="hero-section">
        <div className="container">
          <h1> Discover something new. </h1>
          <p> Everything you need, all in one place.</p>
          <button>
            <NavLink to={"/store"}>Shop now</NavLink>
          </button>
        </div>
      </section>

      <section id="categories-section">
        <div className="container">
          <div className="section-heading">
            <p>Browse by category</p>
            <h2>Shop what you need</h2>
          </div>

          <div className="categories-grid">
            <div className="category-card clothing-card">
              <NavLink to="/clothing">
                <FontAwesomeIcon className="category-icon" icon={faShirt} />
                <div>
                  <h3>Clothing</h3>
                  <span>Shop collection</span>
                </div>
              </NavLink>
            </div>

            <div className="category-card electronics-card">
              <NavLink to="/electronics">
                <FontAwesomeIcon className="category-icon" icon={faLaptop} />
                <div>
                  <h3>Electronics</h3>
                  <span>Shop collection</span>
                </div>
              </NavLink>
            </div>

            <div className="category-card home-card">
              <NavLink to="/home-equipment">
                <FontAwesomeIcon className="category-icon" icon={faCouch} />
                <div>
                  <h3>Home Equipment</h3>
                  <span>Shop collection</span>
                </div>
              </NavLink>
            </div>

            <div className="category-card beauty-card">
              <NavLink to="/beauty-equipment">
                <FontAwesomeIcon className="category-icon" icon={faSpa} />
                <div>
                  <h3>Beauty Equipment</h3>
                  <span>Shop collection</span>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-products-section">
        <div className="container">
          <div className="section-heading">
            <p>Just for you</p>
            <h2>Featured products</h2>
          </div>

          <div className="featured-products-grid">
            {featuredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image-placeholder">Product image</div>
                <div className="product-details">
                  <p>{product.category}</p>
                  <h3>{product.name}</h3>
                  <span>{product.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
