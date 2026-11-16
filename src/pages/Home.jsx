import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Package, ShieldCheck } from "lucide-react";

import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { products, loading, error } = useProducts();

  const spotlightProducts = products.filter((product) => product.featured).slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            <Sparkles size={15} /> WELCOME TO THE ANIME UNIVERSE
          </span>

          <h1>
            YOUR ANIME.
            <br />
            YOUR <span>WORLD.</span>
          </h1>

          <p>
            Discover premium anime figures, manga, collectibles
            and accessories. Bring your favourite characters home.
          </p>

          <Link to="/shop" className="primary-btn">
            EXPLORE COLLECTION <ArrowRight size={18} />
          </Link>

          <div className="hero-stats">
            <div><strong>500+</strong><small>Collectibles</small></div>
            <div><strong>50+</strong><small>Anime Series</small></div>
            <div><strong>100%</strong><small>Fan Approved</small></div>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=900"
            alt="Anime art collection"
          />
          <div className="floating-label">
            <Sparkles size={17} />
            <span>LEVEL UP YOUR COLLECTION</span>
          </div>
        </div>
      </section>

      <section className="features">
        <div><Package /><span><b>Premium Collection</b><small>Curated merchandise</small></span></div>
        <div><ShieldCheck /><span><b>Secure Shopping</b><small>Safe shopping experience</small></span></div>
        <div><Sparkles /><span><b>Anime Lovers</b><small>Made for true fans</small></span></div>
      </section>

      <section className="section spotlight-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SERIES SPOTLIGHT</span>
            <h2>TOP <span>FEATURED</span> PICKS</h2>
          </div>
          <Link to="/shop" className="text-link">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        <div className="spotlight-grid">
          {spotlightProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="spotlight-card">
              <img src={product.thumbnail} alt={product.title} />
              <div className="spotlight-card-body">
                <span className="spotlight-badge">{product.badge || "Featured"}</span>
                <h3>{product.title}</h3>
                <p>{product.series}</p>
                <strong>₹{Math.round(product.price * 85).toLocaleString("en-IN")}</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">HANDPICKED FOR YOU</span>
            <h2>FEATURED <span>COLLECTION</span></h2>
          </div>
          <Link to="/shop" className="text-link">
            View all <ArrowRight size={16} />
          </Link>
        </div>

        {loading && <p className="status">Loading collection...</p>}
        {error && <p className="status error">{error}</p>}

        <div className="product-grid">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="promo">
        <div>
          <span className="eyebrow">THE COLLECTION STARTS HERE</span>
          <h2>YOUR NEXT FAVOURITE<br />IS WAITING.</h2>
          <Link to="/shop" className="primary-btn">
            SHOP NOW <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}