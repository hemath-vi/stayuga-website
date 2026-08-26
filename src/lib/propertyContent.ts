/**
 * Demo content + add-on service catalogue for the property detail page.
 *
 * `icon` values are keys into the map in
 * `src/components/properties/amenityIcons.tsx` — that's what replaced every
 * emoji that used to live in the JSX.
 *
 * When the real API is wired in, swap `getPropertyContent()` for
 * `getProperty(slug)` from `@/lib/data` — the shape is deliberately close to
 * the `Property` type in `@/lib/types`.
 */

export type IconKey =
  | "bed"
  | "bath"
  | "pool"
  | "guests"
  | "wifi"
  | "parking"
  | "ac"
  | "kitchen"
  | "fireplace"
  | "housekeeping"
  | "concierge"
  | "chef"
  | "wellness"
  | "pets"
  | "tv"
  | "garden"
  | "bonfire"
  | "photography"
  | "decor"
  | "transport"
  | "spa"
  | "music";

export interface QuickFact {
  icon: IconKey;
  label: string;
  detail?: string;
}

export interface AddOnService {
  id: string;
  name: string;
  icon: IconKey;
  /** Short one-liner shown on the card */
  summary: string;
  /** Long copy shown inside the popup */
  description: string;
  price: number;
  /** How the price is applied when totalling */
  unit: "per_stay" | "per_night" | "per_person";
  /** Bullet points shown in the popup */
  includes: string[];
  notice?: string;
  popular?: boolean;
}

export interface PropertyContent {
  slug: string;
  name: string;
  location: string;
  address: string;
  /** Used to build the Google Maps embed + deep link */
  coordinates: { lat: number; lng: number };
  tagline: string;
  description: string;
  currency: string;
  basePrice: number;
  images: { src: string; alt: string }[];
  quickFacts: QuickFact[];
  specs: { icon: IconKey; title: string; detail: string }[];
  amenities: { icon: IconKey; label: string }[];
}

/* ------------------------------------------------------------------ */
/* Add-on services (shared across properties)                          */
/* ------------------------------------------------------------------ */

