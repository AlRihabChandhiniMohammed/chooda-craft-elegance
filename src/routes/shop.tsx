import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Heart, MessageCircle, SlidersHorizontal, Star } from "lucide-react";
import cChooda from "@/assets/collection-chooda.jpg";
import cWedding from "@/assets/collection-wedding.jpg";
import cCustom from "@/assets/collection-custom.jpg";
import cTraditional from "@/assets/collection-traditional.jpg";
import cPremium from "@/assets/collection-premium.jpg";
import cGift from "@/assets/collection-gift.jpg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Bridal Bangles — Bridal Chooda Bangles" },
      { name: "description", content: "Browse our curated collection of handcrafted bridal chooda sets, wedding bangles, and customized bridal accessories." },
      { property: "og:title", content: "Shop Bridal Bangles — Bridal Chooda Bangles" },
      { property: "og:description", content: "Discover our luxury bridal bangle collections." },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: ShopPage,
});

type Product = {
  id: string;
  name: string;
  category: "Chooda" | "Wedding" | "Custom" | "Traditional" | "Premium" | "Gift";
  color: "Red" | "Ivory" | "Pink" | "Gold" | "Maroon";
  price: number;
  img: string;
  rating: number;
};

const products: Product[] = [
  { id: "1", name: "Royal Heritage Chooda", category: "Chooda", color: "Red", price: 4999, img: cChooda, rating: 5 },
  { id: "2", name: "Pearl Whisper Set", category: "Wedding", color: "Ivory", price: 3499, img: cWedding, rating: 5 },
  { id: "3", name: "Rose Bloom Custom", category: "Custom", color: "Pink", price: 5999, img: cCustom, rating: 5 },
  { id: "4", name: "Ruby Kundan Heirloom", category: "Traditional", color: "Red", price: 7499, img: cTraditional, rating: 5 },
  { id: "5", name: "Maharani Premium Set", category: "Premium", color: "Maroon", price: 8999, img: cPremium, rating: 5 },
  { id: "6", name: "Blush Gift Hamper", category: "Gift", color: "Pink", price: 2999, img: cGift, rating: 5 },
  { id: "7", name: "Ivory Eternal Chooda", category: "Chooda", color: "Ivory", price: 5499, img: cChooda, rating: 5 },
  { id: "8", name: "Golden Hour Wedding", category: "Wedding", color: "Gold", price: 4499, img: cWedding, rating: 5 },
  { id: "9", name: "Custom Pastel Dream", category: "Custom", color: "Pink", price: 6499, img: cCustom, rating: 5 },
];

const categories = ["All", "Chooda", "Wedding", "Custom", "Traditional", "Premium", "Gift"] as const;
const colors = ["All", "Red", "Ivory", "Pink", "Gold", "Maroon"] as const;

function ShopPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [color, setColor] = useState<(typeof colors)[number]>("All");
  const [maxPrice, setMaxPrice] = useState(10000);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (cat !== "All" && p.category !== cat) return false;
      if (color !== "All" && p.color !== color) return false;
      if (p.price > maxPrice) return false;
      if (query && !p.name.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
  }, [query, cat, color, maxPrice]);

  const toggleWish = (id: string) => {
    setWishlist((s) => {
      const next = new Set(s);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  return (
    <div className="bg-background pt-32 pb-24">
      {/* HEADER */}
      <section className="px-6 text-center max-w-3xl mx-auto">
        <p className="eyebrow"><span className="gold-divider">The Boutique</span></p>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl text-maroon">Shop Bridal Bangles</h1>
        <p className="mt-5 text-muted-foreground">Each piece in our collection is handcrafted in limited quantities. Discover your perfect set.</p>
      </section>

      <div className="mx-auto max-w-7xl mt-16 px-6 grid lg:grid-cols-[280px_1fr] gap-10">
        {/* FILTERS */}
        <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
          <div className="flex items-center gap-2 text-maroon">
            <SlidersHorizontal className="h-4 w-4" />
            <h2 className="font-display text-xl sm:text-2xl">Refine</h2>
          </div>

          <div>
            <label className="eyebrow !text-maroon" htmlFor="search">Search</label>
            <div className="relative mt-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                id="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search bangles..."
                className="w-full pl-10 pr-3 py-3 bg-card border border-border focus:border-gold outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <p className="eyebrow !text-maroon">Collection</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-wider border transition-colors ${
                    cat === c ? "bg-maroon text-ivory border-maroon" : "border-border hover:border-gold"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow !text-maroon">Color</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-wider border transition-colors ${
                    color === c ? "bg-maroon text-ivory border-maroon" : "border-border hover:border-gold"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p className="eyebrow !text-maroon">Max Price</p>
              <span className="text-sm font-display text-maroon">₹{maxPrice.toLocaleString("en-IN")}</span>
            </div>
            <input
              type="range"
              min={2000}
              max={10000}
              step={500}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="mt-3 w-full accent-[var(--color-gold)]"
            />
          </div>

          <button
            onClick={() => { setQuery(""); setCat("All"); setColor("All"); setMaxPrice(10000); }}
            className="text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-maroon"
          >
            Clear all filters
          </button>
        </aside>

        {/* PRODUCT GRID */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-muted-foreground">{filtered.length} {filtered.length === 1 ? "piece" : "pieces"}</p>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground hidden sm:block">Sort: Featured</p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24 border border-dashed border-border">
              <p className="font-display text-2xl text-maroon">No bangles match</p>
              <p className="mt-2 text-sm text-muted-foreground">Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p) => (
                <article key={p.id} className="card-luxury group relative overflow-hidden">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={p.img} alt={p.name} loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                    <button
                      onClick={() => toggleWish(p.id)}
                      aria-label="Add to wishlist"
                      className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 backdrop-blur hover:bg-gold transition-colors"
                    >
                      <Heart className={`h-4 w-4 ${wishlist.has(p.id) ? "fill-maroon text-maroon" : "text-maroon"}`} />
                    </button>
                    <a
                      href={`https://wa.me/917351451669?text=I%20want%20to%20inquire%20about%20${encodeURIComponent(p.name)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="absolute inset-x-3 bottom-3 translate-y-12 group-hover:translate-y-0 transition-transform duration-500 bg-maroon text-ivory text-[0.7rem] uppercase tracking-[0.22em] py-3 text-center hover:bg-gold hover:text-maroon"
                    >
                      Quick Inquiry
                    </a>
                  </div>
                  <div className="p-5">
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-gold">{p.category}</p>
                    <h3 className="mt-1 font-display text-xl text-maroon leading-tight">{p.name}</h3>
                    <div className="mt-2 flex items-center gap-1">
                      {Array.from({ length: p.rating }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-gold text-gold" />
                      ))}
                    </div>
                    <div className="mt-4 flex items-baseline justify-between">
                      <p className="font-display text-2xl text-maroon">₹{p.price.toLocaleString("en-IN")}</p>
                      <span className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">{p.color}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="mt-20 text-center border-t border-border pt-16">
            <p className="font-display text-3xl text-maroon">Looking for something unique?</p>
            <p className="mt-3 text-muted-foreground">Every design can be customized to your colors and theme.</p>
            <Link to="/custom-order" className="btn-luxury mt-8 inline-flex"><MessageCircle className="h-4 w-4" /> Request Custom Design</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
