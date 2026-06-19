import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Sparkles, Award, Users } from "lucide-react";
import workshop from "@/assets/craft-workshop.jpg";
import hero from "@/assets/hero-bangles.jpg";
import gallery from "@/assets/collection-premium.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Bridal Chooda Bangles" },
      { name: "description", content: "Three generations of artistry crafting bridal bangles for Indian brides. Discover the family behind Bridal Chooda Bangles." },
      { property: "og:title", content: "Our Story — Bridal Chooda Bangles" },
      { property: "og:description", content: "Three generations of artistry crafting bridal bangles." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Made with Devotion", desc: "Every bangle holds the prayers and love of our artisans." },
  { icon: Sparkles, title: "Timeless Craft", desc: "Traditional techniques refined over three generations." },
  { icon: Award, title: "Heirloom Quality", desc: "Pieces meant to be treasured and passed down." },
  { icon: Users, title: "For the Modern Bride", desc: "Tradition reimagined for today's discerning bride." },
];

function AboutPage() {
  return (
    <div className="bg-background pt-32 pb-24">
      {/* HERO */}
      <section className="px-6 text-center max-w-3xl mx-auto">
        <p className="eyebrow"><span className="gold-divider">Our Story</span></p>
        <h1 className="mt-6 font-display text-5xl md:text-6xl text-maroon text-balance">
          A Legacy of <span className="italic text-shimmer">Handcrafted</span> Beauty
        </h1>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Born in the pink city of Jaipur, Bridal Chooda Bangles is a family atelier weaving generations of craft into the most cherished day of an Indian bride's life.
        </p>
      </section>

      {/* FOUNDER */}
      <section className="px-6 mt-24">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-14 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={workshop} alt="Founder at our workshop" loading="lazy" width={1200} height={1500} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow">Founder</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-maroon">A Passion Passed Down</h2>
            <p className="font-script text-3xl text-gold mt-6">"Each bangle carries a story."</p>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                What began in 1992 as a single artisan's workshop has grown into a beloved bridal house. My grandfather believed every bride deserved jewelry that felt like an extension of her own light.
              </p>
              <p>
                Three decades later, we still craft each piece by hand — never compromising on materials, never repeating a custom design. Because no two brides are alike, and neither should their bangles be.
              </p>
            </div>
            <p className="mt-6 font-display text-xl text-maroon">— Meera Devi, Founder</p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 mt-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow"><span className="gold-divider">What Guides Us</span></p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl text-maroon">Our Values</h2>
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center border border-gold">
                  <v.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-5 font-display text-xl text-maroon">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP COLLAGE */}
      <section className="px-6 mt-32">
        <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-4">
          <img src={hero} alt="" loading="lazy" width={800} height={1000} className="aspect-[4/5] w-full object-cover md:row-span-2" />
          <img src={workshop} alt="" loading="lazy" width={800} height={600} className="aspect-[4/3] w-full object-cover" />
          <img src={gallery} alt="" loading="lazy" width={800} height={600} className="aspect-[4/3] w-full object-cover" />
          <img src={hero} alt="" loading="lazy" width={800} height={1000} className="aspect-[4/5] w-full object-cover md:col-span-2" />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 mt-28 text-center">
        <h2 className="font-display text-4xl text-maroon">Begin Your Bridal Story With Us</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Visit our boutique or chat with us online — we'd love to be part of your special day.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/custom-order" className="btn-luxury">Start Custom Order</Link>
          <Link to="/contact" className="btn-outline-gold !text-maroon !border-maroon hover:!bg-maroon hover:!text-ivory">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
