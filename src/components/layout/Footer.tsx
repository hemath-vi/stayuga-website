import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { InstagramIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { emptyContent, getContent } from "@/lib/data";

const NAV = [
  { href: "/properties", label: "Stays" },
  { href: "/experiences", label: "Experiences" },
  { href: "/services", label: "Services" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export async function Footer() {
  const { blocks, policies } = await getContent().catch(emptyContent);
  const contact = blocks["contact-info"] ?? {
    email: "hello@stayuga.com",
    phone: "+91 00000 00000",
    location: "Hyderabad, India",
  };
  const whatsapp = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/[^\d]/g, "");

  return (
    <footer className="border-t border-cream/5 bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:px-8 md:grid-cols-4 lg:px-12">
        <div className="space-y-3">
          <Logo />
          <p className="text-xs tracking-wide text-cream/50">
            Curated villas &amp; farmhouses, effortlessly hosted.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Explore
          </h4>
          <ul className="space-y-2.5 text-sm text-cream/70">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-cream transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Contact
          </h4>
          <ul className="space-y-2.5 text-sm text-cream/70">
            <li className="flex items-center gap-2.5">
              <Phone size={14} className="text-gold" /> {contact.phone}
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={14} className="text-gold" /> {contact.email}
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin size={14} className="text-gold" /> {contact.location}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Follow
          </h4>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/70 hover:border-gold hover:text-gold transition-colors"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={whatsapp ? `https://wa.me/${whatsapp}` : "https://wa.me/"}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/70 hover:border-gold hover:text-gold transition-colors"
            >
              <MessageCircle size={16} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/70 hover:border-gold hover:text-gold transition-colors"
            >
              <YoutubeIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/5 px-6 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl space-y-4 text-xs text-cream/40">
          {policies.length > 0 && (
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {policies.map((policy) => (
                <li key={policy._id}>
                  <Link href={`/policies/${policy.slug}`} className="hover:text-cream/70 transition-colors">
                    {policy.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p>&copy; {new Date().getFullYear()} Stayuga</p>
            <p>Luxury villa &amp; farmhouse rentals</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
