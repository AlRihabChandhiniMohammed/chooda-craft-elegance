import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Sparkles,
  Palette,
  ShieldCheck,
  Truck,
  Package,
  Heart,
  Star,
  ArrowRight,
  MessageCircle,
  Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-bangles.jpg";
import workshopImg from "@/assets/craft-workshop.jpg";
import cChooda from "@/assets/collection-chooda.jpg";
import cWedding from "@/assets/collection-wedding.jpg";
import cCustom from "@/assets/collection-custom.jpg";
import cTraditional from "@/assets/collection-traditional.jpg";
import cPremium from "@/assets/collection-premium.jpg";
import cGift from "@/assets/collection-gift.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const WHATSAPP_URL = "https://wa.me/917351451669?text=Hello%2C%20I%27m%20interested%20in%20your%20bridal%20bangles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bridal Chooda Bangles — Handcrafted Bridal Bangles for Your Special Day" },
      { name: "description", content: "Premium handmade bridal chooda sets, wedding bangles and customized bridal accessories. Designed with tradition, crafted with love. Pan-India shipping." },
      { property: "og:title", content: "Bridal Chooda Bangles — Handcrafted Luxury Bridal Bangles" },
      { property: "og:description", content: "Customized bridal chooda sets designed with love, tradition, and elegance." },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const collections = [
  { title: "Bridal Chooda Sets", desc: "Traditional ivory & red sets crafted with intricate gold work", img: cChooda, tag: "Bestseller" },
  { title: "Wedding Bangles", desc: "Pearl, rose gold and contemporary wedding day designs", img: cWedding, tag: "New" },
  { title: "Customized Collections", desc: "Your colors, your design — entirely made for you", img: cCustom, tag: "Bespoke" },
  { title: "Traditional Bangles", desc: "Heritage kundan and lac work bangles", img: cTraditional, tag: "Heritage" },
  { title: "Premium Bridal Packages", desc: "Complete coordinated bangle wardrobes for every ceremony", img: cPremium, tag: "Premium" },
  { title: "Gift Collections", desc: "Beautifully packaged bridal gifting hampers", img: cGift, tag: "Gifting" },
];

const features = [
  { icon: Sparkles, title: "Handmade Craftsmanship", desc: "Each piece individually crafted by our master artisans" },
  { icon: Palette, title: "Fully Customizable", desc: "Personalize colors, designs and sizes to perfection" },
  { icon: ShieldCheck, title: "Premium Materials", desc: "Only the finest stones, lac, pearls and gold finishing" },
  { icon: Package, title: "Luxury Packaging", desc: "Heirloom-worthy boxes with silk lining" },
  { icon: Truck, title: "Pan-India Shipping", desc: "Secure, insured delivery across every state" },
  { icon: Heart, title: "Trusted by Brides", desc: "1000+ happy brides on their most special day" },
];

const steps = [
  { n: "01", title: "Share Your Bridal Outfit", desc: "Send us photos of your lehenga or saree" },
  { n: "02", title: "Choose Colors & Design", desc: "We curate options matched to your palette" },
  { n: "03", title: "We Craft Your Set", desc: "Master artisans handcraft your bangles" },
  { n: "04", title: "Quality Inspection", desc: "Every piece is reviewed with care" },
  { n: "05", title: "Secure Delivery", desc: "Wrapped in luxury packaging, shipped to you" },
];

const testimonials = [
  { name: "Aanya Sharma", city: "Delhi", text: "My chooda set was breathtaking. The detail, the colors — exactly what I envisioned. Every guest asked where I got it from.", rating: 5 },
  { name: "Riya Mehta", city: "Mumbai", text: "I sent inspiration and they recreated it more beautifully than I imagined. Truly heirloom quality. Worth every rupee.", rating: 5 },
  { name: "Pooja Kapoor", city: "Bengaluru", text: "From design consultation to delivery, the experience felt luxurious. My bridal bangles are now my most treasured memento.", rating: 5 },
];

