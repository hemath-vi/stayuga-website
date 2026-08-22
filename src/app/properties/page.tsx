"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const allStaysData = [
  {
    id: "1",
    name: "The Aegean Escape",
    slug: "the-aegean-escape",
    location: "Santorini, Greece",
    bedrooms: 4,
    bathrooms: 4,
    amenity: "Infinity Pool",
    price: 1200,
    petFriendly: false,
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop",
    desc: "A cliffside villa with panoramic views of the Aegean Sea, designed for slow mornings and golden sunsets.",
  },
  {
    id: "2",
    name: "The Island Haven",
    slug: "the-island-haven",
    location: "Bali, Indonesia",
    bedrooms: 3,
    bathrooms: 3,
    amenity: "Private Pool",
    price: 950,
    petFriendly: true,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop",
    desc: "Tucked in lush greenery, this villa blends modern comfort with Balinese charm and calm.",
  },
  {
    id: "3",
    name: "The Olive Retreat",
    slug: "the-olive-retreat",
    location: "Tuscany, Italy",
    bedrooms: 5,
    bathrooms: 5,
    amenity: "Heated Pool",
    price: 1450,
    petFriendly: true,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
    desc: "A timeless villa surrounded by olive groves and rolling hills, perfect for wine, food and unwinding.",
  },
  {
    id: "4",
    name: "The Oceanview Villa",
    slug: "the-oceanview-villa",
    location: "Goa, India",
    bedrooms: 4,
    bathrooms: 4,
    amenity: "Private Pool",
    price: 800,
    petFriendly: true,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    desc: "Modern architecture meets coastal serenity in this stunning beachfront private sanctuary.",
  },
  {
    id: "5",
    name: "The Forest Lodge",
    slug: "the-forest-lodge",
    location: "Manali, India",
    bedrooms: 3,
    bathrooms: 3,
    amenity: "Indoor Pool",
    price: 700,
    petFriendly: false,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
    desc: "A secluded mountain escape, surrounded by pine forests and fresh mountain air.",
  },
  {
    id: "6",
    name: "The Sunset Villa",
    slug: "the-sunset-villa",
    location: "Phuket, Thailand",
    bedrooms: 4,
    bathrooms: 4,
    amenity: "Infinity Pool",
    price: 1100,
    petFriendly: false,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    desc: "Contemporary design, tropical vibes and unbeatable panoramic ocean views at dusk.",
  },
];

