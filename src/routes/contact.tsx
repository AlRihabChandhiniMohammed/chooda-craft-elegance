import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Bridal Chooda Bangles" },
      { name: "description", content: "Visit our Jaipur boutique or chat with us on WhatsApp. We'd love to help you find the perfect bridal bangles for your special day." },
      { property: "og:title", content: "Contact Bridal Chooda Bangles" },
      { property: "og:description", content: "Visit our boutique or chat with us." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const faqs = [
  { q: "How long does a custom order take?", a: "Most custom bridal sets are crafted in 21–30 days. We recommend booking at least 6 weeks before your wedding." },
  { q: "Do you ship across India?", a: "Yes — we offer insured, secure pan-India shipping. International shipping is available on request." },
  { q: "Can I see designs before ordering?", a: "Absolutely. Our stylists share design previews and mood boards over WhatsApp before crafting begins." },
  { q: "What is your return policy?", a: "Custom orders are non-returnable, but we offer free adjustments and exchanges for non-custom pieces within 7 days." },
  { q: "Do you offer trial sessions?", a: "Yes, at our Jaipur boutique. Please book an appointment in advance." },
];

function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = encodeURIComponent(
      `Inquiry from ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
    );
    window.open(`https://wa.me/917351451669?text=${text}`, "_blank");
  };

  return (
    <div className="bg-background pt-32 pb-24">
      <section className="px-6 text-center max-w-3xl mx-auto">
        <p className="eyebrow"><span className="gold-divider">Let's Connect</span></p>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl text-maroon">Get in Touch</h1>
        <p className="mt-5 text-muted-foreground">Visit our boutique, send us a message, or chat with our bridal stylist on WhatsApp.</p>
      </section>

      <div className="mx-auto max-w-7xl mt-20 px-6 grid lg:grid-cols-[1fr_1.2fr] gap-12">
        {/* INFO */}
        <div className="space-y-8">
          <InfoCard icon={MapPin} title="Visit Our Boutique" lines={["Pink City Lane", "Johari Bazaar, Jaipur 302003", "Rajasthan, India"]} />
          <InfoCard icon={Phone} title="Call Us" lines={["+91 73514 51669"]} />
          <InfoCard icon={Mail} title="Email" lines={["parafullgupta949@gmail.com"]} />
          <InfoCard icon={Clock} title="Hours" lines={["Mon – Sat: 10am – 8pm", "Sunday: By appointment"]} />

          <div className="flex gap-3 pt-2">
            <a href="https://wa.me/917351451669" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 text-xs uppercase tracking-[0.22em] hover:bg-[#1ebe5a] transition-colors">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href="https://www.instagram.com/bridalchoodabangles/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-gold text-maroon px-5 py-3 text-xs uppercase tracking-[0.22em] hover:bg-gold transition-colors">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={onSubmit} className="bg-card border border-border p-8 md:p-10 space-y-5 h-fit">
          <h2 className="font-display text-3xl text-maroon">Send a Message</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <FormField name="name" label="Your Name" required />
            <FormField name="email" label="Email" required type="email" />
          </div>
          <FormField name="subject" label="Subject" />
          <div>
            <label className="eyebrow !text-maroon">Message<span className="text-gold ml-1">*</span></label>
            <textarea name="message" required rows={5} className="mt-2 w-full bg-background border border-border focus:border-gold outline-none px-4 py-3 text-sm" />
          </div>
          <button type="submit" className="btn-luxury w-full">Send Message</button>
        </form>
      </div>

      {/* MAP */}
      <section className="px-6 mt-24">
        <div className="mx-auto max-w-7xl border border-border overflow-hidden">
          <iframe
            title="Our Boutique Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2!2d75.8267!3d26.9203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU1JzEzLjEiTiA3NcKwNDknMzYuMSJF!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full grayscale-[40%]"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 mt-24 max-w-3xl mx-auto">
        <div className="text-center">
          <p className="eyebrow"><span className="gold-divider">FAQ</span></p>
          <h2 className="mt-6 font-display text-4xl text-maroon">Frequently Asked</h2>
        </div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="font-display text-xl text-maroon">{f.q}</span>
                <span className="text-gold text-2xl shrink-0 ml-4">{openFaq === i ? "–" : "+"}</span>
              </button>
              {openFaq === i && (
                <p className="pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function InfoCard({ icon: Icon, title, lines }: { icon: React.ComponentType<{ className?: string }>; title: string; lines: string[] }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold">
        <Icon className="h-5 w-5 text-gold" />
      </div>
      <div>
        <h3 className="font-display text-xl text-maroon">{title}</h3>
        <div className="mt-1 text-sm text-muted-foreground space-y-0.5">
          {lines.map((l) => <p key={l}>{l}</p>)}
        </div>
      </div>
    </div>
  );
}

function FormField({ label, required, ...props }: { label: string; required?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="eyebrow !text-maroon">{label}{required && <span className="text-gold ml-1">*</span>}</label>
      <input required={required} {...props} className="mt-2 w-full bg-background border border-border focus:border-gold outline-none px-4 py-3 text-sm" />
    </div>
  );
}
