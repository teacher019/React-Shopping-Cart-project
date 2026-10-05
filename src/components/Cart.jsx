import { useCart } from '../hooks/useCart';

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <section className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
      </section>
    );
  }

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = 10;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    alert('Checkout feature coming soon!');
  };

  return (
    <section className="cart">
      <h2>Your Cart</h2>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="cart-item-image"
            />

            <div className="cart-item-info">
              <h3>{item.title}</h3>
              <p>{item.category}</p>
              <p>${item.price.toFixed(2)}</p>

              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)}>
                  -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQuantity(item.id)}>
                  +
                </button>
              </div>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Order Summary</h2>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="summary-row">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>

        <div className="summary-total">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <div className="cart-actions">
          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>

          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
