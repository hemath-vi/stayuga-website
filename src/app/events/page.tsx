"use client";

import { useState } from "react";
import Image from "next/image";

const eventTypes = [
  {
    title: "Weddings & Engagements",
    desc: "Say 'I do' in a destination as extraordinary as your love story.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Corporate Retreat / Offsite",
    desc: "Inspire your team with focused spaces, scenic surroundings and seamless planning.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Spiritual / Cultural",
    desc: "Mindful gatherings, meditation retreats and rich cultural traditions.",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Private Celebration",
    desc: "Birthdays, anniversaries, reunions — make it unforgettable in a luxury villa setting.",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=800&auto=format&fit=crop",
  },
];

export default function EventsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Weddings & Engagements",
    stayBackRooms: "5",
    guestCount: "50",
    date: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your event inquiry has been received. Our event coordinator will contact you shortly.");
  };

  return (
    <div className="bg-[#f7f4ee] min-h-screen text-[#1c1917] pt-20">
      {/* 1. HERO */}
      <section className="relative h-[480px] flex items-end justify-start bg-black">
        <Image
          src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1920&auto=format&fit=crop"
          alt="Curated Events Hero"
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-16">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#e2c7a9] uppercase block mb-3">
            Private Events & Celebrations
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-light text-white leading-tight mb-4">
            Meaningful Moments, <br />
            Beautifully Curated.
          </h1>
          <p className="text-white/80 max-w-lg text-sm font-light leading-relaxed">
            From intimate gatherings to grand celebrations, our villas provide the perfect setting for life's most special moments.
          </p>
        </div>
      </section>

      {/* 2. EVENT TYPES */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#8c7456] font-semibold block mb-2">
            Tailored Experiences
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-stone-900">
            Experiences for Every Occasion
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventTypes.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-stone-200 rounded overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div className="relative h-48 w-full">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-500 text-xs leading-relaxed font-light">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EVENT INQUIRY FORM */}
      <section className="py-16 bg-[#1e1315] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#c5a880] font-semibold block mb-2">
              Plan With Us
            </span>
            <h2 className="text-3xl font-serif font-light">Custom Event Inquiry</h2>
            <p className="text-stone-400 text-xs mt-2">
              Tell us your vision and requirements; our team will craft a bespoke proposal.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-black/30 border border-white/10 p-8 rounded-lg space-y-6 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-stone-300 uppercase tracking-wider mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/20 rounded p-3 text-white placeholder-stone-500 focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div>
                <label className="block text-stone-300 uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/20 rounded p-3 text-white placeholder-stone-500 focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div>
                <label className="block text-stone-300 uppercase tracking-wider mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 / +1 ..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/20 rounded p-3 text-white placeholder-stone-500 focus:outline-none focus:border-[#c5a880]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-stone-300 uppercase tracking-wider mb-2">Type of Event</label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full bg-[#181113] border border-white/20 rounded p-3 text-white focus:outline-none focus:border-[#c5a880]"
                >
                  <option>Weddings & Engagements</option>
                  <option>Corporate Retreat / Offsite</option>
                  <option>Spiritual / Cultural</option>
                  <option>Private Celebration</option>
                  <option>Special Shoot / Media</option>
                </select>
              </div>

              <div>
                <label className="block text-stone-300 uppercase tracking-wider mb-2">
                  Stay-Back Rooms Required
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="e.g. 5"
                  value={formData.stayBackRooms}
                  onChange={(e) => setFormData({ ...formData, stayBackRooms: e.target.value })}
                  className="w-full bg-white/5 border border-white/20 rounded p-3 text-white focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div>
                <label className="block text-stone-300 uppercase tracking-wider mb-2">
                  Estimated Guest Count
                </label>
                <input
                  type="number"
                  min="1"
                  placeholder="e.g. 50"
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                  className="w-full bg-white/5 border border-white/20 rounded p-3 text-white focus:outline-none focus:border-[#c5a880]"
                />
              </div>
            </div>

            <div>
              <label className="block text-stone-300 uppercase tracking-wider mb-2">Event Notes & Details</label>
              <textarea
                rows={4}
                placeholder="Tell us about the dates, preferred destinations, catering preferences, or special requests..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-white/5 border border-white/20 rounded p-3 text-white placeholder-stone-500 focus:outline-none focus:border-[#c5a880]"
              ></textarea>
            </div>

            <div className="text-center pt-2">
              <button
                type="submit"
                className="border border-[#c5a880] bg-[#c5a880] text-[#1e1315] hover:bg-transparent hover:text-[#c5a880] px-8 py-3 rounded uppercase tracking-widest font-semibold transition-all"
              >
                Submit Inquiry &rarr;
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}