import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, ShoppingCart, Heart, Menu } from "lucide-react";
import { useSelector } from "react-redux";
import { useApp } from "../context/AppContext";

export default function Navbar() {
  const searchRef = useRef(null);

  const cart = useSelector((state) => state.cart.items);
  const { wishlist } = useApp();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const searchProducts = (event) => {
    if (event.key === "Enter") {
      const value = searchRef.current.value.trim();

      if (value) {
        window.location.href =
          `/shop?q=${encodeURIComponent(value)}`;
      }
    }
  };

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <span>BANKAI</span> STORE<span className="logo-dot">.</span>
      </Link>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </nav>

      <div className="nav-actions">
        <div className="nav-search">
          <Search size={17} />
          <input
            ref={searchRef}
            placeholder="Search anime..."
            onKeyDown={searchProducts}
          />
        </div>

        <Link to="/wishlist" className="nav-icon">
          <Heart size={21} />
          <span>{wishlist.length}</span>
        </Link>

        <Link to="/cart" className="nav-icon">
          <ShoppingCart size={21} />
          <span>{cartCount}</span>
        </Link>

        <Link to="/shop" className="mobile-shop">
          <Menu size={22} />
        </Link>
      </div>
    </header>
  );
}