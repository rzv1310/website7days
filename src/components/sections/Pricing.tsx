import React, { useState } from "react";
import { Check, ArrowRight, Star, Crown, Layers, ChevronDown } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

interface PlanData {
  titleLine1: string;
  titleLine2: string;
  price: string;
  preDescription?: string;
  description: string;
  features: string[];
  highlight?: string;
  note?: string;
  ctaText?: string;
  visibleCount?: number;
}

const plans: PlanData[] = [
  {
    titleLine1: "SITE DE PREZENTARE",
    titleLine2: "PLATINUM",
    price: "970",
    ctaText: "Vreau Site în 7 zile",
    preDescription: "Ce Primești:",
    description: "Un site web profesional, livrat in 7 zile, care arată perfect pe orice ecran și gata să-ți producă bani în fiecare zi.",
    note: "Opțional: Domeniu + Găzduire + suport + security updates = 100 lei/lună\n\nCe primești aici NU e doar 'un site frumos'.\n\nCe primești aici este top local SEO, tehnic impecabil, desenat de la zero pentru businessul tău și focusat pe apeluri și programări - pentru a converti vizitatorii în clienți.",
    features: [
      "Pagini: 'Acasă', 'Servicii', 'Despre noi', 'Tarife', 'Contact'",
      "Pagini Legale (Termeni, Cookies, GDPR)",
      "Pagini dedicate Servicii",
      "Pagină Blog (cu 4 articole optimizate SEO)",
      "Optimizare Mobil",
      "Buton WhatsApp",
      "Logo design, Favicon",
      "Research competiție locală",
      "Harta locației in footer",
      "Configurare e-mail personalizat",
      "Formular programare online",
      "Robots.txt, Sitemap.xml",
      "LLMs.txt (ChatGPT, Google AI Overviews)",
      "Certificat SSL gratuit",
      "Structură linkuri interne",
      "Local Schema Mark-up + Organization + FAQ + AggregateReviews",
      "Optimizare SEO on-page (meta-titluri, descrieri)",
      "Optimizare Core Web Vitals (viteză, accesibilitate)",
      "OpenGraph cards (share WhatsApp/Fb/Twitter)",
      "Banner (pop-up) Cookies",
      "Widget pt persoane cu dizabilități",
      "3 revizii incluse",
      "Suport tehnic 30 zile",
    ],
    visibleCount: 6,
  },
  {
    titleLine1: "WEBSITE +",
    titleLine2: "MAGAZIN ONLINE",
    price: "Cere Oferta",
    ctaText: "Hai să vorbim",
    
    preDescription: "Ce Primești:",
    description: "Soluție completă cu magazin online, plăți integrate și panou de administrare.",
    features: [
      "__highlight__Totul din PLATINUM",
      "Magazin online integrat",
      "Sistem de plăți online",
      "Multiple metode de plată (Card, Transfer bancar, Apple Pay / Google Pay)",
      'Filtre inteligente (Faceted Search): Preț, Brand, Rating, Specificații',
      "Search avansat (cu autocomplete)",
      "Pagini de produs optimizate pentru conversie",
      "Checkout simplificat (1-2 pași)",
      "Recenzii și rating mediu",
      'Cross-sell & Upsell: „Produse similare", „Clienții au cumpărat și…", Bundle-uri',
      "Sistem de reducere & cupoane: Coduri promo, Reduceri automate, Countdown timer (scarcity)",
      "Panou de administrare",
      "Optimizare SEO avansată (Schema.org Product, Offer, Review, Sitemap XML, Robots.txt corect, Meta optimizate)",
      "Securitate & încredere (Certificat SSL, Politici clare retur, GDPR, Badge-uri de încredere)",
      "Abandon cart recovery",
      "Live chat",
      "Remarketing integrat (Meta Pixel, Google Ads Tag)",
      "3 luni suport gratuit",
    ],
    visibleCount: 5,
  },
];

