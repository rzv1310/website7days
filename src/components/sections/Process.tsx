import { MessageSquare, Palette, Rocket } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import { MeshGradient } from "@paper-design/shaders-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discutăm",
    description: "Într-un call scurt de 30 min, înțeleg ce ai nevoie și stabilim structura site-ului.",
    day: "Ziua 1",
  },
  {
    icon: Palette,
    step: "02",
    title: "Codăm & Desenăm",
    description: "Construim paginile tehnic și cu design wow, conținut optimizat și funcționalități adaptate nevoilor tale.",
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
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Shader Background */}
      <MeshGradient
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
        speed={0.15}
        colors={["#f5e6d3", "#d4b896", "#c4a67a", "#3d2e14", "#e8d5bc"]}
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold font-body text-sm uppercase tracking-[0.2em] font-medium">Procesul</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-warm-light-text mt-4">
              3 pași simpli spre <span className="text-gold">site-ul tău</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto items-stretch">
          {steps.map((step, index) => (
            <ScrollReveal key={step.step} delay={index * 0.08}>
              <div className="relative text-center group h-full flex flex-col">
                {/* Connector line (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-warm-gold/40 to-transparent" />
                )}

                {/* Day badge - larger */}
                <div className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-warm-gold/15 border border-warm-gold/30 backdrop-blur-sm mb-6 group-hover:scale-110 transition-transform duration-500">
                  <span className="font-body text-sm uppercase tracking-[0.2em] font-medium text-white">{step.day}</span>
                </div>

                {/* Glass card */}
                <div className="rounded-2xl bg-[#3d2e14]/60 backdrop-blur-md border border-white/10 px-6 py-6 shadow-lg flex-1 flex flex-col justify-center">
                  <h3 className="font-display text-2xl font-bold text-warm-light-text mb-3">{step.title}</h3>
                  <p className="font-body text-warm-light-text/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
