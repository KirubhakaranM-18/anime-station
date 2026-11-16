import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../redux/cartSlice";

export default function Cart() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * 85 * item.quantity,
    0
  );

  return (
    <section className="section">
      <span className="eyebrow">YOUR SELECTION</span>
      <h1>SHOPPING <span>CART</span></h1>

      {items.length === 0 ? (
        <div className="empty-state">
          <h2>Your cart is empty!</h2>
          <Link to="/shop" className="primary-btn">SHOP NOW</Link>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />

                <div className="cart-item-info">
                  <h3>{item.title}</h3>
                  <strong>₹{Math.round(item.price * 85)}</strong>

                  <div className="quantity">
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <p>Total: <strong>₹{Math.round(total)}</strong></p>
            <button
              className="primary-btn"
              onClick={() => alert("Demo only: checkout is not connected.")}
            >
              PROCEED TO CHECKOUT
            </button>
            <button
              className="clear-btn"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </section>
  );
}