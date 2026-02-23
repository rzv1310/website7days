import { Check, ArrowRight } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import { motion } from "framer-motion";

const features = [
  "Design modern, personalizat",
  "Până la 5 pagini",
  "Optimizare SEO de bază",
  "Responsive pe toate dispozitivele",
  "Formular de contact funcțional",
  "Integrare Google Maps",
  "Certificat SSL gratuit",
  "1 lună suport gratuit",
];

const Pricing = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-light py-20 md:py-28">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold font-body text-sm uppercase tracking-[0.2em] font-medium">Oferta</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-warm-dark mt-4">
              Investiție clară, <span className="text-gold">fără surprize</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-lg mx-auto">
            <motion.div
              whileHover={{ y: -4 }}
              className="relative p-8 md:p-10 rounded-3xl border-2 border-warm-gold/30 bg-gradient-to-b from-warm-cream to-warm-beige shadow-2xl shadow-warm-gold/10 overflow-hidden"
            >
              {/* Shimmer effect */}
              <div className="absolute top-0 left-0 right-0 h-1 gradient-gold" />
              
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1.5 rounded-full gradient-gold text-warm-dark font-body text-xs font-bold uppercase tracking-wider mb-4">
                  Website în 7 Zile
                </span>
                <div className="flex items-end justify-center gap-2 mb-2">
                  <span className="font-display text-5xl md:text-6xl font-bold text-warm-dark">499</span>
                  <span className="font-body text-xl text-warm-dark/60 mb-2">€</span>
                </div>
                <p className="font-body text-warm-dark/50 text-sm">Plată unică • Fără abonament lunar</p>
              </div>

              <div className="space-y-4 mb-10">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-warm-dark" />
                    </div>
                    <span className="font-body text-warm-dark/80">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollToContact}
                className="w-full py-4 rounded-xl gradient-gold text-warm-dark font-body font-bold text-lg hover:opacity-90 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-warm-gold/20 flex items-center justify-center gap-2 group"
              >
                Vreau site-ul meu
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Pricing;
