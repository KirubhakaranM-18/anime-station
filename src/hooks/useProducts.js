import { useEffect, useState } from "react";

const animeProducts = [
  {
    id: 1,
    title: "Monkey D. Luffy Premium Figure",
    price: 4999,
    category: "Figure",
    series: "One Piece",
    badge: "Collector Drop",
    featured: true,
    rating: 4.9,
    description:
      "A dynamic One Piece figure of Monkey D. Luffy in his iconic gear-five stance, built for collectors who love bold anime displays.",
    thumbnail:
      "https://i.pinimg.com/736x/43/49/f0/4349f0a7bb08bac1612811fa2051725b.jpg"
  },
  {
    id: 2,
    title: "Roronoa Zoro Battle Figure",
    price: 4599,
    category: "Figure",
    series: "One Piece",
    badge: "Limited Edition",
    featured: true,
    rating: 4.8,
    description:
      "One Piece collectible featuring Roronoa Zoro with a dramatic sword pose and premium, collector-ready detailing.",
    thumbnail:
      "https://i.pinimg.com/736x/36/d1/9a/36d19ae688a756bf426e63ae43aaee26.jpg"
  },
  {
    id: 3,
    title: "Naruto Uzumaki Hero Figure",
    price: 4299,
    category: "Figure",
    series: "Naruto",
    badge: "New Arrival",
    featured: true,
    rating: 4.9,
    description:
      "A vibrant Naruto figure capturing the spirit of the Hokage with energetic poses and vivid finishing details.",
    thumbnail:
      "https://i.pinimg.com/736x/1c/2a/e8/1c2ae881e72889576b4e5f91531cda43.jpg"
  },
  {
    id: 4,
    title: "Sasuke Uchiha Shadow Figure",
    price: 4399,
    category: "Figure",
    series: "Naruto",
    badge: "Fan Favorite",
    featured: false,
    rating: 4.8,
    description:
      "This Naruto collectible brings Sasuke to life with sharp details, dark styling, and a fierce battle-ready look.",
    thumbnail:
      "https://i.pinimg.com/1200x/72/18/c5/7218c51daaa0abe8d80b350247f060ea.jpg"
  },
  {
    id: 5,
    title: "Asta Black Clover Figure",
    price: 4199,
    category: "Figure",
    series: "Black Clover",
    badge: "Signature Pick",
    featured: false,
    rating: 4.7,
    description:
      "Asta's determined expression and signature anti-magic energy are perfectly captured in this Black Clover statue.",
    thumbnail:
      "https://i.pinimg.com/736x/50/07/c4/5007c42e8e984223fe6117c456bfc1bd.jpg",
  },
  {
    id: 6,
    title: "Yuno Grinberryall Figure",
    price: 4099,
    category: "Figure",
    series: "Black Clover",
    badge: "Fresh Drop",
    featured: false,
    rating: 4.8,
    description:
      "A sleek Black Clover figure with elegant detail work, making Yuno a standout addition to any anime display shelf.",
    thumbnail:
      "https://i.pinimg.com/1200x/c3/72/cd/c372cd06dc1f00b3927c21aedc39ec90.jpg"
  },
  {
    id: 7,
    title: "Yami Sukehiro Figure",
    price: 4499,
    category: "Figure",
    series: "Black Clover",
    badge: "Elite Pick",
    featured: true,
    rating: 4.8,
    description:
      "Bring home the intimidating aura of Yami Sukehiro with a premium Black Clover figure built for collectors.",
    thumbnail:
      "https://i.pinimg.com/1200x/f7/52/01/f75201dca484a5604fed56af9688701c.jpg",
  },
  {
    id: 8,
    title: "Tanjiro Kamado Collector Figure",
    price: 4299,
    category: "Figure",
    series: "Demon Slayer",
    badge: "Collector Drop",
    featured: true,
    rating: 4.9,
    description:
      "A detailed Demon Slayer figure of Tanjiro with expressive craftsmanship and a striking pose for your anime shrine.",
    thumbnail:
      "https://i.pinimg.com/1200x/bd/10/82/bd1082145e93210ca6d1c8904d4fb4df.jpg"
  },
  {
    id: 9,
    title: "Nezuko Kamado Figure",
    price: 3899,
    category: "Figure",
    series: "Demon Slayer",
    badge: "Cute Pick",
    featured: false,
    rating: 4.8,
    description:
      "A charming Demon Slayer figure with soft tones and a gentle expression that captures Nezuko's warmth.",
    thumbnail:
      "https://i.pinimg.com/736x/ca/14/7b/ca147b89394891d114b7299563e294cb.jpg" 
  },
  {
    id: 10,
    title: "Gojo Satoru Premium Figure",
    price: 4599,
    category: "Figure",
    series: "Jujutsu Kaisen",
    badge: "Limited Run",
    featured: true,
    rating: 4.9,
    description:
      "A standout Jujutsu Kaisen collectible featuring Gojo's confident style and dramatic anime energy.",
    thumbnail:
     "https://i.pinimg.com/736x/16/8b/dd/168bddb2ef496243b45593a0d6810d28.jpg"
  },
  {
    id: 11,
    title: "Itachi Uchiha Silent Figure",
    price: 4399,
    category: "Figure",
    series: "Naruto",
    badge: "Collector's Pick",
    featured: false,
    rating: 4.8,
    description:
      "This Naruto figure captures Itachi's calm, legendary aura with premium finish and iconic detailing.",
    thumbnail:
      "https://i.pinimg.com/736x/9d/46/2a/9d462a32c3d3f295ea32de14fced9f43.jpg"
  },
  {
    id: 12,
    title: "Sanji",
    price: 6999,
    category: "Figure",
    series: "One Piece",
    badge: "vinsmoke",
    featured: true,
    rating: 4.9,
    description:
      "A premium figure anime display set featuring One Piece's most iconic collector poses.",
    thumbnail:
      "https://i.pinimg.com/1200x/a7/bf/4d/a7bf4d599df5319d55b6ff2cd5d1fa64.jpg"
  },
  {
    id: 13,
    title: "Levi Ackerman Titan Slayer Figure",
    price: 5299,
    category: "Figure",
    series: "Attack on Titan",
    badge: "Legendary",
    featured: true,
    rating: 4.9,
    description:
      "A striking Attack on Titan collectible featuring Levi's iconic brutality, sharp lines, and premium finish work.",
    thumbnail:
      "https://i.pinimg.com/736x/dc/31/a9/dc31a95682b372be65164c47d6ca9060.jpg"
  },
  {
    id: 14,
    title: "Eren Yeager Final Battle Figure",
    price: 5099,
    category: "Figure",
    series: "Attack on Titan",
    badge: "Final Form",
    featured: false,
    rating: 4.8,
    description:
      "A dramatic Attack on Titan figure with intense energy, cinematic posing, and collector-level polish.",
    thumbnail:
      "https://i.pinimg.com/736x/22/86/e0/2286e0fac7253ec9b849a9c2061b3794.jpg"
  },
  {
    id: 15,
    title: "Sung Jin-Woo Shadow Soldier Figure",
    price: 4999,
    category: "Figure",
    series: "Solo Leveling",
    badge: "Dark Power",
    featured: true,
    rating: 4.9,
    description:
      "This Solo Leveling figure showcases Jin-Woo's iconic shadow aura with a commanding and premium display presence.",
    thumbnail:
      "https://i.pinimg.com/1200x/b0/1e/9b/b01e9bd4c294233be0cfd5f67663b2f9.jpg"
  },
  {
    id: 16,
    title: "Mikasa Ackerman Steel Figure",
    price: 4699,
    category: "Figure",
    series: "Attack on Titan",
    badge: "Heroic",
    featured: false,
    rating: 4.8,
    description:
      "A finely detailed Mikasa figure with a fierce expression and premium finish that makes her a standout shelf piece.",
    thumbnail:
      "https://i.pinimg.com/736x/33/7f/6e/337f6ea7730cc0aeec590f725731b634.jpg"
  },
  {
    id: 17,
    title: "Zenitsu Agatsuma Lightning Figure",
    price: 4599,
    category: "Figure",
    series: "Demon Slayer",
    badge: "Thunder Boost",
    featured: false,
    rating: 4.8,
    description:
      "Crafted to capture Zenitsu's electrifying energy and iconic pose with striking anime-inspired styling.",
    thumbnail:
      "https://i.pinimg.com/1200x/40/b1/fe/40b1fe2c4a56fee97c5801ca641c1647.jpg"
  },
  {
    id: 18,
    title: "Kakashi Hatake Copy Ninja Figure",
    price: 4899,
    category: "Figure",
    series: "Naruto",
    badge: "Elite Seal",
    featured: true,
    rating: 4.9,
    description:
      "A premium Kakashi collectible with copy-ninja energy and finely sculpted detail that fans will instantly recognize.",
    thumbnail:
      "https://i.pinimg.com/736x/ca/39/08/ca3908071c56717652d8b58ad6d24c68.jpg"
  },
  {
    id: 19,
    title: "Jimbei",
    price: 4199,
    category: "Figure",
    series: "One Piece",
    badge: "Quest Pick",
    featured: true,
    rating: 4.7,
    description:
      "A bright and energetic One Piece figure that captures Jimbei with a fearless, adventurous aura.",
    thumbnail:
      "https://i.pinimg.com/1200x/4c/ea/93/4cea933c2d9eecceb4e191d796fbb39d.jpg"
  },
  {
    id: 20,
    title: "Killua Zoldyck Assassin Figure",
    price: 4399,
    category: "Figure",
    series: "Hunter x Hunter",
    badge: "Elite Run",
    featured: false,
    rating: 4.8,
    description:
      "An elegant Hunter x Hunter collectible for Killua fans with dynamic pose work and polished detailing.",
    thumbnail:
      "https://i.pinimg.com/1200x/90/a5/2a/90a52a2431e8314e8024c81d272a6c73.jpg"
  },
];

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");

        await new Promise((resolve) => setTimeout(resolve, 200));

        if (controller.signal.aborted) {
          return;
        }

        setProducts(animeProducts);
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchProducts();

    return () => controller.abort();
  }, []);

  return { products, loading, error };
}