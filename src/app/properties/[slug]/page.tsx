"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function PropertyDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1 Guest");

  return (
    <div className="bg-[#f7f4ee] min-h-screen text-[#1c1917] pt-20">
      {/* 1. BREADCRUMB & TITLE BANNER */}
      <section className="relative h-[420px] flex items-end justify-start bg-black">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&auto=format&fit=crop"
          alt="Villa Banner"
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-10">
          <Link
            href="/properties"
            className="text-xs text-[#e2c7a9] uppercase tracking-widest hover:underline mb-4 inline-block"
          >
            &larr; Back to Stays
          </Link>
          <span className="text-[10px] uppercase tracking-widest text-stone-300 block mb-1">
            Tuscany, Italy
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-light text-white mb-3">
            The Olive Retreat
          </h1>
          <p className="text-white/80 max-w-xl text-sm font-light">
            A timeless villa surrounded by olive groves and rolling hills, perfect for wine, food and unwinding.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/90 mt-4">
            <span>🛏 5 Bedrooms</span>
            <span>🚿 5 Bathrooms</span>
            <span>🏊 Heated Infinity Pool</span>
          </div>
        </div>
      </section>

      {/* 2. GALLERY & BOOKING CARD GRID */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Photos Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2 relative h-96 rounded overflow-hidden shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"
                alt="Main Villa View"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-56 rounded overflow-hidden shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop"
                alt="Dining Patio"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-56 rounded overflow-hidden shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"
                alt="Living Suite"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Sticky Booking Form */}
          <div className="lg:col-span-4 bg-white border border-stone-200 p-6 rounded shadow-md sticky top-24">
            <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-stone-100">
              <div>
                <span className="text-xs text-stone-500">From</span>
                <div className="text-2xl font-serif text-stone-900 font-semibold">$1,450</div>
              </div>
              <span className="text-xs text-stone-500">/ night</span>
            </div>

            <div className="space-y-4 mb-6 text-xs">
              <div>
                <label className="block uppercase tracking-wider text-[10px] text-stone-500 font-semibold mb-1">
                  Check In
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full border border-stone-300 rounded px-3 py-2 text-stone-800"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[10px] text-stone-500 font-semibold mb-1">
                  Check Out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full border border-stone-300 rounded px-3 py-2 text-stone-800"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider text-[10px] text-stone-500 font-semibold mb-1">
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full border border-stone-300 rounded px-3 py-2 text-stone-800 bg-white"
                >
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>4 Guests</option>
                  <option>8 Guests</option>
                  <option>10 Guests</option>
                </select>
              </div>
            </div>

            <button
              onClick={() => alert("Booking request submitted! Our concierge will connect with you.")}
              className="w-full bg-[#181113] hover:bg-[#8c7456] text-white py-3 rounded text-xs uppercase tracking-widest font-medium transition-colors"
            >
              Book Now &rarr;
            </button>

            <p className="text-[11px] text-stone-400 text-center mt-3">
              Free cancellation up to 14 days before stay
            </p>
          </div>
        </div>
      </section>

      {/* 3. PROPERTY SPECIFICATIONS & AMENITIES */}
      <section className="py-12 max-w-7xl mx-auto px-6 border-t border-stone-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#8c7456] font-semibold block mb-2">
              The Stay Experience
            </span>
            <h2 className="text-3xl font-serif font-light text-stone-900 mb-4">
              Where Nature, Luxury and Time Slow Down
            </h2>
            <p className="text-stone-600 text-sm font-light leading-relaxed mb-6">
              Nestled in the heart of Tuscany, The Olive Retreat is a beautifully restored stone villa that blends traditional charm with modern comfort. Surrounded by centuries-old olive trees and vineyards, this private escape offers breathtaking views, serene gardens, and a heated infinity pool.
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-white p-4 border border-stone-200 rounded">
                <span className="font-semibold block text-stone-900 mb-1">5 Bedrooms</span>
                <span className="text-stone-500">King & Queen beds</span>
              </div>
              <div className="bg-white p-4 border border-stone-200 rounded">
                <span className="font-semibold block text-stone-900 mb-1">5 Bathrooms</span>
                <span className="text-stone-500">En-suite marble baths</span>
              </div>
              <div className="bg-white p-4 border border-stone-200 rounded">
                <span className="font-semibold block text-stone-900 mb-1">Heated Pool</span>
                <span className="text-stone-500">With panoramic view</span>
              </div>
              <div className="bg-white p-4 border border-stone-200 rounded">
                <span className="font-semibold block text-stone-900 mb-1">Fully Equipped</span>
                <span className="text-stone-500">Chef-grade kitchen</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#8c7456] font-semibold block mb-2">
              Amenities & Services Included
            </span>
            <h3 className="text-2xl font-serif font-light text-stone-900 mb-6">
              Key Details
            </h3>

            <div className="grid grid-cols-2 gap-y-3 text-xs text-stone-700">
              <p className="flex items-center gap-2"><span>✓</span> High-speed Wi-Fi</p>
              <p className="flex items-center gap-2"><span>✓</span> Concierge Service</p>
              <p className="flex items-center gap-2"><span>✓</span> Air Conditioning</p>
              <p className="flex items-center gap-2"><span>✓</span> Private Parking</p>
              <p className="flex items-center gap-2"><span>✓</span> Outdoor Fireplace</p>
              <p className="flex items-center gap-2"><span>✓</span> Daily Housekeeping</p>
              <p className="flex items-center gap-2"><span>✓</span> In-Villa Chef (Optional)</p>
              <p className="flex items-center gap-2"><span>✓</span> Wellness & Yoga (Optional)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}