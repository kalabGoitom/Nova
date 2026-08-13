import { NavLink, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/useCart";
import { useAuth } from "../context/AuthContext";

function Cart() {
  const navigate = useNavigate();
  const { items, removeItem, subtotal, updateQuantity } = useCart();
  const { isAuthenticated, user } = useAuth();

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: "/cart" } });
      return;
    }

    if (items.length === 0) return;

    const verification = {
      orderId: `NOVA-${Date.now()}`,
      total: subtotal.toFixed(2),
      email: user?.email || "guest@nova.com",
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem(
      "nova_checkout_verification",
      JSON.stringify(verification),
    );

    items.forEach((item) => removeItem(item.id));

    navigate("/checkout/verification");
  };

  return (
    <main className="cart-page">
      <div className="container">
        <div className="cart-heading">
          <p>Your order</p>
          <h1>Shopping cart</h1>
        </div>

        {items.length === 0 ? (
          <section className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Add products from the store to see them here.</p>
            <NavLink to="/products">Browse products</NavLink>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items" aria-label="Cart items">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img alt={item.title} src={item.thumbnail} />
                  <div className="cart-item-info">
                    <p>{item.category.replaceAll("-", " ")}</p>
                    <h2>{item.title}</h2>
                    <strong>${item.price.toFixed(2)}</strong>
                  </div>
                  <div
                    className="quantity-control"
                    aria-label={`Quantity for ${item.title}`}
                  >
                    <button
                      aria-label="Decrease quantity"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      type="button"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      aria-label="Increase quantity"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      type="button"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                  <p className="cart-item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    className="remove-item"
                    onClick={() => removeItem(item.id)}
                    type="button"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                    <span>Remove</span>
                  </button>
                </article>
              ))}
            </section>

            <aside className="cart-summary">
              <h2>Order summary</h2>
              <div>
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
              <div>
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="cart-total">
                <span>Total</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
              <button type="button" onClick={handleCheckout}>
                Proceed to checkout
              </button>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}

export default Cart;
