import { Sparkles, Users, Heart } from "lucide-react";

export default function About() {
  return (
    <section className="section about-page">
      <span className="eyebrow">OUR STORY</span>
      <h1>WELCOME TO <span>BANKAI STORE</span></h1>

      <p className="about-intro">
        Bankai Store is a destination created for people who
        love anime, manga and collectible merchandise.
      </p>

      <div className="about-grid">
        <div><Sparkles /><h2>Our Mission</h2><p>Bring anime-inspired collectibles closer to fans.</p></div>
        <div><Users /><h2>Our Community</h2><p>A place where anime lovers can celebrate their passion.</p></div>
        <div><Heart /><h2>Our Passion</h2><p>Making every collection special and memorable.</p></div>
      </div>
    </section>
  );
}