const PricingCard: React.FC<{ plan: PlanData; variant: "gold" | "platinum" | "dark" }> = ({
  plan,
  variant,
}) => {
  const [expanded, setExpanded] = useState(false);

  const styles = {
    gold: {
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
    platinum: {
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
  const isGold = variant === "gold";
  const Icon = isPlatinum ? Crown : variant === "gold" ? Star : Layers;

  return (
    <div className="h-full flex flex-col">
      {/* Badge for gold - positioned above without affecting card alignment */}
      {isGold && (
        <div className="text-center mb-3 md:-mt-10">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.15em] font-body uppercase"
            style={{
              background: "linear-gradient(135deg, hsl(36, 50%, 55%), hsl(40, 60%, 65%))",
              color: "hsl(25, 30%, 8%)",
            }}
          >
            🎉 Preț Redus până de Paște
          </span>
        </div>
      )}
      {/* Popular badge for platinum - positioned above without affecting card alignment */}
      {isPlatinum && (
        <div className="text-center mb-3 md:-mt-10">
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
        className="relative rounded-3xl overflow-hidden flex-grow"
        style={{
          background: s.bg,
          boxShadow: isPlatinum
            ? "0 25px 60px -12px hsla(36, 50%, 40%, 0.4)"
            : undefined,
        }}
      >

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
          {/* Header - fixed height on desktop */}
          <div className="flex items-center gap-2 mb-6 md:min-h-[56px]">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: s.iconBg }}
            >
              <Icon className="w-4 h-4" style={{ color: s.priceColor }} />
            </div>
            <div
              className="text-[0.9375rem] md:text-xs font-bold tracking-[0.2em] font-body"
              style={{ color: s.titleColor }}
            >
              <div>{plan.titleLine1}</div>
              <div>{plan.titleLine2}</div>
            </div>
          </div>

          {/* Price - fixed height on desktop, content aligned to bottom */}
          <div className="md:min-h-[110px] md:flex md:flex-col md:justify-end">
            <div className="flex items-baseline gap-1 mb-1">
              {variant === "gold" && (
                <>
                  <span
                    className="font-display font-bold text-[46px] md:text-[58px] relative inline-block"
                    style={{ 
                      color: s.priceColor,
                    }}
                  >
                    1700
                    <span 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top right, transparent calc(50% - 1px), white calc(50% - 1px), white calc(50% + 1px), transparent calc(50% + 1px))'
                      }}
                    />
                    <span 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to bottom right, transparent calc(50% - 1px), white calc(50% - 1px), white calc(50% + 1px), transparent calc(50% + 1px))'
                      }}
                    />
                  </span>
                  <span
                    className="text-2xl font-body mr-2"
                    style={{ color: s.currencyColor }}
                  >
                    €
                  </span>
                </>
              )}
              <span
                className={`font-display font-bold ${/^\d+$/.test(plan.price) ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl"}`}
                style={{ color: s.priceColor }}
              >
                {plan.price}
              </span>
              {/^\d+$/.test(plan.price) && (
                <span
                  className="text-2xl font-body"
                  style={{ color: s.currencyColor }}
                >
                  €
                </span>
              )}
            </div>
            <p className="text-xs font-body italic mt-1" style={{ color: s.subtitleColor }}>
              * posibilitate plată în rate
            </p>
          </div>

          <div className="w-full h-px mb-6" style={{ background: s.lineColor }} />

          {/* Pre-description label - fixed height on desktop */}
          <div className="md:min-h-[28px] mb-2">
            {plan.preDescription && (
              <p
                className="font-body text-[0.9375rem] md:text-xs font-bold uppercase tracking-wider"
                style={{ color: s.priceColor }}
              >
                {plan.preDescription}
              </p>
            )}
          </div>

          {/* Description - fixed height on desktop */}
          <div className="md:min-h-[72px] mb-4">
            <p
              className="font-body text-[1.0625rem] md:text-sm leading-relaxed"
              style={{ color: s.descColor }}
            >
              {plan.description}
            </p>
          </div>

          {/* Highlight */}
          {plan.highlight && (
            <p
              className="font-body text-xs font-bold uppercase tracking-wider mb-4"
              style={{ color: s.priceColor }}
            >
              {plan.highlight}
            </p>
          )}

          <div className="flex flex-col gap-2 mb-8 flex-grow">
            {(() => {
              const hasAccordion = plan.visibleCount !== undefined;
              const visibleFeatures = hasAccordion ? plan.features.slice(0, plan.visibleCount) : plan.features;
              const hiddenFeatures = hasAccordion ? plan.features.slice(plan.visibleCount) : [];

              const renderFeature = (f: string, i: number) => {
                const isHighlight = f.startsWith("__highlight__");
                const text = isHighlight ? f.replace("__highlight__", "") : f;
                return isHighlight ? (
                  <p
                    key={i}
                    className={`font-body font-bold uppercase tracking-wider ${variant === "platinum" ? "text-[0.875rem]" : "text-xs"}`}
                    style={{ color: s.priceColor }}
                  >
                    {text}
                  </p>
                ) : (
                  <div
                    key={i}
                    className="flex items-start gap-2 font-body text-[0.875rem]"
                    style={{ color: s.pillColor }}
                  >
                    <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: s.priceColor }} />
                    {text}
                  </div>
                );
              };

              return (
                <>
                  {visibleFeatures.map(renderFeature)}
                  {hasAccordion && hiddenFeatures.length > 0 && (
                    <>
                      <div
                        className="overflow-hidden transition-all duration-300 flex flex-col gap-2"
                        style={{
                          maxHeight: expanded ? `${hiddenFeatures.length * 60}px` : "0px",
                          opacity: expanded ? 1 : 0,
                        }}
                      >
                        {hiddenFeatures.map((f, i) => renderFeature(f, visibleFeatures.length + i))}
                      </div>
                      <button
                        onClick={() => setExpanded(!expanded)}
                        className="flex items-center gap-1.5 font-body text-[0.8125rem] font-medium mt-1 transition-colors hover:opacity-80"
                        style={{ color: s.priceColor }}
                      >
                        {expanded ? "Ascunde" : "Vezi mai mult"}
                        <ChevronDown
                          className="w-4 h-4 transition-transform duration-300"
                          style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
                        />
                      </button>
                    </>
                  )}
                </>
              );
            })()}
          </div>

          {plan.note && (
            <div className="text-center mb-3">
              <p className="font-body whitespace-pre-line" style={{ color: "white", fontSize: "16px" }}>
                {plan.note.split('\n\n')[0]}
              </p>
              <p className="font-body text-[1.0625rem] md:text-sm whitespace-pre-line mt-4 mb-[10px] md:mb-0 leading-relaxed" style={{ color: s.descColor }}>
                {plan.note.split('\n\n').slice(1).join('\n\n')}
              </p>
            </div>
          )}

          {/* CTA */}
          <a
            href="https://wa.me/40742702982"
            target="_blank"
            rel="noopener noreferrer"
            title="Comandă pachet pe WhatsApp"
            className="relative w-full py-4 rounded-xl font-body font-bold text-base flex items-center justify-center gap-2 group transition-all duration-300 hover:scale-[1.02] overflow-hidden"
            style={{
              background: "transparent",
              border: "1px solid hsl(36, 50%, 62%)",
              color: "white",
            }}
          >
            <span className="cta-glow-dot" />
            {plan.ctaText || "Vreau să vorbim"}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-24">
          <span className="text-gold font-body text-sm uppercase tracking-[0.2em] font-medium">
            Oferta
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-warm-light mt-4">
            Investiție clară,{" "}
            <span className="text-gold">fără surprize</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto md:items-stretch">
          <div className="mb-[100px] md:mb-0"><PricingCard plan={plans[0]} variant="gold" /></div>
          <div><PricingCard plan={plans[1]} variant="dark" /></div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
