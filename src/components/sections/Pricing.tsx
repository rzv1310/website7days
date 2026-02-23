import React from "react";
import { Check, ArrowRight, Star, Crown, Layers } from "lucide-react";
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
}

const plans: PlanData[] = [
  {
    titleLine1: "SITE DE PREZENTARE",
    titleLine2: "GOLD",
    price: "970",
    preDescription: "Ce Primești:",
    description: "Un site web complet funcțional, cu design premium, cu până la 8 pagini personalizate, care arată perfect pe orice ecran și care e gata să-ți producă bani până la sfârșitul zilei.",
    note: "Opțional: Domeniu + Găzduire + suport + security updates = 100 lei/lună",
    features: [
      "Pagina 'Acasă'",
      "Pagina 'Servicii'",
      "Pagina 'Despre noi'",
      "Pagina 'Tarife'",
      "Pagina 'Contact'",
      "Pagini Legale (Termeni, Cookies, GDPR)",
      "Apel telefonic (30 min) pregătire lansare",
      "Logo design",
      "Brand colors & brand fonts",
      "Hero Images",
      "Research + Content writing",
      "Buton WhatsApp",
      "Map embed în footer",
      "Optimizare Mobil",
      "Configurare e-mail personalizat",
      "Formular programare online",
      "Robots.txt + Sitemap.xml",
      "Certificat SSL gratuit",
      "Structură linkuri interne",
      "Favicon",
      "3 revizii incluse",
      "Suport tehnic 30 zile",
    ],
  },
  {
    titleLine1: "SITE DE PREZENTARE",
    titleLine2: "PLATINUM",
    price: "1700",
    
    description: "Website profesional livrat în 7 zile. Plată unică, fără abonament lunar.",
    highlight: "Totul din Pachetul Gold +",
    note: "Ce primești aici NU e doar 'un site frumos'.\n\nȘi NU e din categoria 'ai un vecin care știe un băiat care face site-uri'!\n\nCe primești aici este top local SEO, tehnic impecabil, desenat de la zero pentru businessul tău și focusat pe apeluri și programări — pentru a converti vizitatorii în clienți.",
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
    titleLine1: "WEBSITE +",
    titleLine2: "MAGAZIN ONLINE",
    price: "Vreau Oferta",
    
    description: "Soluție completă cu magazin online, plăți integrate și panou de administrare.",
    features: [
      "__highlight__Totul din PLATINUM",
      "Magazin online integrat",
      "Pagini produse",
      "Sistem de plăți online",
      "Panou de administrare",
      "Optimizare SEO avansată",
      "3 luni suport gratuit",
    ],
  },
];

const PricingCard: React.FC<{ plan: PlanData; variant: "gold" | "platinum" | "dark" }> = ({
  plan,
  variant,
}) => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

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
  const Icon = isPlatinum ? Crown : variant === "gold" ? Star : Layers;

  return (
    <div>
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
        className="relative rounded-3xl overflow-hidden"
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
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: s.iconBg }}
            >
              <Icon className="w-4 h-4" style={{ color: s.priceColor }} />
            </div>
            <div
              className="text-xs font-bold tracking-[0.2em] font-body"
              style={{ color: s.titleColor }}
            >
              <div>{plan.titleLine1}</div>
              <div>{plan.titleLine2}</div>
            </div>
          </div>

          {/* Price */}
          <div>
            <div className="flex items-end gap-1 mb-1">
              <span
                className={`font-display font-bold ${/^\d+$/.test(plan.price) ? "text-5xl md:text-6xl" : "text-3xl md:text-4xl"}`}
                style={{ color: s.priceColor }}
              >
                {plan.price}
              </span>
              {/^\d+$/.test(plan.price) && (
                <span
                  className="text-2xl font-body mb-2"
                  style={{ color: s.currencyColor }}
                >
                  €
                </span>
              )}
            </div>
            {/^\d+$/.test(plan.price) && (
              <p className="text-xs font-body italic mt-1" style={{ color: s.subtitleColor }}>
                * posibilitate plată în rate
              </p>
            )}
          </div>

          <div className="w-full h-px mb-6" style={{ background: s.lineColor }} />

          {/* Pre-description label */}
          {plan.preDescription && (
            <p
              className="font-body text-xs font-bold uppercase tracking-wider mb-2"
              style={{ color: s.priceColor }}
            >
              {plan.preDescription}
            </p>
          )}

          {/* Description */}
          <p
            className="font-body text-sm mb-4 leading-relaxed"
            style={{ color: s.descColor }}
          >
            {plan.description}
          </p>

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
            {plan.features.map((f, i) => {
              const isHighlight = f.startsWith("__highlight__");
              const text = isHighlight ? f.replace("__highlight__", "") : f;
              return isHighlight ? (
                <p
                  key={i}
                  className="text-xs font-body font-bold uppercase tracking-wider"
                  style={{ color: s.priceColor }}
                >
                  {text}
                </p>
              ) : (
                <div
                  key={i}
                  className="flex items-start gap-2 text-xs font-body"
                  style={{ color: s.pillColor }}
                >
                  <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: s.priceColor }} />
                  {text}
                </div>
              );
            })}
          </div>

          {plan.note && (
            <p className="text-xs font-body mb-3 italic text-center whitespace-pre-line" style={{ color: "white" }}>
              {plan.note}
            </p>
          )}

          {/* CTA */}
          <button
            onClick={scrollToContact}
            className="relative w-full py-4 rounded-xl font-body font-bold text-base flex items-center justify-center gap-2 group transition-all duration-300 hover:scale-[1.02] overflow-hidden"
            style={{
              background: "transparent",
              border: "1px solid hsl(36, 50%, 62%)",
              color: "hsl(36, 50%, 62%)",
            }}
          >
            <span className="cta-glow-dot" />
            Vreau să vorbim
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
        <div className="text-center mb-24">
          <span className="text-gold font-body text-sm uppercase tracking-[0.2em] font-medium">
            Oferta
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-warm-light mt-4">
            Investiție clară,{" "}
            <span className="text-gold">fără surprize</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          <PricingCard plan={plans[0]} variant="gold" />
          <PricingCard plan={plans[1]} variant="platinum" />
          <PricingCard plan={plans[2]} variant="dark" />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
