import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="empty-state section">
      <h1>404</h1>
      <h2>Looks like you entered the wrong universe!</h2>
      <Link to="/" className="primary-btn">BACK TO HOME</Link>
    </section>
  );
}