export const ADD_ON_SERVICES: AddOnService[] = [
  {
    id: "private-chef",
    name: "Private Chef",
    icon: "chef",
    summary: "Full-day chef preparing regional & continental menus",
    description:
      "A dedicated chef stays on property for the duration of your booking, cooking breakfast, lunch and dinner to a menu you agree in advance. Dietary preferences — Jain, vegan, gluten-free, low-oil — are all accommodated with 48 hours notice.",
    price: 6500,
    unit: "per_night",
    includes: [
      "Breakfast, lunch and dinner prepared fresh",
      "Menu consultation before arrival",
      "Groceries sourced and billed at actuals",
      "Kitchen cleaned down after every service",
    ],
    notice: "Requires 48 hours advance notice",
    popular: true,
  },
  {
    id: "airport-transfer",
    name: "Airport Transfer",
    icon: "transport",
    summary: "Chauffeured pick-up and drop in a premium SUV",
    description:
      "Door-to-door transfers in a sanitised premium SUV with a professional chauffeur. Your driver tracks your flight, so delays cost you nothing, and waits at arrivals with a Stayuga name board.",
    price: 4500,
    unit: "per_stay",
    includes: [
      "Return airport pick-up and drop",
      "Flight tracking with free waiting time",
      "Bottled water, phone chargers on board",
      "Up to 6 passengers and 6 bags",
    ],
  },
  {
    id: "bonfire-bbq",
    name: "Bonfire & BBQ Setup",
    icon: "bonfire",
    summary: "Evening bonfire with a live grill station",
    description:
      "A lit bonfire in the garden with seating, plus a live grill manned by our staff. Choose a vegetarian, non-vegetarian or mixed platter — everything is marinated in-house and grilled to order while you sit out.",
    price: 5500,
    unit: "per_stay",
    includes: [
      "Bonfire pit, firewood and lounge seating",
      "Live grill with an attendant for 2 hours",
      "Veg / non-veg platter for the group",
      "Full clean-up the next morning",
    ],
    notice: "Subject to local fire regulations and weather",
    popular: true,
  },
  {
    id: "celebration-decor",
    name: "Celebration Décor",
    icon: "decor",
    summary: "Florals, lighting and signage for your occasion",
    description:
      "Our stylists dress the property for birthdays, anniversaries, proposals or baby showers. You pick a palette; we handle florals, fairy lights, balloon work, a cake table and custom signage — set up before you walk in.",
    price: 12000,
    unit: "per_stay",
    includes: [
      "Fresh floral installation and fairy lighting",
      "Personalised name / occasion signage",
      "Cake table and photo corner styling",
      "Setup before check-in, teardown after",
    ],
  },
  {
    id: "spa-wellness",
    name: "In-Villa Spa & Yoga",
    icon: "spa",
    summary: "Therapists and instructors who come to you",
    description:
      "Certified therapists set up a massage station in your suite or on the deck. Sessions include deep-tissue, Swedish and Abhyanga. Morning yoga is led by a trained instructor with mats and props provided.",
    price: 3200,
    unit: "per_person",
    includes: [
      "60-minute massage of your choice",
      "Sunrise yoga session with an instructor",
      "Mats, oils, linens and props provided",
      "Slots bookable between 6 AM and 8 PM",
    ],
    notice: "Priced per guest availing the service",
  },
  {
    id: "photographer",
    name: "Photographer",
    icon: "photography",
    summary: "Half-day shoot with edited, delivered gallery",
    description:
      "A professional photographer covers four hours of your stay — candid, portrait or event coverage. You receive a colour-graded online gallery within seven working days, with full print and social rights.",
    price: 15000,
    unit: "per_stay",
    includes: [
      "4 hours of on-location coverage",
      "80+ edited high-resolution images",
      "Private online gallery within 7 days",
      "Full usage rights, no watermarks",
    ],
  },
  {
    id: "live-music",
    name: "Live Acoustic Set",
    icon: "music",
    summary: "A live duo for your evening under the stars",
    description:
      "An acoustic duo — vocals and guitar — plays a two-hour set on the lawn or terrace. Share a song list beforehand and they'll build the evening around it, sound system and lighting included.",
    price: 18000,
    unit: "per_stay",
    includes: [
      "2-hour live acoustic performance",
      "Requested song list honoured",
      "PA system and ambient stage lighting",
      "Setup and soundcheck before guests gather",
    ],
    notice: "Music must stop by 10 PM per local noise rules",
  },
  {
    id: "pet-care",
    name: "Pet Care & Sitting",
    icon: "pets",
    summary: "A handler for your dog while you switch off",
    description:
      "A trained handler looks after your pet during the day — walks, feeding, playtime and supervision — so you can head out without worry. Pet beds, bowls and treats are provided on arrival.",
    price: 2500,
    unit: "per_night",
    includes: [
      "Daytime supervision, walks and feeding",
      "Pet bed, bowls and treats provided",
      "Emergency vet contact on standby",
      "Suitable for dogs and cats",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Property demo data                                                  */
/* ------------------------------------------------------------------ */

const PROPERTIES: Record<string, PropertyContent> = {
  "the-olive-retreat": {
    slug: "the-olive-retreat",
    name: "The Olive Retreat",
    location: "Tuscany, Italy",
    address: "Podere Il Ulivo, Val d'Orcia, 53027 Tuscany, Italy",
    coordinates: { lat: 43.0409, lng: 11.6119 },
    tagline:
      "A timeless villa surrounded by olive groves and rolling hills — built for wine, long lunches and unwinding.",
    description:
      "Nestled in the heart of Tuscany, The Olive Retreat is a beautifully restored stone villa that blends traditional charm with modern comfort. Surrounded by centuries-old olive trees and vineyards, this private escape offers breathtaking views, serene gardens, and a heated infinity pool that catches the last of the evening light.",
    currency: "INR",
    basePrice: 124000,
    images: [
      {
        src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop",
        alt: "Villa exterior at golden hour",
      },
      {
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
        alt: "Shaded dining patio",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        alt: "Living suite with garden views",
      },
      {
        src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200&auto=format&fit=crop",
        alt: "Heated infinity pool",
      },
      {
        src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
        alt: "Master bedroom",
      },
    ],
    quickFacts: [
      { icon: "bed", label: "5 Bedrooms" },
      { icon: "bath", label: "5 Bathrooms" },
      { icon: "guests", label: "Up to 12 Guests" },
      { icon: "pool", label: "Heated Infinity Pool" },
    ],
    specs: [
      { icon: "bed", title: "5 Bedrooms", detail: "King & queen beds" },
      { icon: "bath", title: "5 Bathrooms", detail: "En-suite marble baths" },
      { icon: "pool", title: "Heated Pool", detail: "With panoramic view" },
      { icon: "kitchen", title: "Fully Equipped", detail: "Chef-grade kitchen" },
    ],
    amenities: [
      { icon: "wifi", label: "High-speed Wi-Fi" },
      { icon: "concierge", label: "Concierge Service" },
      { icon: "ac", label: "Air Conditioning" },
      { icon: "parking", label: "Private Parking" },
      { icon: "fireplace", label: "Outdoor Fireplace" },
      { icon: "housekeeping", label: "Daily Housekeeping" },
      { icon: "tv", label: "Smart TV & Sound" },
      { icon: "garden", label: "Private Garden" },
      { icon: "pets", label: "Pet Friendly" },
      { icon: "kitchen", label: "Chef's Kitchen" },
    ],
  },
};

const FALLBACK = PROPERTIES["the-olive-retreat"];

export function getPropertyContent(slug: string): PropertyContent {
  return PROPERTIES[slug] ?? { ...FALLBACK, slug };
}

/* ------------------------------------------------------------------ */
/* Pricing helpers                                                     */
/* ------------------------------------------------------------------ */

export function nightsBetween(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0;
  const ms = new Date(checkOut).getTime() - new Date(checkIn).getTime();
  return ms > 0 ? Math.round(ms / 86_400_000) : 0;
}

/** Cost of a single add-on, given stay length and party size. */
export function serviceCost(service: AddOnService, nights: number, guests: number): number {
  switch (service.unit) {
    case "per_night":
      return service.price * Math.max(nights, 1);
    case "per_person":
      return service.price * Math.max(guests, 1);
    default:
      return service.price;
  }
}

export const UNIT_LABEL: Record<AddOnService["unit"], string> = {
  per_stay: "per stay",
  per_night: "per night",
  per_person: "per guest",
};