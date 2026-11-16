import { useState } from "react";
import useProducts from "../hooks/useProducts";

export default function Admin() {
  const { products, loading, error } = useProducts();

  const [customProducts, setCustomProducts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "Anime Figures",
  });

  const [editingId, setEditingId] = useState(null);

  const allProducts = [...products, ...customProducts];

  const saveProduct = (e) => {
    e.preventDefault();

    if (!form.title.trim() || Number(form.price) <= 0) {
      alert("Enter a product name and a valid price.");
      return;
    }

    if (editingId) {
      setCustomProducts((current) =>
        current.map((product) =>
          product.id === editingId
            ? { ...product, ...form, price: Number(form.price) }
            : product
        )
      );
      setEditingId(null);
    } else {
      setCustomProducts((current) => [
        ...current,
        {
          ...form,
          id: Date.now(),
          price: Number(form.price),
          thumbnail: "https://placehold.co/150x150/171322/ffffff?text=Anime",
        },
      ]);
    }

    setForm({ title: "", price: "", category: "Anime Figures" });
  };

  const editProduct = (product) => {
    if (!customProducts.some((item) => item.id === product.id)) {
      alert("Only products created in this admin session can be edited.");
      return;
    }

    setEditingId(product.id);

    setForm({
      title: product.title,
      price: product.price,
      category: product.category,
    });
  };

  const deleteProduct = (id) => {
    if (customProducts.some((item) => item.id === id)) {
      setCustomProducts((current) =>
        current.filter((product) => product.id !== id)
      );
    } else {
      alert("API sample products cannot be deleted permanently.");
    }
  };

  return (
    <section className="section admin-page">
      <span className="eyebrow">STORE MANAGEMENT</span>
      <h1>ADMIN <span>DASHBOARD</span></h1>

      <form className="admin-form" onSubmit={saveProduct}>
        <h2>{editingId ? "Update Product" : "Add New Product"}</h2>

        <input
          placeholder="Product name"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />

        <input
          type="number"
          placeholder="Price"
          min="1"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />

        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          <option>Anime Figures</option>
          <option>Manga</option>
          <option>Accessories</option>
        </select>

        <button className="primary-btn" type="submit">
          {editingId ? "UPDATE PRODUCT" : "ADD PRODUCT"}
        </button>
      </form>

      <h2>Product Inventory ({allProducts.length})</h2>

      {loading && <p className="status">Loading inventory...</p>}
      {error && <p className="status error">{error}</p>}

      <div className="admin-list">
        {allProducts.map((product) => (
          <div className="admin-row" key={product.id}>
            <span>{product.title}</span>
            <strong>₹{Math.round(product.price * 85).toLocaleString("en-IN")}</strong>

            <button onClick={() => editProduct(product)}>Edit</button>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </section>
  );
}