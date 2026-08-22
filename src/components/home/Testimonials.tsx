import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Testimonial } from "@/lib/types";

const DEFAULTS: Omit<Testimonial, "_id" | "order">[] = [
  {
    quote: "Every detail felt considered, from the welcome hamper to the sunset views. It felt like a home we'd always had.",
    author: "Ritika & Arjun",
    context: "Ananta Villa, Kasauli",
  },
  {
    quote: "We hosted our anniversary dinner at Blue Lagoon and the team handled everything effortlessly. Genuinely the most relaxed we've been planning an event.",
    author: "Meera S.",
    context: "Blue Lagoon Farmhouse",
  },
  {
    quote: "The orchard breakfast alone was worth the trip. Beautifully kept property and a caretaker who anticipated everything we needed.",
    author: "Kunal D.",
    context: "Meadow House Farmstay",
  },
];

export function Testimonials({ testimonials }: { testimonials?: Testimonial[] }) {
  const items = testimonials && testimonials.length > 0 ? testimonials : DEFAULTS;

  return (
    <section className="bg-forest py-24">
      <Container>
        <SectionHeading title="What our guests remember" align="center" light />
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((t, i) => (
            <figure key={"_id" in t ? (t as Testimonial)._id : i} className="border-t border-cream/20 pt-8">
              <blockquote className="font-display text-lg leading-relaxed text-cream/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-sm font-medium text-gold-light">{t.author}</p>
                <p className="text-xs text-cream/50">{t.context}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
