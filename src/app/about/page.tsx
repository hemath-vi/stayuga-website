import { Metadata } from "next";
import Image from "next/image";
import { getContent, emptyContent } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { ValueProps } from "@/components/home/ValueProps";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "About",
  description: "The story and philosophy behind Stayuga's curated villas and farmhouses.",
};

export default async function AboutPage() {
  const { blocks, testimonials } = await getContent().catch(emptyContent);
  const mission = blocks["about-mission"] ?? {
    heading: "Our mission",
    body: "Stayuga curates a small, handpicked portfolio of luxury villas and farmhouses.",
  };

  return (
    <div className="py-16">
      <Container className="max-w-3xl text-center">
        <h1 className="font-display text-3xl text-ink sm:text-4xl">{mission.heading}</h1>
        <p className="mt-5 text-base leading-relaxed text-ink-soft">{mission.body}</p>
      </Container>

      <div className="relative mt-14 aspect-[21/9] w-full overflow-hidden sm:aspect-[2.4/1]">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop"
          alt="A Stayuga villa interior"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-8">
        <ValueProps />
      </div>

      <Testimonials testimonials={testimonials} />
      <CtaSection />
    </div>
  );
}
