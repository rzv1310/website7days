import { Check, X } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HighlightText = ({ text, boldPart, boldDelay }: { text: string; boldPart: string; boldDelay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const parts = text.split(boldPart);
  if (parts.length < 2) return <span>{text}</span>;

  return (
    <span ref={ref}>
      {parts[0]}
      <span className="relative" style={{ display: "inline-block", paddingBottom: "2px" }}>
        {boldPart}
        <motion.span
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.5, delay: 0.5 + boldDelay, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "absolute", left: 0, bottom: 0, width: "100%", height: "1px", transformOrigin: "left", background: "linear-gradient(90deg, hsl(36, 50%, 62%), hsl(40, 60%, 70%), hsl(36, 50%, 62%))" }}
          className="block"
        />
      </span>
      {parts[1]}
    </span>
  );
};

const ForYou = () => {
  const boldPhrases = ["site de prezentare", "Ai o afacere locală", "Ai o firmă nouă", "Ai deja un site"];

  const forYouItems = [
    "Ai nevoie de un site de prezentare, funcțional, estetic și publicat rapid, fără să te pierzi în termeni tehnici sau luni de așteptare.",
    "Ai o afacere locală care nu vinde produse fizice (de ex.: cabinete medicale, avocați, contabili, psihologi, consultanți, designeri, profesori, instalatori, electricieni, artiști, saloane beauty, fitness etc.)",
    "Ai o firmă nouă și vrei să intri în piață cu un impact vizual puternic.",
    "Ai deja un site, dar care nu-ți aduce clienți (îl refacem complet și îl optimizăm ca să-ți aducă mai multe apeluri).",
    "Vrei un magazin online performant.",
  ];

  const notForYouItems = [
    "Nu vrei să crești.",
    "Ești mulțumit cu câți clienți ai acum.",
    "Nu ți-ai dat seama că dacă nu apari online în 2026 - pur și simplu nu exiști.",
  ];

  const getBoldInfo = (item: string): { boldPart: string; delayIndex: number } | null => {
    for (let i = 0; i < boldPhrases.length; i++) {
      if (item.includes(boldPhrases[i])) {
        return { boldPart: boldPhrases[i], delayIndex: i };
      }
    }
    return null;
  };

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
                {forYouItems.map((item, i) => {
                  const boldInfo = getBoldInfo(item);
                  return (
                    <li key={i} className="flex gap-3 items-start">
                      <Check className="w-5 h-5 text-gold-bright mt-0.5 shrink-0" />
                      <span className="font-body text-warm-light-text/80 leading-relaxed">
                        {boldInfo ? (
                          <HighlightText text={item} boldPart={boldInfo.boldPart} boldDelay={boldInfo.delayIndex * 1.5} />
                        ) : (
                          item
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <p className="font-display text-lg md:text-xl text-gold-bright mb-6">
                Ești gata să fii online? Fă-ți rezervarea acum.
              </p>

              <motion.a
                href="https://wa.me/40742702982"
                target="_blank"
                rel="noopener noreferrer"
                title="Contactează-ne pe WhatsApp"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-warm-gold/30 text-warm-light-text font-body font-semibold text-lg hover:bg-warm-gold/10 transition-colors"
              >
                Vreau site în 7 zile!
              </motion.a>

              <p className="font-body text-warm-light-text/50 text-sm text-center mt-4">
                ✓ Fără costuri ascunse.
              </p>
            </div>
          </ScrollReveal>

          {/* Not For You */}
          <ScrollReveal delay={0.15}>
            <div className="h-full rounded-2xl border border-warm-light-text/10 p-8 md:p-10 flex flex-col">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-warm-light-text mb-8">
                Această ofertă <span className="uppercase">nu</span> este pentru tine, dacă:
              </h2>

              <ul className="space-y-5 mb-10 flex-grow">
                {notForYouItems.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex gap-3 items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: [0, -8, 0] }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 1.5, ease: "easeOut" }}
                  >
                    <X className="w-5 h-5 text-red-400/70 mt-0.5 shrink-0" />
                    <span className="font-body text-warm-light-text leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="https://wa.me/40742702982"
                target="_blank"
                rel="noopener noreferrer"
                title="Contactează-ne pe WhatsApp"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-warm-gold/30 text-warm-light-text font-body font-semibold text-lg hover:bg-warm-gold/10 transition-colors mt-auto"
              >
                Vreau să vorbim!
              </motion.a>

              <p className="font-body text-warm-light-text/50 text-sm text-center mt-4">
                ✓ Și să-mi depășesc concurența
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ForYou;