export default function PropertiesPage() {
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedBeds, setSelectedBeds] = useState("all");
  const [petFriendlyOnly, setPetFriendlyOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [sortBy, setSortBy] = useState("recommended");

  const filteredStays = allStaysData
    .filter((stay) => {
      if (selectedLocation !== "all" && !stay.location.toLowerCase().includes(selectedLocation.toLowerCase())) {
        return false;
      }
      if (selectedBeds !== "all" && stay.bedrooms < Number(selectedBeds)) {
        return false;
      }
      if (petFriendlyOnly && !stay.petFriendly) {
        return false;
      }
      if (stay.price > maxPrice) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="bg-[#EFE3D5] min-h-screen text-[#281822]">
      {/* Hero Banner */}
      <section className="relative h-[460px] flex items-end justify-start bg-[#281822]">
        <Image
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1920&auto=format&fit=crop"
          alt="Curated Stays Hero"
          fill
          priority
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#281822] via-[#281822]/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-14">
          <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C49C79] uppercase block mb-3">
            Our Stays
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-light text-[#EFE3D5] leading-tight mb-4">
            Curated Stays in <br />
            Extraordinary Locations
          </h1>
          <p className="text-[#EFE3D5]/80 max-w-lg text-sm font-light leading-relaxed">
            From coastal escapes to mountain retreats, each stay is handpicked for its character, comfort, and private charm.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-y border-[#48182E]/10 sticky top-16 z-30 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#957082] font-semibold mb-1">
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-[#EFE3D5]/40 border border-[#957082]/30 rounded px-3 py-2 text-[#281822] focus:outline-none focus:border-[#C49C79]"
              >
                <option value="all">All Locations</option>
                <option value="Greece">Santorini, Greece</option>
                <option value="Bali">Bali, Indonesia</option>
                <option value="Italy">Tuscany, Italy</option>
                <option value="India">India (Goa / Manali)</option>
                <option value="Thailand">Phuket, Thailand</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#957082] font-semibold mb-1">
                Check In
              </label>
              <input
                type="date"
                className="w-full bg-[#EFE3D5]/40 border border-[#957082]/30 rounded px-3 py-1.5 text-[#281822] focus:outline-none focus:border-[#C49C79]"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#957082] font-semibold mb-1">
                Check Out
              </label>
              <input
                type="date"
                className="w-full bg-[#EFE3D5]/40 border border-[#957082]/30 rounded px-3 py-1.5 text-[#281822] focus:outline-none focus:border-[#C49C79]"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#957082] font-semibold mb-1">
                Guests
              </label>
              <select className="w-full bg-[#EFE3D5]/40 border border-[#957082]/30 rounded px-3 py-2 text-[#281822] focus:outline-none focus:border-[#C49C79]">
                <option>Any Number</option>
                <option>2+ Guests</option>
                <option>4+ Guests</option>
                <option>8+ Guests</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#48182E]/5 text-xs">
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <label className="inline text-[#281822] font-medium mr-2">Bedrooms:</label>
                <select
                  value={selectedBeds}
                  onChange={(e) => setSelectedBeds(e.target.value)}
                  className="bg-[#EFE3D5]/40 border border-[#957082]/30 rounded px-2.5 py-1 text-[#281822]"
                >
                  <option value="all">Any</option>
                  <option value="3">3+ Beds</option>
                  <option value="4">4+ Beds</option>
                  <option value="5">5+ Beds</option>
                </select>
              </div>

              <label className="flex items-center gap-2 cursor-pointer text-[#281822]">
                <input
                  type="checkbox"
                  checked={petFriendlyOnly}
                  onChange={(e) => setPetFriendlyOnly(e.target.checked)}
                  className="accent-[#C49C79]"
                />
                <span>Pet-friendly</span>
              </label>

              <div className="flex items-center gap-2">
                <span className="text-[#281822]">Max: ${maxPrice}/nt</span>
                <input
                  type="range"
                  min="600"
                  max="2000"
                  step="50"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="accent-[#C49C79] cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-[#957082] font-medium">Sort:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#EFE3D5]/40 border border-[#957082]/30 rounded px-3 py-1 text-[#281822]"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStays.map((stay) => (
            <Link
              key={stay.id}
              href={`/properties/${stay.slug}`}
              className="group flex flex-col bg-white border border-[#48182E]/10 rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={stay.image}
                  alt={stay.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {stay.petFriendly && (
                  <span className="absolute top-3 left-3 bg-[#281822]/85 text-[#EFE3D5] text-[10px] uppercase tracking-widest px-2.5 py-1 rounded">
                    🐾 Pet Friendly
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#957082] font-semibold block mb-1">
                    {stay.location}
                  </span>
                  <h3 className="font-serif text-xl text-[#281822] group-hover:text-[#C49C79] transition-colors mb-2">
                    {stay.name}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-[#957082] mb-3">
                    <span>🛏 {stay.bedrooms} Beds</span>
                    <span>🚿 {stay.bathrooms} Baths</span>
                    <span>🏊 {stay.amenity}</span>
                  </div>

                  <p className="text-[#281822]/70 text-xs line-clamp-2 leading-relaxed mb-6 font-light">
                    {stay.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                  <div className="text-base font-semibold text-[#281822]">
                    ${stay.price.toLocaleString()} <span className="text-xs font-normal text-[#957082]">/ night</span>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C49C79] group-hover:translate-x-1 transition-transform">
                    View &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}