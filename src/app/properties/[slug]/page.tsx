import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Users, BedDouble, Bath, Check } from "lucide-react";
import { getProperty } from "@/lib/data";
import { ApiRequestError } from "@/lib/api";
import { formatPrice } from "@/lib/format";
import { Container } from "@/components/ui/Container";
import { Gallery } from "@/components/properties/Gallery";
import { BookingInquiryForm } from "@/components/properties/BookingInquiryForm";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function fetchPropertyOr404(slug: string) {
  try {
    return await getProperty(slug);
  } catch (err) {
    if (err instanceof ApiRequestError && err.status === 404) notFound();
    throw err;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = await fetchPropertyOr404(slug);
  return { title: property.title, description: property.tagline ?? property.description };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const property = await fetchPropertyOr404(slug);

  return (
    <div className="py-10">
      <Container>
        <p className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-ink-soft">
          <MapPin size={13} /> {property.location.city}, {property.location.state}
        </p>
        <h1 className="mt-2 font-display text-3xl text-ink sm:text-4xl">{property.title}</h1>
        {property.tagline && <p className="mt-2 max-w-2xl text-ink-soft">{property.tagline}</p>}

        <div className="mt-8">
          <Gallery images={property.images} title={property.title} />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <div className="flex flex-wrap gap-6 border-b border-line/70 pb-6 text-sm text-ink-soft">
              <span className="flex items-center gap-1.5">
                <Users size={16} className="text-forest" /> {property.capacity.maxGuests} guests
              </span>
              <span className="flex items-center gap-1.5">
                <BedDouble size={16} className="text-forest" /> {property.capacity.bedrooms} bedrooms
              </span>
              <span className="flex items-center gap-1.5">
                <Bath size={16} className="text-forest" /> {property.capacity.bathrooms} bathrooms
              </span>
            </div>

            <div>
              <h2 className="font-display text-xl text-ink">About this stay</h2>
              <p className="mt-3 whitespace-pre-line leading-relaxed text-ink-soft">
                {property.description}
              </p>
            </div>

            {property.amenities.length > 0 && (
              <div>
                <h2 className="font-display text-xl text-ink">Amenities</h2>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {property.amenities.map((amenity) => (
                    <span key={amenity} className="flex items-center gap-2 text-sm text-ink-soft">
                      <Check size={14} className="text-forest" /> {amenity}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-line/70 bg-white p-6">
              <div className="flex items-baseline justify-between border-b border-line/70 pb-4">
                <span className="font-display text-2xl text-ink">
                  {formatPrice(property.pricing.basePrice, property.pricing.currency)}
                </span>
                <span className="text-xs text-ink-soft">/ night</span>
              </div>
              <div className="mt-6">
                <BookingInquiryForm
                  propertyId={property._id}
                  propertyTitle={property.title}
                  maxGuests={property.capacity.maxGuests}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
