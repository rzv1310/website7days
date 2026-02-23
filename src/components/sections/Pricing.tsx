import React, { useRef } from "react";
import { Check, ArrowRight, Star, Layers } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const pricingData = {
  basic: {
    standard: {
      price: "499",
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
    premium: {
      price: "349",
      features: [
        "Design modern, personalizat",
        "Până la 3 pagini",
        "Optimizare SEO de bază",
        "Responsive pe toate dispozitivele",
        "Formular de contact funcțional",
        "Certificat SSL gratuit",
      ],
    },
  },
  ecommerce: {
    standard: {
      price: "899",
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
    premium: {
      price: "699",
      features: [
        "Tot ce include pachetul Standard",
        "Magazin online integrat",
        "Până la 20 produse",
        "Sistem de plăți online",
        "Panou de administrare",
        "Optimizare SEO avansată",
      ],
    },
  },
};

type PlanType = "basic" | "ecommerce";

interface PricingCardProps {
  type: PlanType;
}

const PricingCard: React.FC<PricingCardProps> = ({ type }) => {
  const isBasic = type === "basic";
  const displayData = pricingData[type].standard;
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

  const title = isBasic ? "SITE DE PREZENTARE" : "SITE + MAGAZIN";
  const subtitle = isBasic ? "PREȚ FIX" : "PREȚ ORIENTATIV";

  return (
    <div style={{ perspective: "1000px" }}>
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-3xl overflow-hidden cursor-pointer"
      style={{
        background: isBasic
          ? "linear-gradient(135deg, hsl(36, 50%, 55%), hsl(40, 60%, 65%))"
          : "linear-gradient(135deg, hsl(25, 30%, 18%), hsl(30, 20%, 12%))",
        transformStyle: "preserve-3d",
        transition: "transform 0.15s ease-out",
        willChange: "transform",
      }}
    >
      {/* Animated glow ring */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: isBasic
            ? "linear-gradient(135deg, hsla(40, 80%, 75%, 0.15), transparent)"
            : "linear-gradient(135deg, hsla(36, 50%, 62%, 0.15), transparent)",
        }}
      />

      <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background: isBasic
                ? "hsla(40, 80%, 80%, 0.3)"
                : "hsla(36, 50%, 62%, 0.3)",
            }}
          >
            {isBasic ? (
              <Star className="w-4 h-4 text-white" />
            ) : (
              <Layers className="w-4 h-4 text-warm-gold" />
            )}
          </div>
          <span
            className="text-xs font-bold tracking-[0.2em] font-body"
            style={{
              color: isBasic ? "hsla(0, 0%, 100%, 0.9)" : "hsl(36, 50%, 62%)",
            }}
          >
            {title}
          </span>
        </div>

        {/* Price */}
        <div
          className="transition-all duration-300"
        >
          <div className="flex items-end gap-1 mb-1">
            <span
              className="font-display text-6xl md:text-7xl font-bold"
              style={{ color: isBasic ? "white" : "hsl(36, 50%, 62%)" }}
            >
              {displayData.price}
            </span>
            <span
              className="text-2xl font-body mb-2"
              style={{
                color: isBasic
                  ? "hsla(0, 0%, 100%, 0.7)"
                  : "hsla(36, 50%, 62%, 0.7)",
              }}
            >
              €
            </span>
          </div>
          <p
            className="text-xs font-bold tracking-[0.15em] font-body mb-6"
            style={{
              color: isBasic
                ? "hsla(0, 0%, 100%, 0.6)"
                : "hsla(36, 50%, 62%, 0.5)",
            }}
          >
            {subtitle}
          </p>
        </div>

        <div
          className="w-full h-px mb-6"
          style={{
            background: isBasic
              ? "hsla(0, 0%, 100%, 0.2)"
              : "hsla(36, 50%, 62%, 0.2)",
          }}
        />

        {/* Description */}
        <p
          className="font-body text-sm mb-6 leading-relaxed"
          style={{
            color: isBasic
              ? "hsla(0, 0%, 100%, 0.7)"
              : "hsla(30, 30%, 88%, 0.6)",
          }}
        >
          {isBasic
            ? "Website profesional livrat în 7 zile. Plată unică, fără abonament lunar."
            : "Soluție completă cu magazin online, plăți integrate și panou de administrare."}
        </p>

        {/* Features as pills */}
        <div
          className="flex flex-wrap gap-2 mb-8 flex-grow"
        >
          {displayData.features.map((f, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-body font-medium"
              style={{
                background: isBasic
                  ? "hsla(0, 0%, 100%, 0.15)"
                  : "hsla(36, 50%, 62%, 0.12)",
                color: isBasic ? "white" : "hsl(30, 30%, 88%)",
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
          style={{
            background: isBasic
              ? "hsla(0, 0%, 100%, 0.95)"
              : "linear-gradient(135deg, hsl(36, 50%, 55%), hsl(40, 60%, 65%))",
            color: isBasic ? "hsl(25, 30%, 18%)" : "hsl(25, 30%, 8%)",
          }}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard type="basic" />
            <PricingCard type="ecommerce" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};


export default Pricing;
