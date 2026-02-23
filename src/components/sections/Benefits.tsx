import { Clock, Zap, Shield, TrendingUp, Smartphone, HeartHandshake } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const wrapperHeight = wrapper.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollableDistance = wrapperHeight - viewportHeight;
      const deadZone = 600; // px of scroll before animation starts

      if (rect.top <= 0 && rect.bottom >= viewportHeight) {
        const scrolled = -rect.top;
        const adjustedScroll = Math.max(scrolled - deadZone, 0);
        const adjustedDistance = scrollableDistance - deadZone;
        const progress = Math.min(Math.max(adjustedScroll / adjustedDistance, 0), 1);
        const maxTranslate = 6 * 396 - window.innerWidth + 96;
        setTranslateX(-progress * Math.max(maxTranslate, 0));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={wrapperRef} className="section-dark" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        {/* Header */}
        <div className="pt-20 md:pt-28 pb-12 text-center px-6 flex-shrink-0">
          <span className="text-gold font-body text-sm uppercase tracking-[0.2em] font-medium">
            De ce noi
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-warm-light mt-4">
            Tot ce ai nevoie pentru o <span className="text-gold-bright">prezență online</span> de succes
          </h2>
        </div>

        {/* Horizontal track */}
        <div className="flex-1 flex items-center overflow-hidden px-12">
          <div
            className="flex gap-4 md:gap-8 will-change-transform"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group flex-shrink-0 w-[300px] md:w-[380px] p-6 md:p-8 rounded-2xl border border-warm-gold/10 bg-warm-dark-secondary/50 backdrop-blur-sm hover:border-warm-gold/30 transition-all duration-300 hover:-translate-y-1"
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
    </div>
  );
};

export default Benefits;
