import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";

import { addToCart } from "../redux/cartSlice";
import { useApp } from "../context/AppContext";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const { wishlist, toggleWishlist, notify } = useApp();

  const isFavorite = wishlist.some(
    (item) => item.id === product.id
  );

  const handleCart = () => {
    dispatch(addToCart(product));
    notify("Added to your cart!");
  };

  return (
    <article className="product-card">
      <div className="product-image">
        <Link to={`/product/${product.id}`}>
          <img src={product.thumbnail} alt={product.title} />
        </Link>

        <button
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={() => toggleWishlist(product)}
          aria-label="Toggle wishlist"
        >
          <Heart size={19} fill={isFavorite ? "currentColor" : "none"} />
        </button>

        <span className={`product-tag ${product.featured ? "featured" : ""}`}>
          {product.badge || "COLLECTOR'S PICK"}
        </span>
      </div>

      <div className="product-info">
        <p className="product-category">{product.series || product.category}</p>

        <Link
          to={`/product/${product.id}`}
          className="product-title"
        >
          {product.title}
        </Link>

        <div className="product-bottom">
          <strong>₹{Math.round(product.price * 85).toLocaleString("en-IN")}</strong>

          <button
            className="add-btn"
            onClick={handleCart}
            aria-label="Add to cart"
          >
            <ShoppingCart size={17} />
          </button>
        </div>
      </div>
    </article>
  );
}