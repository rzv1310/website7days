import React, { useRef } from "react";
import { Check, ArrowRight, Star, Crown, Layers } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

interface PlanData {
  title: string;
  price: string;
  subtitle: string;
  description: string;
  features: string[];
  highlight?: string;
  note?: string;
}

const plans: PlanData[] = [
  {
    title: "SITE DE PREZENTARE",
    price: "499",
    subtitle: "PREȚ FIX",
    description: "Website profesional livrat în 7 zile. Plată unică, fără abonament lunar.",
    features: [
      "Design modern, personalizat",
      "Până la 5 pagini",
      "Optimizare SEO de bază",
      "Responsive pe toate dispozitivele",
      "Formular de contact funcțional",
      "Integrare Google Maps",
      "Certificat SSL gratuit",
      "1 lună suport gratuit",
    ],
  },
  {
    title: "SITE DE PREZENTARE PLATINUM",
    price: "1700",
    subtitle: "PREȚ FIX",
    description:
      "Ce primești aici NU e doar 'un site frumos'. Ce primești este top local SEO, tehnic impecabil, desenat de la zero pentru businessul tău și focusat pe apeluri și programări — pentru a converti vizitatorii în clienți.",
    highlight: "Totul din Pachetul Gold +",
    note: "* posibilitate plată în rate",
    features: [
      "Pagină Blog (cu 4 articole optimizate SEO)",
      "Pagini dedicate Servicii în website",
      "Creare și optimizare Google Business Profile",
      "Creare profil social media + covers",
      "Local Schema Mark-up + Organization + FAQ + AggregateReviews",
      "Optimizare SEO on-page (meta-titles, descriptions, headings)",
      "Optimizare Core Web Vitals (+80 viteză, accesibilitate)",
      "LLM.txt (descoperit de ChatGPT, Google AI Overviews)",
      "OpenGraph cards (share WhatsApp/Facebook/Twitter)",
      "Banner (pop-up) Cookies",
      "Widget pt persoane cu dizabilități",
      "Nume domeniu (1 an)",
      "Găzduire domeniu (1 an)",
      "Mentenanță tehnică (1 an)",
    ],
  },
  {
    title: "SITE + MAGAZIN",
    price: "899",
    subtitle: "PREȚ ORIENTATIV",
    description: "Soluție completă cu magazin online, plăți integrate și panou de administrare.",
    features: [
      "Tot ce include pachetul Standard",
      "Magazin online integrat",
      "Până la 50 produse",
      "Sistem de plăți online",
      "Panou de administrare",
      "Optimizare SEO avansată",
      "Integrare social media",
      "3 luni suport gratuit",
    ],
  },
];

