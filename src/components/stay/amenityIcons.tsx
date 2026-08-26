import {
  Bath,
  BedDouble,
  BellRing,
  Camera,
  Car,
  ChefHat,
  Flame,
  Flower2,
  Music,
  PartyPopper,
  PawPrint,
  Snowflake,
  Sparkles,
  Trees,
  Tv,
  Users,
  Utensils,
  Waves,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/lib/propertyContent";

/**
 * Single source of truth for iconography on the property page.
 * Every emoji that used to be hard-coded in the JSX (🛏 🚿 🏊 ✓ …) now
 * resolves through this map instead.
 */
export const ICONS: Record<IconKey, LucideIcon> = {
  bed: BedDouble,
  bath: Bath,
  pool: Waves,
  guests: Users,
  wifi: Wifi,
  parking: Car,
  ac: Snowflake,
  kitchen: Utensils,
  fireplace: Flame,
  housekeeping: Sparkles,
  concierge: BellRing,
  chef: ChefHat,
  wellness: Flower2,
  pets: PawPrint,
  tv: Tv,
  garden: Trees,
  bonfire: Flame,
  photography: Camera,
  decor: PartyPopper,
  transport: Car,
  spa: Flower2,
  music: Music,
};

export function AmenityIcon({
  name,
  size = 16,
  className,
}: {
  name: IconKey;
  size?: number;
  className?: string;
}) {
  const Icon = ICONS[name] ?? Sparkles;
  return <Icon size={size} strokeWidth={1.6} className={className} aria-hidden="true" />;
}