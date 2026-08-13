import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router";
import { productCategories, products as getProducts } from "../api/api";

const PAGE_SIZE = 12;

function Products() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    let mounted = true;

    async function loadInitialProducts() {
      setLoading(true);
      setError("");

      try {
        const data = await getProducts(PAGE_SIZE, 0, category);

        if (mounted) {
          setProducts(data.products);
          setTotal(data.total);
        }
      } catch {
        if (mounted) setError("Products could not be loaded. Please try again.");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadInitialProducts();

    return () => {
      mounted = false;
    };
  }, [category]);

  useEffect(() => {
    let mounted = true;

    async function loadCategories() {
      try {
        const data = await productCategories();

        if (mounted) {
          setCategories(data.map((item) => (typeof item === "string" ? item : item.slug)));
        }
      } catch {
        // The store remains usable when the optional category list is unavailable.
      }
    }

    loadCategories();

    return () => {
      mounted = false;
    };
  }, []);

  const displayedProducts = useMemo(() => {
    return [...products].sort((first, second) => {
      if (sortBy === "price-low") return first.price - second.price;
      if (sortBy === "price-high") return second.price - first.price;
      if (sortBy === "rating") return second.rating - first.rating;
      return 0;
    });
  }, [products, sortBy]);

  async function handleLoadMore() {
    setLoadingMore(true);
    setError("");

    try {
      const data = await getProducts(PAGE_SIZE, products.length, category);
      setProducts((currentProducts) => [...currentProducts, ...data.products]);
      setTotal(data.total);
    } catch {
      setError("More products could not be loaded. Please try again.");
    } finally {
      setLoadingMore(false);
    }
  }

  return (
    <main className="products-page">
      <section className="products-header">
        <div className="container">
          <p className="products-eyebrow">NOVA store</p>
          <h1>Explore all products</h1>
          <p>Find everyday essentials across every category.</p>
        </div>
      </section>

      <section className="products-catalog">
        <div className="container catalog-layout">
          <aside className="filters-panel" aria-label="Product filters">
            <div className="filters-heading">
              <h2>Filters</h2>
              <button
                onClick={() => {
                  setCategory("");
                  setSortBy("featured");
                }}
                type="button"
              >
                Clear all
              </button>
            </div>

            <fieldset className="filter-group">
              <legend>Categories</legend>
              <label>
                <input checked={!category} name="category" onChange={() => setCategory("")} type="radio" />
                <span>All categories</span>
              </label>
              {categories.map((item) => (
                <label key={item}>
                  <input
                    checked={category === item}
                    name="category"
                    onChange={() => setCategory(item)}
                    type="radio"
                  />
                  <span>{item.replaceAll("-", " ")}</span>
                </label>
              ))}
            </fieldset>
          </aside>

          <div className="catalog-content">
            <div className="catalog-toolbar">
              <p>{loading ? "Loading products..." : `${displayedProducts.length} products shown`}</p>
              <label className="sort-control">
                Sort by
                <select onChange={(event) => setSortBy(event.target.value)} value={sortBy}>
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: low to high</option>
                  <option value="price-high">Price: high to low</option>
                  <option value="rating">Highest rated</option>
                </select>
              </label>
            </div>

            {error && <p className="catalog-message">{error}</p>}

            <div className="catalog-grid">
              {loading && Array.from({ length: PAGE_SIZE }, (_, index) => (
                <article className="catalog-product-placeholder" key={index}>
                  <div className="catalog-image-placeholder" />
                  <div className="catalog-copy-placeholder"><span /><strong /><em /></div>
                </article>
              ))}

              {!loading && displayedProducts.map((product) => (
                <article className="catalog-product" key={product.id}>
                  <NavLink to={`/products/${product.id}`}>
                    <img alt={product.title} src={product.thumbnail} />
                    <div className="catalog-product-details">
                      <p>{product.category}</p>
                      <h2>{product.title}</h2>
                      <div>
                        <strong>${product.price.toFixed(2)}</strong>
                        <span>{product.rating.toFixed(1)} / 5</span>
                      </div>
                    </div>
                  </NavLink>
                </article>
              ))}
            </div>

            {!loading && !error && displayedProducts.length === 0 && (
              <p className="catalog-message">No products found in this category.</p>
            )}

            {products.length < total && (
              <div className="load-more-wrap">
                <button disabled={loadingMore} onClick={handleLoadMore} type="button">
                  {loadingMore ? "Loading..." : "Load more products"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Products;
