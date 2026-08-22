import { Metadata } from "next";
import { getExperiences } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Events",
  description: "Host weddings, retreats, and private celebrations at Stayuga's villas and farmhouses.",
};

export default async function EventsPage() {
  const experiences = await getExperiences({ type: "event" }).catch(() => []);

  return (
    <div className="py-16">
      <Container>
        <SectionHeading eyebrow="Events" title="Celebrations, hosted beautifully" />

        {experiences.length > 0 && (
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience) => (
              <ExperienceCard key={experience._id} experience={experience} />
            ))}
          </div>
        )}

        <div className="mx-auto mt-20 max-w-2xl rounded-2xl border border-line/70 bg-white p-8">
          <h2 className="font-display text-xl text-ink">Plan your event</h2>
          <p className="mt-2 text-sm text-ink-soft">
            Tell us the occasion and headcount, and we&apos;ll take it from there.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
