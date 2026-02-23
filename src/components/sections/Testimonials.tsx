import { Star, Quote } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const testimonials = [
  {
    name: "Andrei M.",
    business: "Auto Service Premium",
    text: "Am primit un site profesional în doar 5 zile. Clienții mei mă găsesc acum pe Google și am crescut cu 40% programările online.",
    stars: 5,
  },
  {
    name: "Elena D.",
    business: "Studio Pilates Flow",
    text: "Comunicare excelentă, design modern și un site care chiar vinde. Am recuperat investiția în prima lună!",
    stars: 5,
  },
  {
    name: "Radu P.",
    business: "Cabinet Stomatologic",
    text: "Rapid, profesionist și atent la detalii. Site-ul arată exact cum mi-am dorit. Recomand cu încredere.",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-dark-alt py-20 md:py-28">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold font-body text-sm uppercase tracking-[0.2em] font-medium">Testimoniale</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-warm-light mt-4">
              Ce spun <span className="text-gold-bright">clienții</span> noștri
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <ScrollReveal key={t.name} delay={index * 0.12}>
              <div className="p-6 md:p-8 rounded-2xl border border-warm-gold/10 bg-warm-dark/50 backdrop-blur-sm hover:border-warm-gold/25 transition-all duration-500 h-full flex flex-col">
                <Quote className="w-8 h-8 text-gold/30 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warm-gold text-warm-gold" />
                  ))}
                </div>
                
                <p className="font-body text-warm-light-text/80 leading-relaxed flex-1 mb-6 italic">
                  "{t.text}"
                </p>
                
                <div>
                  <p className="font-display font-semibold text-warm-light">{t.name}</p>
                  <p className="font-body text-sm text-gold/70">{t.business}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
