import Hero from "@/components/ui/animated-shader-hero";
import Benefits from "@/components/sections/Benefits";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-x-hidden">
      <Hero
        trustBadge={{ text: "Peste 50+ afaceri locale online" }}
        headline={{
          line1: "Website Profesional",
          line2: "în doar 7 Zile",
        }}
        subtitle="Creez site-uri de prezentare moderne pentru afaceri locale nou-înființate. Rapid, elegant și optimizat pentru conversii."
        buttons={{
          primary: { text: "Vreau site-ul meu →", onClick: scrollToContact },
          secondary: { text: "Vezi cum funcționează", onClick: () => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" }) },
        }}
      />

      <div id="benefits">
        <Benefits />
      </div>

      <SectionDivider from="hsl(25, 30%, 8%)" to="hsl(30, 20%, 14%)" />

      <div id="process">
        <Process />
      </div>

      <SectionDivider from="hsl(30, 20%, 14%)" to="hsl(25, 20%, 14%)" />

      <Testimonials />

      <SectionDivider from="hsl(25, 20%, 14%)" to="hsl(33, 50%, 96%)" />

      <Pricing />

      <SectionDivider from="hsl(33, 50%, 96%)" to="hsl(25, 30%, 8%)" />

      <FAQ />

      <SectionDivider from="hsl(25, 30%, 8%)" to="hsl(33, 50%, 96%)" />

      <CTA />

      <SectionDivider from="hsl(33, 50%, 96%)" to="hsl(25, 30%, 8%)" />

      <Footer />
    </div>
  );
};

export default Index;
