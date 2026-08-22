import { getContent, getExperiences, getProperties, emptyContent } from "@/lib/data";
import { Hero } from "@/components/home/Hero";
import { ValueProps } from "@/components/home/ValueProps";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { ExperiencesTeaser } from "@/components/home/ExperiencesTeaser";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaSection } from "@/components/home/CtaSection";

export default async function HomePage() {
  const [properties, experiences, content] = await Promise.all([
    getProperties().catch(() => []),
    getExperiences().catch(() => []),
    getContent().catch(emptyContent),
  ]);

  const hero = content.blocks["homepage-hero"] ?? {
    heading: "Curated stays where nature, comfort, and memories meet",
    subheading: "Handpicked villas and farmhouses for the moments worth slowing down for.",
  };

  const featuredProperties = properties.filter((p) => p.featured).slice(0, 3);
  const featuredExperiences = experiences.filter((e) => e.featured).slice(0, 3);

  return (
    <>
      <Hero heading={hero.heading} subheading={hero.subheading} />
      <ValueProps />
      <FeaturedProperties properties={featuredProperties} />
      <ExperiencesTeaser experiences={featuredExperiences} />
      <Testimonials testimonials={content.testimonials} />
      <CtaSection />
    </>
  );
}
