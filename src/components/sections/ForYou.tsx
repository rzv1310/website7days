import { Check, X } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import { motion } from "framer-motion";

const ForYou = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const forYouItems = [
    "Ai nevoie de un site de prezentare, funcțional, estetic și publicat rapid, fără să te pierzi în termeni tehnici sau luni de așteptare.",
    "Ai o afacere locală care nu vinde produse fizice (de ex.: cabinete medicale, avocați, contabili, psihologi, consultanți, designeri, profesori, instalatori, electricieni, artiști, saloane beauty, fitness etc.)",
    "Ai o firmă nouă și vrei să intri în piață cu un impact vizual puternic.",
    "Ai deja un site, dar care nu-ți aduce clienți (îl refacem complet în doar o zi și îl optimizăm ca să-ți aducă mai multe apeluri).",
  ];

  const notForYouItems = [
    "Nu vrei să crești.",
    "Ești mulțumit cu câți clienți ai acum.",
    "Nu ți-ai dat seama că dacă nu apari online în 2026 — pur și simplu nu exiști.",
  ];

  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* For You */}
          <ScrollReveal>
            <div className="h-full rounded-2xl border border-warm-gold/30 p-8 md:p-10 flex flex-col">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-warm-light-text mb-8">
                Acest serviciu este pentru tine, dacă:
              </h2>

              <ul className="space-y-5 mb-10 flex-grow">
                {forYouItems.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-gold-bright mt-0.5 shrink-0" />
                    <span className="font-body text-warm-light-text/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="font-display text-lg md:text-xl font-semibold text-gold-bright mb-6">
                Ești gata să fii online? Rezervă-ți săptămâna acum.
              </p>

              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-gold text-warm-dark font-body font-bold text-lg shadow-lg shadow-warm-gold/20 hover:opacity-90 transition-opacity"
              >
                Vreau site în 7 zile!
              </motion.button>

              <p className="font-body text-warm-light-text/50 text-sm text-center mt-4">
                ✓ Fără costuri ascunse. ✓ Include optimizare mobil.
              </p>
            </div>
          </ScrollReveal>

          {/* Not For You */}
          <ScrollReveal delay={0.15}>
            <div className="h-full rounded-2xl border border-warm-light-text/10 p-8 md:p-10 flex flex-col">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-warm-light-text mb-8">
                Această ofertă nu este pentru tine, dacă:
              </h2>

              <ul className="space-y-5 mb-10 flex-grow">
                {notForYouItems.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <X className="w-5 h-5 text-red-400/70 mt-0.5 shrink-0" />
                    <span className="font-body text-warm-light-text/60 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-warm-gold/30 text-warm-light-text font-body font-semibold text-lg hover:bg-warm-gold/10 transition-colors mt-auto"
              >
                Vreau să vorbim!
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ForYou;
