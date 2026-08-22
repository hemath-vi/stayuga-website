"use client";

import { useState } from "react";
import Image from "next/image";
import { ValueProps } from "@/components/home/ValueProps";
import { Testimonials } from "@/components/home/Testimonials";

const faqs = [
  {
    q: "How does the Stayuga booking experience work?",
    a: "Once you select your stay dates and submit an inquiry, our dedicated concierge connects with you to confirm dates, arrange custom preferences (private chefs, airport transfers), and finalize your itinerary.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Most villas offer full refunds up to 14 days prior to your arrival date. Specific policies are stated on each villa's detail card.",
  },
  {
    q: "Can villas host weddings and large gatherings?",
    a: "Yes. Many of our properties feature sprawling lawns and private event authorization. Inquire through our Events page for custom hosting options.",
  },
  {
    q: "Are pet-friendly accommodations available?",
    a: "Yes. Use the 'Pet Friendly' toggle on the Stays page to filter villas that accommodate pets.",
  },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="pt-20 bg-[#EFE3D5] min-h-screen text-[#281822]">
      {/* 1. HERO PHILOSOPHY */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[#957082] block mb-3 font-semibold">
          Our Philosophy
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-[#281822] mb-6 font-light">
          About Stayuga
        </h1>
        <p className="text-[#281822]/80 leading-relaxed max-w-2xl mx-auto font-light text-base">
          At Stayuga, we believe a great stay is more than just a destination — it's a curated feeling. 
          Every villa is handpicked for its soul, character, and tranquility.
        </p>
      </section>

      {/* 2. NARRATIVE */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-96 w-full rounded-sm overflow-hidden shadow-lg border border-[#48182E]/10">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
            alt="Stayuga Villa Interior"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-serif font-light mb-4 text-[#281822]">
            More than a stay — it's a feeling.
          </h2>
          <p className="text-[#281822]/80 font-light leading-relaxed mb-4 text-sm">
            We bridge the gap between world-class boutique hospitality and the intimacy of private residential living.
          </p>
          <p className="text-[#281822]/80 font-light leading-relaxed text-sm">
            From seamless booking to private concierge and custom-designed itineraries, we craft spaces and services where lasting memories are born.
          </p>
        </div>
      </section>

      {/* 3. WHY STAYUGA */}
      <section className="py-12 border-t border-[#48182E]/10">
        <ValueProps />
      </section>

      {/* 4. FAQ ACCORDION */}
      <section className="py-16 max-w-4xl mx-auto px-6 border-t border-[#48182E]/10">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#957082] block mb-2 font-semibold">
            Common Inquiries
          </span>
          <h2 className="text-3xl font-serif font-light text-[#281822]">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="bg-white border border-[#48182E]/10 rounded-sm p-5 cursor-pointer transition-all shadow-sm hover:border-[#C49C79]"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="flex justify-between items-center text-sm font-serif font-medium text-[#281822]">
                <span>{faq.q}</span>
                <span className="text-[#C49C79] font-bold text-base">{openFaq === index ? "−" : "+"}</span>
              </div>
              {openFaq === index && (
                <p className="text-xs text-[#281822]/75 font-light leading-relaxed mt-3 pt-3 border-t border-stone-100">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. CONTACT CONCIERGE */}
      <section className="py-16 bg-[#281822] text-[#EFE3D5] border-t border-[#48182E]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C49C79] block mb-2 font-semibold">
              Get in Touch
            </span>
            <h2 className="text-3xl font-serif font-light text-[#EFE3D5]">Contact Concierge</h2>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! Our concierge team will connect with you shortly.");
            }}
            className="space-y-4 text-xs"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="bg-white/5 border border-white/15 rounded p-3 text-[#EFE3D5] placeholder-[#957082] focus:outline-none focus:border-[#C49C79]"
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                className="bg-white/5 border border-white/15 rounded p-3 text-[#EFE3D5] placeholder-[#957082] focus:outline-none focus:border-[#C49C79]"
              />
            </div>
            <textarea
              rows={4}
              required
              placeholder="How can we craft your journey?"
              className="w-full bg-white/5 border border-white/15 rounded p-3 text-[#EFE3D5] placeholder-[#957082] focus:outline-none focus:border-[#C49C79]"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#C49C79] text-[#281822] hover:bg-[#EFE3D5] py-3.5 rounded uppercase tracking-[0.2em] font-semibold transition-all shadow-md active:scale-95"
            >
              Send Inquiry &rarr;
            </button>
          </form>
        </div>
      </section>

      {/* 6. GUEST STORIES */}
      <section className="py-16 border-t border-[#48182E]/10">
        <Testimonials />
      </section>
    </div>
  );
}