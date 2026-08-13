import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShirt,
  faLaptop,
  faCouch,
  faSpa,
} from "@fortawesome/free-solid-svg-icons";
import { featuredProducts as fetchFeaturedProducts } from "../api/api";

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [productsError, setProductsError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadFeaturedProducts = async () => {
      try {
        const products = await fetchFeaturedProducts();

        if (isMounted) {
          setFeaturedProducts(products);
        }
      } catch {
        if (isMounted) {
          setProductsError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoadingProducts(false);
        }
      }
    };

    loadFeaturedProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main>
      <section id="hero-section">
        <div className="container">
          <div className="hero-content">
            <p className="hero-eyebrow">NOVA essentials</p>
            <h1>Discover something new.</h1>
            <p className="hero-description">
              Everything you need, all in one place.
            </p>
            <NavLink className="hero-cta" to="/store">
              Shop now
            </NavLink>
          </div>
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
            {isLoadingProducts &&
              Array.from({ length: 4 }, (_, index) => (
                <article
                  className="product-card product-card-placeholder"
                  key={index}
                >
                  <div className="product-image-placeholder" />
                  <div className="product-detail-placeholder">
                    <span className="placeholder-line short" />
                    <span className="placeholder-line medium" />
                    <span className="placeholder-line full" />
                  </div>
                </article>
              ))}

            {productsError && (
              <p className="products-message">
                Featured products could not be loaded.
              </p>
            )}

            {!isLoadingProducts &&
              !productsError &&
              featuredProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <NavLink to={`/products/${product.id}`}>
                    <img src={product.image} alt={product.title} />
                    <div className="product-details">
                      <p>{product.category}</p>
                      <h3>{product.title}</h3>
                      <div className="product-meta">
                        <span>${product.price.toFixed(2)}</span>
                        <small>{product.rating.toFixed(1)} / 5</small>
                      </div>
                    </div>
                  </NavLink>
                </article>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
