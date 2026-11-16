import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ShoppingCart, ArrowLeft } from "lucide-react";

import useProducts from "../hooks/useProducts";
import { addToCart } from "../redux/cartSlice";
import { useApp } from "../context/AppContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { products, loading, error } = useProducts();

  const dispatch = useDispatch();
  const { notify } = useApp();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (loading) return <p className="status">Loading product...</p>;
  if (error) return <p className="status error">{error}</p>;

  if (!product) {
    return <p className="status">Product not found.</p>;
  }

  return (
    <section className="section details-page">
      <Link to="/shop" className="text-link">
        <ArrowLeft size={17} /> Back to shop
      </Link>

      <div className="details-layout">
        <div className="details-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        <div className="details-info">
          <span className="eyebrow">
            {product.series || product.category}
          </span>
          <h1>{product.title}</h1>

          <h2>₹{Math.round(product.price * 85).toLocaleString("en-IN")}</h2>

          <p>{product.description}</p>

          <p>Rating: ⭐ {product.rating}/5</p>

          <button
            className="primary-btn"
            onClick={() => {
              dispatch(addToCart(product));
              notify("Product added to cart!");
            }}
          >
            <ShoppingCart size={18} /> ADD TO CART
          </button>
        </div>
      </div>
    </section>
  );
}