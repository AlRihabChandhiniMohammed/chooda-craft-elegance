import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Upload, Sparkles, MessageCircle, CheckCircle2 } from "lucide-react";
import cCustom from "@/assets/collection-custom.jpg";

export const Route = createFileRoute("/custom-order")({
  head: () => ({
    meta: [
      { title: "Custom Bridal Bangles — Request Your Design | Bridal Chooda" },
      { name: "description", content: "Design a one-of-a-kind bridal bangle set personalized to your outfit, colors and theme. Share your vision and let our artisans bring it to life." },
      { property: "og:title", content: "Request Your Custom Bridal Set" },
      { property: "og:description", content: "Bespoke handmade bridal bangles, designed around you." },
    ],
    links: [{ rel: "canonical", href: "/custom-order" }],
  }),
  component: CustomOrder,
});

function CustomOrder() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    bride: "", weddingDate: "", outfitColor: "", design: "", budget: "", whatsapp: "", notes: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((s) => ({ ...s, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Custom Bridal Bangle Request\n\nBride: ${form.bride}\nWedding Date: ${form.weddingDate}\nOutfit Color: ${form.outfitColor}\nDesign: ${form.design}\nBudget: ${form.budget}\nWhatsApp: ${form.whatsapp}\nNotes: ${form.notes}`
    );
    window.open(`https://wa.me/917351451669?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <div className="bg-background pt-32 pb-24">
      {/* HERO */}
      <section className="relative px-6 text-center max-w-3xl mx-auto">
        <p className="eyebrow"><span className="gold-divider">Bespoke Bridal</span></p>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl text-maroon">Design Your Dream Set</h1>
        <p className="mt-5 text-muted-foreground">A personal consultation with our bridal stylists. Share your vision — we'll craft a one-of-a-kind heirloom around it.</p>
      </section>

      <div className="mx-auto max-w-6xl mt-20 px-6 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={cCustom} alt="Custom bridal bangles" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
          </div>
          <div className="absolute -top-6 -left-6 hidden md:flex bg-maroon text-ivory p-6 max-w-xs items-start gap-3">
            <Sparkles className="h-5 w-5 text-gold shrink-0 mt-1" />
            <div>
              <p className="font-display text-lg">Handcrafted in 21 days</p>
              <p className="text-xs text-ivory/70 mt-1">From sketch to delivery</p>
            </div>
          </div>
        </div>

        {/* FORM */}
        {sent ? (
          <div className="bg-card border border-gold p-10 text-center">
            <CheckCircle2 className="h-12 w-12 text-gold mx-auto" />
            <h2 className="mt-5 font-display text-3xl text-maroon">Request Received</h2>
            <p className="mt-3 text-muted-foreground">Your design brief has opened in WhatsApp. Our bridal stylist will respond within a few hours.</p>
            <button onClick={() => setSent(false)} className="btn-outline-gold mt-8 !text-maroon !border-maroon hover:!bg-maroon hover:!text-ivory">Submit Another</button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="bg-card border border-border p-8 md:p-10 space-y-6">
            <h2 className="font-display text-3xl text-maroon">Bridal Consultation Form</h2>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Bride's Name" required value={form.bride} onChange={update("bride")} />
              <Field label="Wedding Date" required type="date" value={form.weddingDate} onChange={update("weddingDate")} />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Outfit Color" placeholder="e.g. Crimson red, blush pink" value={form.outfitColor} onChange={update("outfitColor")} />
              <Field label="Preferred Design" placeholder="Kundan, lac, pearl..." value={form.design} onChange={update("design")} />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="eyebrow !text-maroon">Budget Range</label>
                <select value={form.budget} onChange={update("budget")} className="mt-2 w-full bg-background border border-border focus:border-gold outline-none px-4 py-3 text-sm">
                  <option value="">Select range</option>
                  <option>₹5,000 – ₹10,000</option>
                  <option>₹10,000 – ₹20,000</option>
                  <option>₹20,000 – ₹50,000</option>
                  <option>₹50,000+</option>
                </select>
              </div>
              <Field label="WhatsApp Number" required type="tel" placeholder="+91..." value={form.whatsapp} onChange={update("whatsapp")} />
            </div>

            <div>
              <label className="eyebrow !text-maroon">Upload Inspiration</label>
              <label className="mt-2 flex flex-col items-center justify-center gap-2 border border-dashed border-border hover:border-gold transition-colors p-8 cursor-pointer">
                <Upload className="h-6 w-6 text-gold" />
                <span className="text-sm text-muted-foreground">Drag images here or click to upload</span>
                <input type="file" multiple accept="image/*" className="hidden" />
              </label>
            </div>

            <div>
              <label className="eyebrow !text-maroon">Additional Notes</label>
              <textarea
                value={form.notes}
                onChange={update("notes")}
                rows={4}
                placeholder="Anything else we should know..."
                className="mt-2 w-full bg-background border border-border focus:border-gold outline-none px-4 py-3 text-sm"
              />
            </div>

            <button type="submit" className="btn-luxury w-full">
              <MessageCircle className="h-4 w-4" /> Request Custom Design
            </button>
            <p className="text-xs text-center text-muted-foreground">Your details will open a WhatsApp message to our stylist.</p>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ label, required, ...props }: { label: string; required?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="eyebrow !text-maroon">{label}{required && <span className="text-gold ml-1">*</span>}</label>
      <input required={required} {...props} className="mt-2 w-full bg-background border border-border focus:border-gold outline-none px-4 py-3 text-sm" />
    </div>
  );
}
