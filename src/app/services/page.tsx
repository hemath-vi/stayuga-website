import Image from "next/image";
import Link from "next/link";

const serviceList = [
  {
    title: "Private Chef & Fine Dining",
    desc: "Personalized multi-course meals prepared fresh daily with locally sourced ingredients.",
    price: "From $120 / person",
    image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Dedicated 24/7 Concierge",
    desc: "Flight arrangements, VIP restaurant bookings, yacht charters, and emergency support.",
    price: "Included with every stay",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Wellness, Yoga & Spa",
    desc: "Private yoga instructors, sunrise meditation sessions, and in-villa deep tissue massages.",
    price: "From $90 / session",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Luxury Transport & Chauffeur",
    desc: "Airport transfers, luxury SUV day hires, and private helicopter charters.",
    price: "From $150 / day",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#f7f4ee] min-h-screen text-[#1c1917] pt-20">
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-[#8c7456] block mb-3 font-semibold">
          Tailored Luxury
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 font-light">
          Our Services & Experiences
        </h1>
        <p className="text-stone-600 leading-relaxed max-w-2xl mx-auto font-light text-sm">
          Every stay includes access to our end-to-end hospitality team. Customize your getaway with bespoke add-ons designed for effortless living.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {serviceList.map((service) => (
          <div
            key={service.title}
            className="bg-white border border-stone-200 rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row"
          >
            <div className="relative h-48 md:h-auto md:w-1/2">
              <Image src={service.image} alt={service.title} fill className="object-cover" />
            </div>
            <div className="p-6 md:w-1/2 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg text-stone-900 mb-2">{service.title}</h3>
                <p className="text-stone-500 text-xs font-light leading-relaxed mb-4">
                  {service.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#8c7456]">{service.price}</span>
                <Link
                  href="/properties"
                  className="text-xs font-semibold uppercase tracking-wider text-stone-900 hover:text-[#8c7456] transition-colors"
                >
                  Book &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}