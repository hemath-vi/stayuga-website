"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const allStaysData = [
  {
    id: "3",
    name: "The Olive Retreat",
    slug: "the-olive-retreat",
    location: "TUSCANY, ITALY",
    bedrooms: 5,
    bathrooms: 5,
    amenity: "Heated Pool",
    price: 1450,
    tag: "BEST SELLER",
    petFriendly: true,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
    desc: "A timeless villa surrounded by olive groves and rolling hills, perfect for wine, food and unwinding.",
  },
  {
    id: "2",
    name: "The Island Haven",
    slug: "the-island-haven",
    location: "BALI, INDONESIA",
    bedrooms: 3,
    bathrooms: 3,
    amenity: "Private Pool",
    price: 950,
    tag: "PET FRIENDLY",
    petFriendly: true,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop",
    desc: "Tucked in lush greenery, this villa blends modern comfort with Balinese charm and calm.",
  },
  {
    id: "4",
    name: "The Oceanview Villa",
    slug: "the-oceanview-villa",
    location: "GOA, INDIA",
    bedrooms: 3,
    bathrooms: 4,
    amenity: "Infinity Pool",
    price: 800,
    tag: null,
    petFriendly: true,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    desc: "Modern architecture meets coastal serenity in this stunning beachfront private sanctuary.",
  },
  {
    id: "5",
    name: "The Forest Lodge",
    slug: "the-forest-lodge",
    location: "MANALI, INDIA",
    bedrooms: 3,
    bathrooms: 3,
    amenity: "Indoor Pool",
    price: 700,
    tag: null,
    petFriendly: false,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
    desc: "A secluded mountain escape, surrounded by pine forests and fresh mountain air.",
  },
  {
    id: "6",
    name: "The Sunset Villa",
    slug: "the-sunset-villa",
    location: "PHUKET, THAILAND",
    bedrooms: 4,
    bathrooms: 4,
    amenity: "Infinity Pool",
    price: 1100,
    tag: "POPULAR",
    petFriendly: false,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    desc: "Contemporary design, tropical vibes and unbeatable panoramic ocean views at dusk.",
  },
  {
    id: "1",
    name: "The Aegean Escape",
    slug: "the-aegean-escape",
    location: "SANTORINI, GREECE",
    bedrooms: 4,
    bathrooms: 4,
    amenity: "Infinity Pool",
    price: 1200,
    tag: null,
    petFriendly: false,
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop",
    desc: "A cliffside villa with panoramic views of the Aegean Sea, designed for slow mornings and golden sunsets.",
  },
];

