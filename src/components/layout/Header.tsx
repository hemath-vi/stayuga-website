"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isHomePage
          ? scrolled
            ? "bg-[#281822]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#C49C79]/20"
            : "bg-black/25 backdrop-blur-md border-b border-white/10 py-5"
          : "bg-[#281822] shadow-xl py-3.5 border-b border-[#C49C79]/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo & Wordmark */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <Logo size={22} color="#C49C79" className="group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif tracking-[0.2em] text-[#C49C79] uppercase font-light leading-none">
              STAYUGA
            </span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-[#957082] mt-0.5 font-light">
              Curated Stays
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-9">
          {[
            { name: "Stays", href: "/properties" },
            { name: "Services", href: "/services" },
            { name: "Events", href: "/events" },
            { name: "About", href: "/about" },
          ].map((item) => {
            const isActive = pathname === item.href || (item.href === "/properties" && pathname.startsWith("/properties"));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-xs uppercase tracking-[0.2em] transition-all relative py-1 ${
                  isActive ? "text-[#C49C79] font-medium" : "text-[#EFE3D5]/80 hover:text-[#C49C79]"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C49C79] rounded-full animate-pulse" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div>
          <Link
            href="/properties"
            className="border border-[#C49C79] bg-[#C49C79]/10 text-[#C49C79] px-6 py-2 rounded-full text-xs tracking-[0.2em] uppercase hover:bg-[#C49C79] hover:text-[#281822] active:scale-95 transition-all duration-300 shadow-sm"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;