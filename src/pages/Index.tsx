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
    <div>
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

      <div id="process">
        <Process />
      </div>

      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
