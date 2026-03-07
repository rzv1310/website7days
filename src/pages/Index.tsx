import Hero from "@/components/ui/animated-shader-hero";
import StickyNav from "@/components/StickyNav";
import ForYou from "@/components/sections/ForYou";
import Benefits from "@/components/sections/Benefits";
import TeamShowcase from "@/components/sections/TeamShowcase";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import VideoFeed from "@/components/sections/VideoFeed";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";


const Index = () => {
  const whatsAppUrl = "https://wa.me/40742702982";

  return (
    <div>
      <StickyNav />

      <Hero
        trustBadge={{ text: "Ajutăm la dezvoltarea a peste 50 de afaceri locale" }}
        headline={{
          line1: "Creare Site Web Profesional",
          line2: "în doar 7 Zile",
        }}
        subtitle="Construim site-uri de prezentare elegante pentru businessuri locale. Rapid și optimizat pentru conversii."
        buttons={{
          primary: { text: "Scrie-ne în WhatsApp", href: whatsAppUrl },
        }}
      />

      <ForYou />

      <div id="process">
        <Process />
      </div>

      <div id="echipa">
        <TeamShowcase />
      </div>

      <div id="benefits">
        <Benefits />
      </div>

      <div id="recenzii">
        <Testimonials />
      </div>

      <div id="preturi">
        <Pricing />
      </div>

      <VideoFeed />

      <div id="faq">
        <FAQ />
      </div>
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
