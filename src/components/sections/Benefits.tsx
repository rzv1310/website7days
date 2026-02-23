import { Clock, Zap, Shield, TrendingUp, Smartphone, HeartHandshake } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: Clock,
    title: "Gata în 7 Zile",
    description: "Nu mai aștepți luni de zile. Website-ul tău este live în doar o săptămână.",
  },
  {
    icon: Smartphone,
    title: "Optimizat Mobile",
    description: "Fiecare pagină arată impecabil pe telefon, tabletă și desktop.",
  },
  {
    icon: Zap,
    title: "Viteză Maximă",
    description: "Site rapid, optimizat SEO, care se încarcă instant pentru clienții tăi.",
  },
  {
    icon: TrendingUp,
    title: "Crește-ți Vânzările",
    description: "Design orientat spre conversii care transformă vizitatorii în clienți.",
  },
  {
    icon: Shield,
    title: "Securitate & SSL",
    description: "Certificat SSL gratuit și protecție completă pentru afacerea ta.",
  },
  {
    icon: HeartHandshake,
    title: "Suport Dedicat",
    description: "Comunicare directă pe tot parcursul procesului, fără intermediari.",
  },
];

const Benefits = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length || !sectionRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Desktop: cards start stacked on the left, then fan out to their grid positions
      gsap.set(cards, {
        opacity: 0,
        x: (i) => -(i * 60),
        y: (i) => (i * 20),
        scale: 0.92,
        rotation: (i) => -(i * 2),
      });

      gsap.to(cards, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile: simple fade up
      gsap.set(cards, { opacity: 0, y: 60 });
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold font-body text-sm uppercase tracking-[0.2em] font-medium">De ce să alegi acest serviciu</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-warm-light mt-4">
              Tot ce ai nevoie pentru o <span className="text-gold-bright">prezență online</span> de succes
            </h2>
          </div>
        </ScrollReveal>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group p-6 md:p-8 rounded-2xl border border-warm-gold/10 bg-warm-dark-secondary/50 backdrop-blur-sm hover:border-warm-gold/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-5">
                <benefit.icon className="w-6 h-6 text-warm-dark" />
              </div>
              <h3 className="font-display text-xl font-semibold text-warm-light mb-3">{benefit.title}</h3>
              <p className="font-body text-warm-light-text/70 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
