import { lazy, Suspense } from "react";
import Hero from "@/components/ui/animated-shader-hero";
import StickyNav from "@/components/StickyNav";

const ForYou = lazy(() => import("@/components/sections/ForYou"));
const Benefits = lazy(() => import("@/components/sections/Benefits"));
const TeamShowcase = lazy(() => import("@/components/sections/TeamShowcase"));
const Process = lazy(() => import("@/components/sections/Process"));
const Testimonials = lazy(() => import("@/components/sections/Testimonials"));
const Pricing = lazy(() => import("@/components/sections/Pricing"));
const VideoFeed = lazy(() => import("@/components/sections/VideoFeed"));
const FAQ = lazy(() => import("@/components/sections/FAQ"));
const CTA = lazy(() => import("@/components/sections/CTA"));
const Footer = lazy(() => import("@/components/sections/Footer"));


const Index = () => {
  const whatsAppUrl = "https://wa.me/40742702982";

  return (
    <div>
      <StickyNav />

      <Hero
        trustBadge={{ text: "Ajutăm la dezvoltarea a peste 50 de afaceri locale" }}
        headline={{
          line1: <>Creare Site Web<span className="md:hidden"> Profesional</span></>,
          line2: "în numai 7 zile",
        }}
        subtitle={<>Construim site-uri de prezentare elegante pentru businessuri locale.<br className="hidden md:block" />Rapid și optimizat pentru conversii.</>}
        buttons={{
          primary: { text: "Scrie-ne în WhatsApp", href: whatsAppUrl },
        }}
      />

      <Suspense fallback={null}>
        <ForYou />
        <div id="process">
          <Process />
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

        <div id="echipa">
          <TeamShowcase />
        </div>

        <div id="benefits">
          <Benefits />
        </div>
        <CTA />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
