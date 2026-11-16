import { Link, Outlet, useSearchParams, useParams } from "react-router-dom";
import { useEffect } from "react";

import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

const categories = [
  { name: "All Products", path: "" },
  { name: "One Piece", path: "one-piece" },
  { name: "Naruto", path: "naruto" },
  { name: "Black Clover", path: "black-clover" },
  { name: "Demon Slayer", path: "demon-slayer" },
  { name: "Jujutsu Kaisen", path: "jujutsu-kaisen" },
];

export default function Shop() {
  return (
    <section className="section shop-page">
      <span className="eyebrow">EXPLORE THE COLLECTION</span>
      <h1>ANIME <span>STORE</span></h1>

      <div className="category-tabs">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.path ? `/shop/${category.path}` : "/shop"}
          >
            {category.name}
          </Link>
        ))}
      </div>

      <Outlet />
    </section>
  );
}

export function ShopCategory() {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q") || "";
  const { products, loading, error } = useProducts();

  useEffect(() => {
    if (query) {
      document.title = `${query} | Bankai Store`;
    } else {
      document.title = "Shop | Bankai Store";
    }
  }, [query]);

  const categoryKeywords = {
    "one-piece": ["one piece"],
    naruto: ["naruto"],
    "black-clover": ["black clover"],
    "demon-slayer": ["demon slayer"],
    "jujutsu-kaisen": ["jujutsu kaisen"],
  };

  const filtered = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(query.toLowerCase());

    const keywords = categoryKeywords[category] || [];

    const matchesCategory =
      !category ||
      category === "all" ||
      keywords.some((keyword) =>
        `${product.title} ${product.series} ${product.category}`
          .toLowerCase()
          .includes(keyword)
      );

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="shop-toolbar">
        <input
          value={query}
          placeholder="Search products..."
          onChange={(e) => {
            const value = e.target.value;
            setSearchParams(value ? { q: value } : {});
          }}
        />

        <span>{filtered.length} products found</span>
      </div>

      {loading && <p className="status">Loading products...</p>}
      {error && <p className="status error">{error}</p>}

      {!loading && filtered.length === 0 && (
        <p className="status">No products found. Try another search.</p>
      )}

      <div className="product-grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}