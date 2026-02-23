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
        trustBadge={{ text: "Ajutăm la dezvoltarea a peste 50 de afaceri locale" }}
        headline={{
          line1: "Creare Site Web Profesional",
          line2: "în doar 7 Zile",
        }}
        subtitle="Creez site-uri de prezentare moderne pentru afaceri locale nou-înființate. Rapid, elegant și optimizat pentru conversii."
        buttons={{
          primary: { text: "Scrie-ne în WhatsApp", onClick: scrollToContact },
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
