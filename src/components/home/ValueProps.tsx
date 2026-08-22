import { Sparkles, HeartHandshake, UserCheck, BookHeart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const VALUES = [
  {
    icon: Sparkles,
    title: "Handpicked stays",
    description: "Every villa is personally vetted before it joins our portfolio.",
  },
  {
    icon: HeartHandshake,
    title: "Attentive service",
    description: "From enquiry to check-out, our team handles every detail.",
  },
  {
    icon: UserCheck,
    title: "Trained on-ground staff",
    description: "Caretakers and chefs trained for warm, attentive hospitality.",
  },
  {
    icon: BookHeart,
    title: "Built for memories",
    description: "Spaces designed for the moments worth remembering.",
  },
];

export function ValueProps() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading title="Hospitality, considered" align="center" />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <Icon size={28} className="mx-auto text-forest" />
              <h3 className="mt-5 font-display text-lg text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
