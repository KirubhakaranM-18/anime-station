import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link to="/" className="logo">
          <span>BANKAI</span> STORE.
        </Link>
        <p>Your ultimate destination for anime collectibles.</p>
      </div>

      <div className="footer-links">
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/admin">Admin</Link>
      </div>

      <p className="copyright">
        © 2026 Bankai Store. All rights reserved.
      </p>
    </footer>
  );
}