export default function stayPage() {
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedBeds, setSelectedBeds] = useState("all");
  const [petFriendlyOnly, setPetFriendlyOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [sortBy, setSortBy] = useState("recommended");

  const filteredStays = allStaysData
    .filter((stay) => {
      if (
        selectedLocation !== "all" &&
        !stay.location.toLowerCase().includes(selectedLocation.toLowerCase())
      ) {
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
    <div className="bg-[#FAF7F2] min-h-screen text-[#1c1417]">
      {/* Hero Banner */}
      <section className="relative h-[560px] flex items-center bg-[#181113]">
        <Image
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1920&auto=format&fit=crop"
          alt="Curated Stays Hero"
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#C49C79] uppercase">
              Our Villas
            </span>
            <span className="w-10 h-[1px] bg-[#C49C79]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-[#FAF7F2] leading-tight mb-5 max-w-2xl">
            Curated Stays in <br />
            Extraordinary Locations
          </h1>
          <p className="text-[#FAF7F2]/80 max-w-md text-sm font-light leading-relaxed">
            From coastal escapes to mountain retreats, our villas are handpicked
            for their unique charm, privacy and effortless luxury.
          </p>
        </div>
      </section>

      {/* Floating Filter Box */}
      <div className="max-w-7xl mx-auto px-6 -mt-14 relative z-30 mb-16">
        <div className="bg-[#FAF7F2] rounded-md shadow-xl border border-stone-200/80 p-6 md:p-8 space-y-6">
          {/* Top Row: Location, Check In, Check Out, Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Location */}
            <div className="border-b lg:border-b-0 lg:border-r border-stone-300 pb-3 lg:pb-0 lg:pr-6">
              <span className="block text-[10px] uppercase tracking-widest text-stone-500 font-medium mb-1.5">
                Location
              </span>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-stone-800 text-xs w-full">
                  <svg
                    className="w-4 h-4 text-stone-500 shrink-0 fill-none stroke-current stroke-[1.75]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21s-6-5.333-6-10a6 6 0 0 1 12 0c0 4.667-6 10-6 10z" />
                    <circle cx="12" cy="11" r="2" />
                  </svg>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="bg-transparent border-none w-full text-xs text-stone-800 focus:outline-none cursor-pointer pr-2 appearance-none"
                  >
                    <option value="all">All Locations</option>
                    <option value="Tuscany">Tuscany, Italy</option>
                    <option value="Bali">Bali, Indonesia</option>
                    <option value="Goa">Goa, India</option>
                    <option value="Manali">Manali, India</option>
                    <option value="Phuket">Phuket, Thailand</option>
                    <option value="Santorini">Santorini, Greece</option>
                  </select>
                </div>
                <svg
                  className="w-3.5 h-3.5 text-stone-400 shrink-0 fill-none stroke-current stroke-2 pointer-events-none"
                  viewBox="0 0 24 24"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>

            {/* Check In */}
            <div className="border-b lg:border-b-0 lg:border-r border-stone-300 pb-3 lg:pb-0 lg:pr-6">
              <span className="block text-[10px] uppercase tracking-widest text-stone-500 font-medium mb-1.5">
                Check In
              </span>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-stone-800 text-xs w-full">
                  <svg
                    className="w-4 h-4 text-stone-500 shrink-0 fill-none stroke-current stroke-[1.75]"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <input
                    type="date"
                    className="bg-transparent border-none w-full text-xs text-stone-700 focus:outline-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Check Out */}
            <div className="border-b lg:border-b-0 lg:border-r border-stone-300 pb-3 lg:pb-0 lg:pr-6">
              <span className="block text-[10px] uppercase tracking-widest text-stone-500 font-medium mb-1.5">
                Check Out
              </span>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-stone-800 text-xs w-full">
                  <svg
                    className="w-4 h-4 text-stone-500 shrink-0 fill-none stroke-current stroke-[1.75]"
                    viewBox="0 0 24 24"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <input
                    type="date"
                    className="bg-transparent border-none w-full text-xs text-stone-700 focus:outline-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Guests */}
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-stone-500 font-medium mb-1.5">
                Guests
              </span>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-stone-800 text-xs w-full">
                  <svg
                    className="w-4 h-4 text-stone-500 shrink-0 fill-none stroke-current stroke-[1.75]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <select className="bg-transparent border-none w-full text-xs text-stone-800 focus:outline-none cursor-pointer pr-2 appearance-none">
                    <option>Any Number</option>
                    <option>2+ Guests</option>
                    <option>4+ Guests</option>
                    <option>8+ Guests</option>
                  </select>
                </div>
                <svg
                  className="w-3.5 h-3.5 text-stone-400 shrink-0 fill-none stroke-current stroke-2 pointer-events-none"
                  viewBox="0 0 24 24"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-stone-200" />

          {/* Bottom Row: Bedrooms, Pet-friendly, Price Range, Sort By */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Bedrooms & Pet Friendly */}
            <div className="md:col-span-4 flex items-center gap-6">
              <div className="flex-1">
                <span className="block text-[10px] uppercase tracking-widest text-stone-500 font-medium mb-1.5">
                  Bedrooms
                </span>
                <div className="flex items-center justify-between border-b border-stone-300 pb-1.5">
                  <div className="flex items-center gap-2 text-xs w-full">
                    <svg
                      className="w-4 h-4 text-stone-500 shrink-0 fill-none stroke-current stroke-[1.75]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M2 9v11M22 9v11M2 14h20M2 9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5H2z" />
                    </svg>
                    <select
                      value={selectedBeds}
                      onChange={(e) => setSelectedBeds(e.target.value)}
                      className="bg-transparent border-none text-xs text-stone-800 focus:outline-none cursor-pointer w-full appearance-none"
                    >
                      <option value="all">Any</option>
                      <option value="3">3+ Bedrooms</option>
                      <option value="4">4+ Bedrooms</option>
                      <option value="5">5+ Bedrooms</option>
                    </select>
                  </div>
                  <svg
                    className="w-3.5 h-3.5 text-stone-400 shrink-0 fill-none stroke-current stroke-2 pointer-events-none"
                    viewBox="0 0 24 24"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>

              <label className="flex items-center gap-2.5 cursor-pointer text-xs text-stone-700 pt-4 select-none">
                <input
                  type="checkbox"
                  checked={petFriendlyOnly}
                  onChange={(e) => setPetFriendlyOnly(e.target.checked)}
                  className="w-4 h-4 rounded border-stone-300 accent-[#C49C79] cursor-pointer"
                />
                <span>Pet-friendly</span>
              </label>
            </div>

            {/* Price Range Slider */}
            <div className="md:col-span-5 px-0 md:px-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase tracking-widest text-stone-500 font-medium">
                  Price Range
                </span>
                <span className="text-xs text-stone-600 font-normal">
                  Max: ₹{maxPrice}/night
                </span>
              </div>
              <input
                type="range"
                min="600"
                max="2000"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-1 bg-stone-300 rounded-lg appearance-none cursor-pointer accent-stone-800"
              />
            </div>

            {/* Sort By */}
            <div className="md:col-span-3">
              <span className="block text-[10px] uppercase tracking-widest text-stone-500 font-medium mb-1.5">
                Sort By
              </span>
              <div className="flex items-center justify-between border-b border-stone-300 pb-1.5">
                <div className="flex items-center gap-2 text-xs w-full">
                  <svg
                    className="w-4 h-4 text-stone-500 shrink-0 fill-none stroke-current stroke-[1.75]"
                    viewBox="0 0 24 24"
                  >
                    <line x1="4" y1="21" x2="4" y2="14" />
                    <line x1="4" y1="10" x2="4" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12" y2="3" />
                    <line x1="20" y1="21" x2="20" y2="16" />
                    <line x1="20" y1="12" x2="20" y2="3" />
                    <line x1="1" y1="14" x2="7" y2="14" />
                    <line x1="9" y1="8" x2="15" y2="8" />
                    <line x1="17" y1="16" x2="23" y2="16" />
                  </svg>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent border-none text-xs text-stone-800 focus:outline-none cursor-pointer w-full appearance-none"
                  >
                    <option value="recommended">Recommended</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
                <svg
                  className="w-3.5 h-3.5 text-stone-400 shrink-0 fill-none stroke-current stroke-2 pointer-events-none"
                  viewBox="0 0 24 24"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Info Section */}
      <section className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between text-xs tracking-widest uppercase">
        <span className="font-semibold text-stone-700 tracking-[0.2em] text-[11px]">
          Featured Villas
        </span>
        <div className="flex items-center gap-4 text-stone-400 text-[11px] normal-case tracking-normal">
          <span>
            Showing {filteredStays.length} of {allStaysData.length} villas
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="hover:text-stone-700 transition-colors p-1"
              aria-label="Previous"
            >
              &larr;
            </button>
            <button
              type="button"
              className="hover:text-stone-700 transition-colors p-1"
              aria-label="Next"
            >
              &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Property Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStays.map((stay) => (
            <Link
              key={stay.id}
              href={`/stay/₹{stay.slug}`}
              className="group flex flex-col bg-white rounded-lg border border-stone-200/70 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image & Badges */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={stay.image}
                  alt={stay.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Status Tag */}
                {stay.tag && (
                  <span className="absolute top-4 left-4 bg-stone-900/90 backdrop-blur-xs text-white text-[9px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-xs">
                    {stay.tag}
                  </span>
                )}

                {/* Heart / Wishlist Icon */}
                <button
                  type="button"
                  onClick={(e) => e.preventDefault()}
                  className="absolute top-4 right-4 text-white/80 hover:text-white p-1 transition-colors"
                  aria-label="Save to favorites"
                >
                  <svg
                    className="w-5 h-5 fill-none stroke-current stroke-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>

              {/* Property Details with generous padding & breathing room */}
              <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                <div>
                  <div className="flex items-center gap-1.5 text-stone-500 mb-2">
                    <svg
                      className="w-3.5 h-3.5 stroke-current fill-none stroke-2 shrink-0 text-[#C49C79]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21s-6-5.333-6-10a6 6 0 0 1 12 0c0 4.667-6 10-6 10z" />
                      <circle cx="12" cy="11" r="2" />
                    </svg>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-stone-500">
                      {stay.location}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-stone-900 group-hover:text-[#C49C79] transition-colors mb-4 leading-snug">
                    {stay.name}
                  </h3>

                  {/* Amenities Row with Icons */}
                  <div className="flex items-center gap-5 text-[11px] text-stone-600 mb-6">
                    {/* Beds */}
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-4 h-4 stroke-current fill-none stroke-[1.5]"
                        viewBox="0 0 24 24"
                      >
                        <path d="M2 9v11M22 9v11M2 14h20M2 9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5H2z" />
                      </svg>
                      <span>{stay.bedrooms} Bedrooms</span>
                    </div>

                    {/* Baths */}
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-4 h-4 stroke-current fill-none stroke-[1.5]"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1z" />
                        <path d="M6 12V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1" />
                      </svg>
                      <span>{stay.bathrooms} Bathrooms</span>
                    </div>

                    {/* Amenity / Pool */}
                    <div className="flex items-center gap-1.5">
                      <svg
                        className="w-4 h-4 stroke-current fill-none stroke-[1.5]"
                        viewBox="0 0 24 24"
                      >
                        <path d="M2 18c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
                        <path d="M2 22c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" />
                        <circle cx="17" cy="6" r="2" />
                        <path d="m14 11 3-3 3 2" />
                      </svg>
                      <span>{stay.amenity}</span>
                    </div>
                  </div>
                </div>

                {/* Price & Arrow CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-stone-100 mt-2">
                  <div className="text-xl font-serif text-stone-900 font-medium">
                    ₹{stay.price.toLocaleString()}{" "}
                    <span className="text-xs font-sans text-stone-400 font-normal">
                      / night
                    </span>
                  </div>
                  <span className="text-stone-800 group-hover:translate-x-1.5 group-hover:text-[#C49C79] transition-all text-lg">
                    &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Banner / Value Proposition Bottom Section */}
      <section className="border-t border-stone-200 bg-[#EFE8DF] grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-8 relative h-[360px] p-8 md:p-14 flex flex-col justify-between overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop"
            alt="Extraordinary Experiences"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/50 to-transparent" />
          <div className="relative z-10">
            <span className="text-[10px] font-semibold tracking-[0.25em] text-[#C49C79] uppercase block mb-3">
              Your Perfect Stay Awaits
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#FAF7F2] font-light leading-tight">
              Extraordinary Villas. <br />
              Unforgettable Experiences.
            </h2>
          </div>
          <div className="relative z-10 pt-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#C49C79] text-[#1c1417] px-6 py-3 text-xs tracking-widest uppercase font-semibold hover:bg-[#b58b66] transition-colors"
            >
              <span>Explore Services</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-4 p-8 md:p-12 flex flex-col justify-center gap-6 bg-[#FAF7F2]">
          <div className="flex items-center gap-4">
            <svg
              className="w-5 h-5 text-[#C49C79] shrink-0 fill-none stroke-current stroke-[1.5]"
              viewBox="0 0 24 24"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span className="text-xs tracking-wider text-stone-700">
              Curated stay
            </span>
          </div>
          <div className="flex items-center gap-4">
            <svg
              className="w-5 h-5 text-[#C49C79] shrink-0 fill-none stroke-current stroke-[1.5]"
              viewBox="0 0 24 24"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="text-xs tracking-wider text-stone-700">
              Personalized Concierge
            </span>
          </div>
          <div className="flex items-center gap-4">
            <svg
              className="w-5 h-5 text-[#C49C79] shrink-0 fill-none stroke-current stroke-[1.5]"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
            <span className="text-xs tracking-wider text-stone-700">
              No Extra Costs
            </span>
          </div>
          <div className="flex items-center gap-4">
            <svg
              className="w-5 h-5 text-[#C49C79] shrink-0 fill-none stroke-current stroke-[1.5]"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
            <span className="text-xs tracking-wider text-stone-700">
              Memorable Experiences
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}