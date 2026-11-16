import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function Contact() {
  const { notify } = useApp();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.subject.trim()) newErrors.subject = "Subject is required";

    if (form.message.trim().length < 10) {
      newErrors.message = "Message must contain at least 10 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      notify("Your demo message has been submitted!");
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="section contact-page">
      <span className="eyebrow">WE ARE HERE TO HELP</span>
      <h1>CONTACT <span>US</span></h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        {["name", "email", "subject"].map((field) => (
          <div key={field}>
            <label>{field.toUpperCase()}</label>
            <input
              name={field}
              value={form[field]}
              onChange={handleChange}
              placeholder={`Enter your ${field}`}
            />
            {errors[field] && <small className="form-error">{errors[field]}</small>}
          </div>
        ))}

        <div>
          <label>MESSAGE</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
          />
          {errors.message && <small className="form-error">{errors.message}</small>}
        </div>

        <button className="primary-btn" type="submit">
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
}