const galleryItems = [
  { img: g1, span: "row-span-2" },
  { img: g2, span: "" },
  { img: g3, span: "row-span-2" },
  { img: g4, span: "" },
  { img: cChooda, span: "" },
  { img: cTraditional, span: "" },
];

function Home() {
  return (
    <div className="bg-background text-foreground overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-dvh flex items-center justify-center pt-24 pb-16 px-4 sm:px-6">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Bridal hands adorned with handcrafted chooda bangles"
            width={1600}
            height={1200}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/30" />
        </div>

        {/* Floating decorative elements */}
        <div className="pointer-events-none absolute top-32 left-10 h-32 w-32 rounded-full border border-gold/30 animate-float hidden md:block" />
        <div className="pointer-events-none absolute bottom-32 right-16 h-20 w-20 rounded-full border border-rose-gold/40 animate-float [animation-delay:1.5s] hidden md:block" />
        <div className="pointer-events-none absolute top-1/2 right-32 h-3 w-3 rounded-full bg-gold animate-float [animation-delay:0.7s] hidden md:block" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="relative z-10 max-w-3xl text-center"
        >
          <motion.p variants={fadeUp} className="eyebrow">
            <span className="gold-divider">Established with Tradition</span>
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-6 sm:mt-8 font-display text-4xl leading-[1.05] text-maroon sm:text-5xl md:text-6xl lg:text-7xl text-balance"
          >
            Handcrafted Bridal Bangles<br />
            <span className="italic text-shimmer">Made for Your Special Day</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-7 max-w-xl text-base text-foreground/75 leading-relaxed">
            Customized bridal chooda sets designed with love, tradition, and elegance — for the bride who treasures every detail.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop" className="btn-luxury">Shop Collection <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/custom-order" className="btn-outline-gold !text-maroon !border-maroon hover:!bg-maroon hover:!text-ivory">Customize Your Set</Link>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-12 flex items-center justify-center gap-8 text-xs uppercase tracking-[0.22em] text-foreground/60">
            <div className="flex items-center gap-2"><Star className="h-3 w-3 fill-gold text-gold" /> 1000+ Brides</div>
            <div className="hidden sm:flex items-center gap-2"><ShieldCheck className="h-3 w-3 text-gold" /> Pan-India</div>
            <div className="flex items-center gap-2"><Sparkles className="h-3 w-3 text-gold" /> Handmade</div>
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURED COLLECTIONS */}
      <section className="relative py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="eyebrow"><span className="gold-divider">Our Collections</span></p>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl text-maroon">Curated Bridal Treasures</h2>
            <p className="mt-5 text-muted-foreground">Six signature collections, each a celebration of craftsmanship and the timeless beauty of an Indian bride.</p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((c, i) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="card-luxury group relative overflow-hidden"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon/70 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  <span className="absolute top-4 left-4 bg-gold/95 text-maroon text-[0.6rem] tracking-[0.2em] uppercase px-3 py-1">{c.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-maroon">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                  <Link to="/shop" className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-maroon group-hover:text-gold transition-colors">
                    Explore <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-28 px-6 bg-[oklch(0.96_0.02_75)]">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="eyebrow"><span className="gold-divider">Why Choose Us</span></p>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl text-maroon">The Bridal Chooda Promise</h2>
          </motion.div>

          <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="text-center group"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold bg-background group-hover:bg-maroon group-hover:border-maroon transition-all duration-500">
                  <f.icon className="h-7 w-7 text-gold group-hover:text-gold transition-colors" />
                </div>
                <h3 className="mt-5 font-display text-xl text-maroon">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-xs mx-auto">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CRAFTSMANSHIP */}
      <section className="relative py-28 px-6">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img src={workshopImg} alt="Artisan crafting bridal bangles" loading="lazy" width={1200} height={1500} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-background border border-gold p-6 max-w-xs">
              <p className="font-script text-3xl text-gold">est. 1992</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">Three generations of artistry</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">Our Craftsmanship</p>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl text-maroon leading-tight">
              Every bangle is <span className="italic text-shimmer">handcrafted</span> with attention to every detail.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Blending timeless tradition with contemporary elegance, our master artisans shape each piece by hand. From sourcing the finest lac and stones to the final polish, every step is a quiet act of devotion.
            </p>
            <div className="mt-10 space-y-6 border-l border-gold/40 pl-8">
              {[
                { year: "1992", text: "Our family workshop opens in Jaipur" },
                { year: "2008", text: "Second generation introduces customization" },
                { year: "Today", text: "Crafting heirlooms for brides across India" },
              ].map((t) => (
                <div key={t.year} className="relative">
                  <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full bg-gold ring-4 ring-background" />
                  <p className="font-display text-xl text-maroon">{t.year}</p>
                  <p className="text-sm text-muted-foreground">{t.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CUSTOM DESIGN PROCESS */}
      <section className="relative py-28 px-6 bg-maroon text-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, var(--color-gold) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto">
            <p className="eyebrow !text-gold"><span className="gold-divider">Your Custom Set</span></p>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl">A Bespoke Bridal Journey</h2>
            <p className="mt-5 text-ivory/70">From the first inspiration to the final reveal, a personal experience designed around you.</p>
          </motion.div>

          <div className="mt-20 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="font-display text-6xl text-gold/40">{s.n}</div>
                <div className="mt-2 h-px w-12 bg-gold" />
                <h3 className="mt-4 font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-ivory/65 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/custom-order" className="btn-outline-gold">Start Your Custom Order</Link>
          </div>
        </div>
      </section>

      {/* BRIDAL GALLERY */}
      <section className="py-28 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto">
            <p className="eyebrow"><span className="gold-divider">Bridal Gallery</span></p>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl text-maroon">Real Brides, Real Moments</h2>
            <p className="mt-5 text-muted-foreground">An ever-growing album of brides wearing our craft on their most cherished day.</p>
          </motion.div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[120px] sm:auto-rows-[200px]">
            {galleryItems.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className={`relative group overflow-hidden ${g.span}`}
              >
                <img src={g.img} alt={`Bridal gallery ${i + 1}`} loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-maroon/0 group-hover:bg-maroon/30 transition-colors duration-500 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="https://www.instagram.com/bridalchoodabangles/" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-[0.22em] text-maroon hover:text-gold transition-colors">
              Follow @bridalchoodabangles on Instagram →
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-6 bg-[oklch(0.96_0.02_75)]">
        <div className="mx-auto max-w-7xl">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-2xl mx-auto">
            <p className="eyebrow"><span className="gold-divider">Bride Stories</span></p>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl text-maroon">Words from Our Brides</h2>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative bg-background border border-border p-8 group hover:border-gold transition-colors"
              >
                <Quote className="absolute top-6 right-6 h-10 w-10 text-gold/20 group-hover:text-gold/40 transition-colors" />
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mt-5 text-foreground/85 italic leading-relaxed">"{t.text}"</blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <p className="font-display text-lg text-maroon">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mt-1">{t.city} · Verified Bride</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={cPremium} alt="" aria-hidden className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-maroon/95 via-maroon/85 to-maroon/70" />
        </div>
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="relative mx-auto max-w-3xl text-center text-ivory"
        >
          <p className="eyebrow !text-gold">Personal Consultation</p>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-6xl leading-tight">
            Need a <span className="italic text-shimmer">Customized</span> Bridal Set?
          </h2>
          <p className="mt-6 text-ivory/80 max-w-xl mx-auto">
            Chat with our bridal stylist directly on WhatsApp. Share your inspiration, get instant quotes, and design your dream bangles.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 uppercase tracking-[0.22em] text-sm hover:bg-[#1ebe5a] transition-colors shadow-2xl shadow-[#25D366]/30">
            <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
          </a>
        </motion.div>
      </section>

    </div>
  );
}
