"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { LinkButton } from "@/components/ui/Button";

const NAV = [
  { href: "/properties", label: "Stays" },
  { href: "/experiences", label: "Experiences" },
  { href: "/services", label: "Services" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const transparent = isHomePage && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        transparent
          ? "bg-transparent"
          : "border-b border-cream/10 bg-ink shadow-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:h-[72px] lg:px-12">
        <Logo className="text-cream" />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => {
            const active = item.href === "/properties" ? pathname.startsWith(item.href) : pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs uppercase tracking-[0.15em] transition-colors ${
                  active ? "text-gold" : "text-cream/75 hover:text-gold-light"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <LinkButton href="/properties" variant="gold" className="px-6 py-2.5 text-xs">
            Book now
          </LinkButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-cream lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-cream/10 bg-ink px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.15em] text-cream/85 hover:text-gold-light"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <LinkButton
            href="/properties"
            variant="gold"
            className="mt-6 w-full"
            onClick={() => setOpen(false)}
          >
            Book now
          </LinkButton>
        </div>
      )}
    </header>
  );
}

export default Header;
