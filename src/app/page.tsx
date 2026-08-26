import Link from "next/link";
import Image from "next/image";
import { BedDouble, Bath, Waves, Trees } from "lucide-react";
import { STAY_SERVICES } from "@/lib/services";
import { formatPrice } from "@/lib/format";

const featuredStays = [
  {
    name: "The Oceanview Villa",
    location: "Goa",
    beds: 4,
    baths: 4,
    feature: "Pool",
    price: 120000,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    slug: "the-oceanview-villa",
  },
  {
    name: "Bagh Alibaug",
    location: "Alibaug",
    beds: 5,
    baths: 5,
    feature: "Pool",
    price: 140000,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop",
    slug: "bagh-alibaug",
  },
  {
    name: "Kaveri Estate",
    location: "Coorg",
    beds: 4,
    baths: 4,
    feature: "Plantation",
    price: 110000,
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
    slug: "kaveri-estate",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      {/* ---------------- 1 · HERO ---------------- */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink">
        <Image
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2000&auto=format&fit=crop"
          alt=""
          fill
          priority
          className="object-cover opacity-60 mix-blend-luminosity brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/65 to-ink/40" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 sm:px-12">
          <div className="max-w-2xl">
            <span className="eyebrow mb-8 text-gold">Private Farmhouses</span>

            <h1 className="font-display mb-8 text-5xl font-light leading-[1.04] tracking-tight text-cream sm:text-7xl lg:text-[88px]">
              Stay somewhere
              <br />
              unrepeatable
            </h1>

            <p className="mb-10 border-l border-gold/40 pl-5 text-sm font-light tracking-wide text-cream/80">
              Estates, dining, styling and events — one team, one number.
            </p>

            <Link
              href="/stay"
              className="inline-flex items-center gap-4 border border-gold/80 px-8 py-3.5 text-[11px] uppercase tracking-[0.3em] text-cream transition-all duration-300 hover:border-gold hover:bg-gold/10"
            >
              <span>View the collection</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- 2 · THE COLLECTION ---------------- */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-12 sm:py-28">
        <div className="mb-16 flex flex-col justify-between pb-2 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow mb-4 text-ink-soft">The Collection</span>
            <h2 className="font-display text-4xl font-light leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              Handpicked, never
              <br />
              listed twice
            </h2>
          </div>
          {/*
            Copy reads "View all" rather than a fixed count — the collection
            grows and a hardcoded number goes stale the moment it does.
          */}
          <Link
            href="/stay"
            className="link-inline mt-6 self-start border-b border-ink pb-0.5 text-[11px] uppercase tracking-[0.3em] text-ink transition-colors hover:border-gold hover:text-gold sm:mt-0 sm:self-end"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
          {featuredStays.map((stay) => (
            <Link
              key={stay.slug}
              href={`/stay/${stay.slug}`}
              className="group flex flex-col"
            >
              <div className="relative mb-6 aspect-square w-full overflow-hidden bg-sand">
                <Image
                  src={stay.image}
                  alt={stay.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-4 left-4 text-[10px] font-light uppercase tracking-[0.3em] text-cream">
                  {stay.location}
                </span>
              </div>

              <h3 className="font-display mb-3 text-2xl font-normal text-ink">{stay.name}</h3>

              <div className="mb-6 flex items-center gap-4 text-[13px] font-light text-ink-soft">
                <span className="flex items-center gap-1.5">
                  <BedDouble size={14} strokeWidth={1.6} aria-hidden="true" />
                  {stay.beds} bed
                </span>
                <span className="flex items-center gap-1.5">
                  <Bath size={14} strokeWidth={1.6} aria-hidden="true" />
                  {stay.baths} bath
                </span>
                <span className="flex items-center gap-1.5">
                  {stay.feature === "Plantation" ? (
                    <Trees size={14} strokeWidth={1.6} aria-hidden="true" />
                  ) : (
                    <Waves size={14} strokeWidth={1.6} aria-hidden="true" />
                  )}
                  {stay.feature}
                </span>
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
                <div className="font-display text-base text-ink">
                  {formatPrice(stay.price)}{" "}
                  <span className="font-sans text-[10px] uppercase tracking-widest text-ink-soft">
                    / night
                  </span>
                </div>
                <span
                  aria-hidden="true"
                  className="text-sm text-ink transition-transform group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------------- 3 · OCCASIONS ---------------- */}
      <section className="bg-ink py-24 text-cream sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <span className="eyebrow mb-6 text-gold">Occasions</span>
              <h2 className="font-display mb-8 text-4xl font-light leading-[1.08] sm:text-6xl lg:text-7xl">
                Take the whole
                <br />
                house
              </h2>
              <p className="mb-10 max-w-md text-sm font-light leading-relaxed text-cream/70">
                Weddings, offsites and birthdays — planned end to end.
              </p>
              <Link
                href="/events"
                className="inline-flex items-center gap-4 border border-gold/60 px-8 py-3.5 text-[11px] uppercase tracking-[0.3em] text-cream transition-all duration-300 hover:border-gold hover:bg-gold/10"
              >
                <span>Plan an event</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

              <div className="flex justify-center lg:col-span-6 lg:justify-end">
              <div className="relative aspect-square w-full max-w-[500px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1000&auto=format&fit=crop"
                  alt="A celebration laid out at a Stayuga farmhouse"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 4 · SERVICE ----------------
          On phones this ran six full-height cells deep and swallowed the
          whole viewport. It's now a compact two-up grid — icon, title, one
          line — and only opens out into the roomy three-column layout from
          `md` where there's width to spend. */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-12 sm:py-28">
        <div className="mb-10 text-center md:mb-16">
          <span className="eyebrow mb-4 text-ink-soft">Service</span>
          <h2 className="font-display text-3xl font-light text-ink sm:text-5xl lg:text-6xl">
            Arranged before you ask
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-3">
          {STAY_SERVICES.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="flex flex-col items-center justify-center bg-cream px-4 py-7 text-center transition-colors hover:bg-sand/50 md:min-h-[260px] md:px-10 md:py-14"
            >
              <Icon
                size={22}
                strokeWidth={1.4}
                className="mb-3 text-gold md:mb-5"
                aria-hidden="true"
              />
              <h3 className="font-display text-base font-normal text-ink md:text-2xl">{title}</h3>
              {/* The supporting line is noise at phone width — the title carries it. */}
              <p className="mt-2 hidden max-w-xs text-sm font-light leading-relaxed text-ink-soft md:block">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 5 · CTA ---------------- */}
      <section className="relative flex min-h-[340px] items-center overflow-hidden bg-ink">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-35 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-ink/70" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 sm:px-12 md:flex-row md:items-center">
          <h2 className="font-display max-w-xl text-3xl font-light leading-tight text-cream sm:text-5xl lg:text-6xl">
            Your dates are probably still open
          </h2>
          <Link
            href="/stay"
            className="shrink-0 bg-gold px-10 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] text-ink transition-colors hover:bg-gold-light"
          >
            Reserve
          </Link>
        </div>
      </section>
    </div>
  );
}