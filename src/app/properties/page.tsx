import { Metadata } from "next";
import { getProperties } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyFilters } from "@/components/properties/PropertyFilters";
import { PropertyCard } from "@/components/properties/PropertyCard";

export const metadata: Metadata = {
  title: "Stays",
  description: "Browse handpicked luxury villas and farmhouses available to book with Stayuga.",
};

interface PageProps {
  searchParams: Promise<Record<string, string | undefined>>;
}

export default async function PropertiesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const query = Object.fromEntries(
    Object.entries(params).filter((entry): entry is [string, string] => entry[1] !== undefined)
  );

  const properties = await getProperties(query).catch(() => []);

  return (
    <div className="py-16">
      <Container>
        <SectionHeading eyebrow="Stays" title="Villas & farmhouses, handpicked" />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <PropertyFilters
              type={query.type}
              city={query.city}
              minGuests={query.minGuests}
              checkIn={query.checkIn}
              checkOut={query.checkOut}
            />
          </div>

          <div className="lg:col-span-3">
            {properties.length === 0 ? (
              <p className="py-16 text-center text-ink-soft">No stays match these filters yet.</p>
            ) : (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {properties.map((property) => (
                  <PropertyCard key={property._id} property={property} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
