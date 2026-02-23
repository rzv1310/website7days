import { Clock, Zap, Shield, TrendingUp, Smartphone, HeartHandshake } from "lucide-react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Calculate how far to scroll horizontally
      const totalScrollWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalScrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalScrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="section-dark overflow-hidden">
      {/* Header - always visible */}
      <div className="pt-20 md:pt-28 pb-12 text-center px-6">
        <span className="text-gold font-body text-sm uppercase tracking-[0.2em] font-medium">
          De ce să alegi acest serviciu
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-warm-light mt-4">
          Tot ce ai nevoie pentru o <span className="text-gold-bright">prezență online</span> de succes
        </h2>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        className="flex gap-6 md:gap-8 px-6 md:px-12 pb-20 md:pb-28 will-change-transform"
      >
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="group flex-shrink-0 w-[320px] md:w-[380px] p-6 md:p-8 rounded-2xl border border-warm-gold/10 bg-warm-dark-secondary/50 backdrop-blur-sm hover:border-warm-gold/30 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-5">
              <benefit.icon className="w-6 h-6 text-warm-dark" />
            </div>
            <h3 className="font-display text-xl font-semibold text-warm-light mb-3">{benefit.title}</h3>
            <p className="font-body text-warm-light-text/70 leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
