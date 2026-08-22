import Link from "next/link";
import Image from "next/image";

const featuredStays = [
  {
    name: "The Olive Retreat",
    location: "TUSCANY, ITALY",
    beds: 5,
    baths: 5,
    price: "$1,450",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
    slug: "the-olive-retreat",
  },
  {
    name: "The Island Haven",
    location: "BALI, INDONESIA",
    beds: 3,
    baths: 3,
    price: "$950",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop",
    slug: "the-island-haven",
  },
  {
    name: "The Oceanview Villa",
    location: "GOA, INDIA",
    beds: 3,
    baths: 4,
    price: "$800",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    slug: "the-oceanview-villa",
  },
];

const serviceCards = [
  { title: "Private Chef", desc: "Bespoke fine-dining & menus" },
  { title: "Concierge", desc: "24/7 personalized itineraries" },
  { title: "In-Villa Dining", desc: "Sunset multi-course service" },
  { title: "Activity Planning", desc: "Private yacht & villa excursions" },
  { title: "Chauffeur & Transfers", desc: "Luxury airport pick-up" },
  { title: "Wellness & Yoga", desc: "Private masters & spa therapy" },
];

export default function HomePage() {
  return (
    <div className="bg-[#EFE3D5] text-[#281822] font-sans selection:bg-[#C49C79] selection:text-[#281822]">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-start bg-[#281822]">
        <Image
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1920&auto=format&fit=crop"
          alt="Luxury Villa Sunset"
          fill
          priority
          className="object-cover opacity-75 transform scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#281822]/90 via-[#281822]/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16">
          <div className="max-w-xl text-left">
            <span className="text-[11px] font-semibold tracking-[0.3em] text-[#C49C79] uppercase block mb-4">
              Luxury Villa Rentals
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-light text-[#EFE3D5] leading-tight mb-6">
              Curated Stays. <br />
              Unforgettable <br />
              Experiences.
            </h1>
            <p className="text-[#EFE3D5]/80 text-sm md:text-base leading-relaxed mb-8 max-w-md font-light">
              Extraordinary stays in the world's most desirable destinations — with no extra cost.
            </p>
            <Link
              href="/properties"
              className="inline-flex items-center gap-3 border border-[#C49C79] bg-[#C49C79]/10 text-[#EFE3D5] px-8 py-3.5 text-xs tracking-[0.2em] uppercase hover:bg-[#C49C79] hover:text-[#281822] active:scale-95 transition-all duration-300 shadow-lg"
            >
              Explore Stays <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OUR STAYS SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12 items-start">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#957082] uppercase block mb-3">
              Our Stays
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#281822] leading-snug mb-4">
              Extraordinary Stays, Handpicked for You
            </h2>
            <p className="text-[#281822]/80 text-sm leading-relaxed mb-6 font-light">
              From coastal escapes to mountain retreats, our villas are handpicked for their unique charm, privacy and effortless luxury.
            </p>
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#48182E] border-b border-[#48182E] pb-1 hover:text-[#C49C79] hover:border-[#C49C79] transition-colors"
            >
              View All Stays <span>&rarr;</span>
            </Link>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredStays.map((stay) => (
              <Link
                key={stay.slug}
                href={`/properties/${stay.slug}`}
                className="group flex flex-col bg-white border border-[#48182E]/10 rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={stay.image}
                    alt={stay.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#957082] block mb-1">
                      {stay.location}
                    </span>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-serif text-lg text-[#281822] group-hover:text-[#C49C79] transition-colors">
                        {stay.name}
                      </h3>
                      <span className="text-[#957082] group-hover:text-[#281822] group-hover:translate-x-1 transition-all">
                        &rarr;
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-[#957082] mb-4 pb-4 border-b border-stone-100">
                      <span>🛏 {stay.beds} Bedrooms</span>
                      <span>🚿 {stay.baths} Bathrooms</span>
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-[#281822]">
                    {stay.price} <span className="text-xs font-normal text-[#957082]">/ night</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR EVENTS SECTION */}
      <section className="bg-[#281822] text-[#EFE3D5] py-20 border-y border-[#48182E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#C49C79] uppercase block mb-3">
                Our Events
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-light leading-snug mb-4">
                Meaningful Moments, Beautifully Curated.
              </h2>
              <p className="text-[#EFE3D5]/70 text-sm font-light leading-relaxed mb-6">
                From intimate gatherings to grand celebrations, our event services create unforgettable experiences in extraordinary settings.
              </p>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C49C79] border border-[#C49C79] px-6 py-3 hover:bg-[#C49C79] hover:text-[#281822] active:scale-95 transition-all shadow-md"
              >
                Explore Events <span>&rarr;</span>
              </Link>
            </div>

            <div className="lg:col-span-5 relative h-80 rounded-sm overflow-hidden border border-[#48182E]/50 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=800&auto=format&fit=crop"
                alt="Event Setup"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="lg:col-span-3 flex flex-col gap-5 text-sm">
              <div className="border-l-2 border-[#C49C79] pl-4">
                <h4 className="font-serif text-[#C49C79] text-base mb-1">Private Celebrations</h4>
                <p className="text-xs text-[#957082]">Birthdays, anniversaries & milestones</p>
              </div>
              <div className="border-l-2 border-[#48182E] pl-4">
                <h4 className="font-serif text-[#EFE3D5] text-base mb-1">Corporate Retreats</h4>
                <p className="text-xs text-[#957082]">Team offsites & leadership summits</p>
              </div>
              <div className="border-l-2 border-[#48182E] pl-4">
                <h4 className="font-serif text-[#EFE3D5] text-base mb-1">Weddings & Engagements</h4>
                <p className="text-xs text-[#957082]">Scenic destination celebrations</p>
              </div>
              <div className="border-l-2 border-[#48182E] pl-4">
                <h4 className="font-serif text-[#EFE3D5] text-base mb-1">Spiritual / Cultural</h4>
                <p className="text-xs text-[#957082]">Mindful getaways & retreats</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative h-[380px] overflow-hidden rounded-sm border border-[#48182E]/10 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=800&auto=format&fit=crop"
              alt="Services Dining"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="lg:col-span-7">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-[#957082] uppercase block mb-3">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#281822] leading-snug mb-4">
              More Than a Stay. <br />A Complete Experience.
            </h2>
            <p className="text-[#281822]/80 text-sm font-light leading-relaxed mb-8">
              We take care of every detail, so you can simply be present. From private chefs to curated activities, our services are designed to make your stay effortless.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {serviceCards.map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-[#48182E]/10 p-4 text-left rounded-sm hover:border-[#C49C79] hover:shadow-md transition-all"
                >
                  <span className="text-xs font-serif font-semibold text-[#281822] block mb-1">
                    {item.title}
                  </span>
                  <p className="text-[11px] text-[#957082] font-light">{item.desc}</p>
                </div>
              ))}
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-[#48182E] bg-[#48182E] text-[#EFE3D5] px-7 py-3 text-xs uppercase tracking-[0.2em] hover:bg-[#C49C79] hover:text-[#281822] hover:border-[#C49C79] active:scale-95 transition-all shadow-sm"
            >
              View All Services & Pricing <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION STRIP */}
      <section className="relative h-64 flex items-center bg-[#281822]">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop"
          alt="Sunset View"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#281822] via-[#281822]/70 to-[#48182E]/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] tracking-[0.3em] text-[#C49C79] uppercase block mb-1 font-semibold">
              Ready for your next escape?
            </span>
            <h3 className="text-2xl md:text-3xl font-serif text-[#EFE3D5]">
              Discover a stay that feels like home — only better.
            </h3>
          </div>
          <Link
            href="/properties"
            className="border border-[#C49C79] bg-[#C49C79] text-[#281822] px-8 py-3 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-transparent hover:text-[#C49C79] active:scale-95 transition-all shadow-xl"
          >
            Book Now &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}