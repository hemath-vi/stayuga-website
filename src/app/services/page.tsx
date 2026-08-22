import { Metadata } from "next";
import Image from "next/image";
import { ChefHat, Headset, Flower2, Car } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const SERVICES = [
  {
    icon: ChefHat,
    title: "Private chef",
    desc: "Fresh, seasonal menus cooked in-villa for every meal.",
    image:
      "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Headset,
    title: "24/7 concierge",
    desc: "One number for transfers, bookings, and anything you need.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Flower2,
    title: "Wellness & yoga",
    desc: "Sunrise sessions and in-villa spa therapy, on request.",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Car,
    title: "Chauffeured transfers",
    desc: "Airport pickups and day trips in comfort.",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200&auto=format&fit=crop",
  },
];

export const metadata: Metadata = {
  title: "Services",
  description: "Private chefs, concierge, wellness, and transfers arranged around every Stayuga stay.",
};

export default function ServicesPage() {
  return (
    <div className="py-16">
      <Container>
        <SectionHeading eyebrow="Services" title="Every stay, fully hosted" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SERVICES.map(({ icon: Icon, title, desc, image }) => (
            <div
              key={title}
              className="group overflow-hidden border border-line/70 bg-white"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <Icon size={20} className="text-forest" />
                <h3 className="mt-3 font-display text-lg text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
