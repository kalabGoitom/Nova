import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import { product as getProduct } from "../api/api";
import { useCart } from "../context/useCart";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    let active = true;

    async function loadProduct() {
      setProduct(null);
      setError(false);

      try {
        const data = await getProduct(id);
        if (active) setProduct(data);
      } catch {
        if (active) setError(true);
      }
    }

    loadProduct();

    return () => {
      active = false;
    };
  }, [id]);

  if (error) {
    return (
      <main className="product-details-page">
        <div className="container details-message">
          <h1>Product not found</h1>
          <NavLink to="/products">Return to products</NavLink>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="product-details-page">
        <div className="container details-message">Loading product...</div>
      </main>
    );
  }

  return (
    <main className="product-details-page">
      <div className="container">
        <NavLink className="back-to-products" to="/products">Back to products</NavLink>

        <section className="product-details-layout">
          <div className="product-gallery">
            <img alt={product.title} src={product.thumbnail} />
          </div>

          <div className="product-information">
            <p className="product-category">{product.category.replaceAll("-", " ")}</p>
            <h1>{product.title}</h1>
            <p className="product-rating">{product.rating.toFixed(1)} / 5 rating</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <p className="product-description">{product.description}</p>
            <p className="product-stock">
              {product.availabilityStatus || `${product.stock} items in stock`}
            </p>
            <button onClick={() => addItem(product)} type="button">Add to cart</button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProductDetails;
