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
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const mm = gsap.matchMedia();

    // Desktop & mobile: horizontal scroll via CSS sticky + GSAP scrub (no pin)
    mm.add("(min-width: 1px)", () => {
      const totalScrollWidth = track.scrollWidth - track.clientWidth;

      if (totalScrollWidth > 0) {
        gsap.to(track, {
          scrollLeft: totalScrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: track.closest(".benefits-wrapper"),
            start: "top top",
            end: () => `+=${totalScrollWidth}`,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    });

    return () => {
      mm.revert();
    };
  }, []);

  // Mobile stacked animation
  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) return;

    const mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      cards.forEach((card, i) => {
        if (i === 0) return;
        gsap.set(card, {
          opacity: 0,
          x: -(i * 40),
          rotation: -(i * 3),
          scale: 1 - i * 0.03,
        });
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
    <>
      {/* Wrapper with enough height for the sticky scroll effect */}
      <div className="benefits-wrapper section-dark" style={{ height: "250vh" }}>
        <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
          {/* Header */}
          <div className="pt-20 md:pt-28 pb-12 text-center px-6 flex-shrink-0">
            <span className="text-gold font-body text-sm uppercase tracking-[0.2em] font-medium">
              De ce să alegi acest serviciu
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-warm-light mt-4">
              Tot ce ai nevoie pentru o <span className="text-gold-bright">prezență online</span> de succes
            </h2>
          </div>

          {/* Desktop: horizontal track */}
          <div className="hidden md:block flex-1 overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-8 px-12 pb-12 h-full items-center overflow-hidden"
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

          {/* Mobile: stacked cards */}
          <div className="md:hidden flex-1 overflow-y-auto px-6 pb-20 space-y-5">
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
        </div>
      </div>
    </>
  );
};

export default Benefits;
