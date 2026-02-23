import { MessageSquare, Palette, Rocket } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discutăm",
    description: "Într-un call scurt de 30 min, înțeleg afacerea ta, publicul țintă și obiectivele. Stabilim structura site-ului.",
    day: "Ziua 1",
  },
  {
    icon: Palette,
    step: "02",
    title: "Creez & Design",
    description: "Construiesc website-ul cu un design modern, conținut optimizat și funcționalități adaptate nevoilor tale.",
    day: "Zilele 2-5",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Lansăm",
    description: "Revizuim împreună, facem ultimele ajustări și publicăm site-ul. Afacerea ta e online!",
    day: "Zilele 6-7",
  },
];

const Process = () => {
  return (
    <section className="section-light py-20 md:py-28">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold font-body text-sm uppercase tracking-[0.2em] font-medium">Procesul</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-warm-dark mt-4">
              3 pași simpli spre <span className="text-gold">site-ul tău</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <ScrollReveal key={step.step} delay={index * 0.15}>
              <div className="relative text-center group">
                {/* Connector line (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-warm-gold/40 to-transparent" />
                )}
                
                <div className="relative w-20 h-20 mx-auto mb-6 rounded-2xl gradient-gold flex items-center justify-center shadow-lg shadow-warm-gold/20 group-hover:scale-110 transition-transform duration-500">
                  <step.icon className="w-8 h-8 text-warm-dark" />
                </div>
                
                <span className="inline-block px-3 py-1 rounded-full bg-warm-beige text-gold font-body text-xs font-semibold uppercase tracking-wider mb-3">
                  {step.day}
                </span>
                
                <h3 className="font-display text-2xl font-bold text-warm-dark mb-3">{step.title}</h3>
                <p className="font-body text-warm-dark/70 leading-relaxed">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
