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
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (!container || !track || !cards.length) return;

    const mm = gsap.matchMedia();

    // Desktop: horizontal scroll with pin
    mm.add("(min-width: 768px)", () => {
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

    // Mobile: cards stacked, fan out on scroll
    mm.add("(max-width: 767px)", () => {
      cards.forEach((card, i) => {
        gsap.set(card, {
          opacity: i === 0 ? 1 : 0,
          x: -(i * 40),
          rotation: -(i * 3),
          scale: 1 - i * 0.03,
        });
      });

      cards.forEach((card, i) => {
        if (i === 0) return;
        gsap.to(card, {
          opacity: 1,
          x: 0,
          rotation: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="section-dark overflow-hidden">
      {/* Header */}
      <div className="pt-20 md:pt-28 pb-12 text-center px-6">
        <span className="text-gold font-body text-sm uppercase tracking-[0.2em] font-medium">
          De ce să alegi acest serviciu
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-warm-light mt-4">
          Tot ce ai nevoie pentru o <span className="text-gold-bright">prezență online</span> de succes
        </h2>
      </div>

      {/* Desktop: horizontal track */}
      <div className="hidden md:block">
        <div
          ref={trackRef}
          className="flex gap-8 px-12 pb-28 will-change-transform"
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group flex-shrink-0 w-[380px] p-8 rounded-2xl border border-warm-gold/10 bg-warm-dark-secondary/50 backdrop-blur-sm hover:border-warm-gold/30 transition-all duration-500 hover:-translate-y-1"
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

      {/* Mobile: stacked cards that fan out */}
      <div className="md:hidden px-6 pb-20 space-y-5">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.title}
            ref={(el) => { cardsRef.current[index] = el; }}
            className="group p-6 rounded-2xl border border-warm-gold/10 bg-warm-dark-secondary/50 backdrop-blur-sm"
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
