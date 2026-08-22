"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage
          ? scrolled
            ? "bg-[#181113] shadow-md py-4"
            : "bg-black/25 backdrop-blur-md border-b border-white/10 py-5"
          : "bg-[#181113] shadow-md py-4 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full border border-[#c5a880] flex items-center justify-center text-[#e2c7a9] group-hover:scale-105 transition-transform">
            <span className="font-serif font-semibold text-sm">S</span>
          </div>
          <span className="text-xl md:text-2xl font-serif tracking-widest text-[#e2c7a9] uppercase font-light">
            STAYUGA
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/properties"
            className={`text-xs uppercase tracking-widest transition-colors ${
              pathname.startsWith("/properties")
                ? "text-[#e2c7a9] font-medium"
                : "text-white/80 hover:text-[#e2c7a9]"
            }`}
          >
            Stays
          </Link>
          <Link
            href="/services"
            className={`text-xs uppercase tracking-widest transition-colors ${
              pathname === "/services"
                ? "text-[#e2c7a9] font-medium"
                : "text-white/80 hover:text-[#e2c7a9]"
            }`}
          >
            Services
          </Link>
          <Link
            href="/events"
            className={`text-xs uppercase tracking-widest transition-colors ${
              pathname === "/events"
                ? "text-[#e2c7a9] font-medium"
                : "text-white/80 hover:text-[#e2c7a9]"
            }`}
          >
            Events
          </Link>
          <Link
            href="/about"
            className={`text-xs uppercase tracking-widest transition-colors ${
              pathname === "/about"
                ? "text-[#e2c7a9] font-medium"
                : "text-white/80 hover:text-[#e2c7a9]"
            }`}
          >
            About
          </Link>
        </nav>

        {/* Action Button */}
        <div>
          <Link
            href="/properties"
            className="border border-[#c5a880] text-[#e2c7a9] px-6 py-2 rounded-full text-xs tracking-widest uppercase hover:bg-[#c5a880] hover:text-[#181113] active:scale-95 transition-all"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;