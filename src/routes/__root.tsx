import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Instagram, MessageCircle, Mail, MapPin } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const WHATSAPP_URL = "https://wa.me/917351451669?text=Hello%2C%20I%27m%20interested%20in%20your%20bridal%20bangles";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Lost Page</p>
        <h1 className="mt-6 font-display text-7xl text-maroon">404</h1>
        <p className="mt-4 text-muted-foreground">This page slipped past our artisans.</p>
        <Link to="/" className="btn-luxury mt-8">Return Home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-maroon">Something didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">Please try again or return home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-luxury">Try again</button>
          <a href="/" className="btn-outline-gold !text-maroon !border-maroon hover:!bg-maroon hover:!text-ivory">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bridal Chooda Bangles — Handcrafted Bridal Bangles for Your Special Day" },
      { name: "description", content: "Premium handmade bridal chooda sets, wedding bangles, and customized bridal accessories. Pan-India shipping. Crafted with love and tradition." },
      { name: "author", content: "Bridal Chooda Bangles" },
      { property: "og:title", content: "Bridal Chooda Bangles — Handcrafted Luxury Bridal Bangles" },
      { property: "og:description", content: "Customized bridal chooda sets designed with love, tradition, and elegance." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Bridal Chooda Bangles" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#5a1a1f" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Pinyon+Script&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/custom-order", label: "Custom Order" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6 py-3 sm:py-4 lg:grid-cols-3">
        <Link to="/" className="flex min-w-0 items-center gap-2 lg:justify-self-start">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold bg-maroon">
            <span className="font-display text-lg text-gold">B</span>
          </div>
          <div className="min-w-0 leading-tight">
            <div className="truncate font-display text-base text-maroon">Bridal Chooda</div>
            <div className="text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">Bangles</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center justify-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[0.72rem] uppercase tracking-[0.22em] text-foreground/80 hover:text-maroon transition-colors relative group"
              activeProps={{ className: "text-maroon" }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-1/2 h-px w-0 bg-gold transition-all duration-300 group-hover:left-0 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center justify-end gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury !py-3 !px-5 !text-[0.68rem]"
          >
            Whatsapp Us
          </a>
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center text-maroon"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur-md">
          <div className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.22em] text-foreground/80 hover:text-maroon"
                activeProps={{ className: "text-maroon" }}
              >
                {l.label}
              </Link>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-luxury self-start mt-2">
              Whatsapp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-[oklch(0.22_0.04_25)] text-ivory">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold">
              <span className="font-display text-xl text-gold">B</span>
            </div>
            <div>
              <div className="font-display text-xl">Bridal Chooda</div>
              <div className="text-[0.65rem] tracking-[0.3em] text-gold uppercase">Bangles</div>
            </div>
          </div>
          <p className="mt-6 text-sm text-ivory/70 leading-relaxed">
            Heirloom bridal bangles handcrafted with traditional artistry and modern elegance for the brides of today.
          </p>
        </div>

        <div>
          <p className="eyebrow !text-gold">Explore</p>
          <ul className="mt-5 space-y-3 text-sm text-ivory/80">
            <li><Link to="/shop" className="hover:text-gold">Shop Collection</Link></li>
            <li><Link to="/custom-order" className="hover:text-gold">Custom Orders</Link></li>
            <li><Link to="/about" className="hover:text-gold">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow !text-gold">Contact</p>
          <ul className="mt-5 space-y-3 text-sm text-ivory/80">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> Jaipur, Rajasthan, India</li>
            <li className="flex items-start gap-2"><MessageCircle className="mt-0.5 h-4 w-4 text-gold" /> +91 73514 51669</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-gold" /> parafullgupta949@gmail.com</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow !text-gold">Stay Connected</p>
          <p className="mt-5 text-sm text-ivory/70">Subscribe for new collections, bridal tips and exclusive previews.</p>
          <form className="mt-4 flex border border-gold/40">
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 bg-transparent px-4 py-3 text-sm text-ivory placeholder:text-ivory/40 outline-none"
            />
            <button type="submit" className="bg-gold px-4 text-xs uppercase tracking-[0.2em] text-maroon hover:bg-rose-gold transition-colors">Join</button>
          </form>
          <div className="mt-6 flex gap-3">
            <a href="https://www.instagram.com/bridalchoodabangles/" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center border border-gold/40 hover:bg-gold hover:text-maroon transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={WHATSAPP_URL} aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center border border-gold/40 hover:bg-gold hover:text-maroon transition-colors">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-ivory/50 tracking-wider">
          © {new Date().getFullYear()} Bridal Chooda Bangles. Handcrafted with love in India.
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:scale-110 transition-transform animate-float"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </QueryClientProvider>
  );
}