const PricingCard: React.FC<{ plan: PlanData; variant: "gold" | "platinum" | "dark" }> = ({
  plan,
  variant,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const styles = {
    gold: {
      bg: "linear-gradient(135deg, hsl(36, 50%, 55%), hsl(40, 60%, 65%))",
      glow: "linear-gradient(135deg, hsla(40, 80%, 75%, 0.15), transparent)",
      iconBg: "hsla(40, 80%, 80%, 0.3)",
      titleColor: "hsla(0, 0%, 100%, 0.9)",
      priceColor: "white",
      currencyColor: "hsla(0, 0%, 100%, 0.7)",
      subtitleColor: "hsla(0, 0%, 100%, 0.6)",
      lineColor: "hsla(0, 0%, 100%, 0.2)",
      descColor: "hsla(0, 0%, 100%, 0.7)",
      pillBg: "hsla(0, 0%, 100%, 0.15)",
      pillColor: "white",
      ctaBg: "hsla(0, 0%, 100%, 0.95)",
      ctaColor: "hsl(25, 30%, 18%)",
    },
    platinum: {
      bg: "linear-gradient(135deg, hsl(36, 55%, 48%), hsl(30, 45%, 35%))",
      glow: "linear-gradient(135deg, hsla(40, 80%, 75%, 0.2), transparent)",
      iconBg: "hsla(40, 80%, 80%, 0.3)",
      titleColor: "hsla(0, 0%, 100%, 0.95)",
      priceColor: "white",
      currencyColor: "hsla(0, 0%, 100%, 0.7)",
      subtitleColor: "hsla(0, 0%, 100%, 0.6)",
      lineColor: "hsla(0, 0%, 100%, 0.2)",
      descColor: "hsla(0, 0%, 100%, 0.8)",
      pillBg: "hsla(0, 0%, 100%, 0.15)",
      pillColor: "white",
      ctaBg: "white",
      ctaColor: "hsl(25, 30%, 12%)",
    },
    dark: {
      bg: "linear-gradient(135deg, hsl(25, 30%, 18%), hsl(30, 20%, 12%))",
      glow: "linear-gradient(135deg, hsla(36, 50%, 62%, 0.15), transparent)",
      iconBg: "hsla(36, 50%, 62%, 0.3)",
      titleColor: "hsl(36, 50%, 62%)",
      priceColor: "hsl(36, 50%, 62%)",
      currencyColor: "hsla(36, 50%, 62%, 0.7)",
      subtitleColor: "hsla(36, 50%, 62%, 0.5)",
      lineColor: "hsla(36, 50%, 62%, 0.2)",
      descColor: "hsla(30, 30%, 88%, 0.6)",
      pillBg: "hsla(36, 50%, 62%, 0.12)",
      pillColor: "hsl(30, 30%, 88%)",
      ctaBg: "linear-gradient(135deg, hsl(36, 50%, 55%), hsl(40, 60%, 65%))",
      ctaColor: "hsl(25, 30%, 8%)",
    },
  };

  const s = styles[variant];
  const isPlatinum = variant === "platinum";
  const Icon = isPlatinum ? Crown : variant === "gold" ? Star : Layers;

  return (
    <div style={{ perspective: "1000px" }} className={isPlatinum ? "md:-mt-4 md:mb-[-16px]" : ""}>
      {/* Popular badge for platinum */}
      {isPlatinum && (
        <div className="text-center mb-3">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.15em] font-body uppercase"
            style={{
              background: "linear-gradient(135deg, hsl(36, 50%, 55%), hsl(40, 60%, 65%))",
              color: "hsl(25, 30%, 8%)",
            }}
          >
            ⭐ Cel mai popular
          </span>
        </div>
      )}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-3xl overflow-hidden cursor-pointer"
        style={{
          background: s.bg,
          transformStyle: "preserve-3d",
          transition: "transform 0.15s ease-out",
          willChange: "transform",
          boxShadow: isPlatinum
            ? "0 25px 60px -12px hsla(36, 50%, 40%, 0.4)"
            : undefined,
        }}
      >
        {/* Glow */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: s.glow }}
        />

        {/* Top accent line for platinum */}
        {isPlatinum && (
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: "linear-gradient(90deg, hsl(40, 60%, 65%), hsl(36, 50%, 55%), hsl(40, 60%, 65%))",
            }}
          />
        )}

        <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: s.iconBg }}
            >
              <Icon className="w-4 h-4" style={{ color: s.priceColor }} />
            </div>
            <span
              className="text-xs font-bold tracking-[0.2em] font-body"
              style={{ color: s.titleColor }}
            >
              {plan.title}
            </span>
          </div>

          {/* Price */}
          <div>
            <div className="flex items-end gap-1 mb-1">
              <span
                className="font-display text-5xl md:text-6xl font-bold"
                style={{ color: s.priceColor }}
              >
                {plan.price}
              </span>
              <span
                className="text-2xl font-body mb-2"
                style={{ color: s.currencyColor }}
              >
                €
              </span>
            </div>
            <p
              className="text-xs font-bold tracking-[0.15em] font-body mb-1"
              style={{ color: s.subtitleColor }}
            >
              {plan.subtitle}
            </p>
            {plan.note && (
              <p className="text-xs font-body mb-4 italic" style={{ color: s.subtitleColor }}>
                {plan.note}
              </p>
            )}
          </div>

          <div className="w-full h-px mb-6" style={{ background: s.lineColor }} />

          {/* Highlight badge */}
          {plan.highlight && (
            <p
              className="font-body text-xs font-bold uppercase tracking-wider mb-3 px-3 py-1.5 rounded-full inline-block self-start"
              style={{
                background: "hsla(0, 0%, 100%, 0.2)",
                color: "white",
              }}
            >
              {plan.highlight}
            </p>
          )}

          {/* Description */}
          <p
            className="font-body text-sm mb-6 leading-relaxed"
            style={{ color: s.descColor }}
          >
            {plan.description}
          </p>

          {/* Features as pills */}
          <div className="flex flex-wrap gap-2 mb-8 flex-grow">
            {plan.features.map((f, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-body font-medium"
                style={{
                  background: s.pillBg,
                  color: s.pillColor,
                  backdropFilter: "blur(10px)",
                }}
              >
                <Check className="w-3 h-3 flex-shrink-0" />
                {f}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={scrollToContact}
            className="w-full py-4 rounded-xl font-body font-bold text-base flex items-center justify-center gap-2 group transition-all duration-300 hover:scale-[1.02]"
            style={{ background: s.ctaBg, color: s.ctaColor }}
          >
            Vreau acest pachet
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold font-body text-sm uppercase tracking-[0.2em] font-medium">
              Oferta
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-warm-light mt-4">
              Investiție clară,{" "}
              <span className="text-gold">fără surprize</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
            <PricingCard plan={plans[0]} variant="gold" />
            <PricingCard plan={plans[1]} variant="platinum" />
            <PricingCard plan={plans[2]} variant="dark" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Pricing;
