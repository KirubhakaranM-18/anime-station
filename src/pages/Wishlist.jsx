import { useApp } from "../context/AppContext";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const { wishlist } = useApp();

  return (
    <section className="section">
      <span className="eyebrow">YOUR FAVOURITES</span>
      <h1>MY <span>WISHLIST</span></h1>

      {wishlist.length === 0 ? (
        <div className="empty-state">
          <h2>Your wishlist is empty.</h2>
          <p>Save your favourite collectibles here.</p>
          <Link to="/shop" className="primary-btn">EXPLORE SHOP</Link>
        </div>
      ) : (
        <div className="product-grid">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}