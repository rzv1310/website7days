import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import andreeaImg from "@/assets/Andreea.webp";
import ioanImg from "@/assets/ioan.webp";
import oanaImg from "@/assets/Oana.webp";

gsap.registerPlugin(ScrollTrigger);

type Slide =
  | { type: "text"; content: React.ReactNode }
  | { type: "image"; src: string; alt: string };

const slides: Slide[] = [
  {
    type: "text",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-6 text-center">
        <p className="text-xl md:text-2xl font-bold text-foreground mb-6">
          Suntem echipa care transformă „frumosul" în „profitabil".
        </p>
        <p className="text-sm md:text-base text-muted-foreground mb-4">
          La noi, proiectul tău nu primește doar o bifă într-un calendar, ci devine o prioritate strategică.
        </p>
        <p className="text-sm md:text-base text-muted-foreground">
          Nu ne limităm la a crea ceva care „arată bine" – construim instrumente de vânzare.
        </p>
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-5 text-center">
        <div className="space-y-4 mb-6">
          <p className="text-xs md:text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Andreea (Design, 5 ani):</span> Se asigură că brandul tău are o identitate vizuală care captează atenția și ghidează utilizatorul spre conversie.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Ioan (Webdev, 15 ani):</span> Pune bazele unei infrastructuri tehnice impecabile, unde viteza și funcționalitatea sunt obligatorii.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Oana (Marketing, 7 ani):</span> Traduce viziunea ta pe limba publicului țintă, astfel încât mesajul să ajungă exact unde trebuie.
          </p>
        </div>
        <p className="text-sm md:text-base font-bold text-foreground">
          Concluzia?
        </p>
        <p className="text-sm md:text-base text-muted-foreground">
          Nu facem doar design de dragul artei. Construim experiențe digitale care îți aduc bani.
        </p>
      </div>
    ),
  },
  { type: "image", src: andreeaImg, alt: "Andreea" },
  { type: "image", src: ioanImg, alt: "Ioan" },
  { type: "image", src: oanaImg, alt: "Oana" },
];

const TeamShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Each slide: ~8% transition + ~8% dead zone = ~16% per slide
    // Slide 0: visible 0-16%
    // Slide 1: transition 16%-24%, dead 24%-32%
    // Slide 2: transition 32%-40%, dead 40%-48%
    // Slide 3: transition 48%-56%, dead 56%-64%
    // Slide 4: transition 64%-72%, dead 72%-100%
    const ctx = gsap.context(() => {
      for (let i = 1; i < slides.length; i++) {
        const startPct = i * 16;
        const endPct = startPct + 8;
        gsap.fromTo(
          cardsRef.current[i],
          { xPercent: 120 },
          {
            xPercent: 0,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: `${startPct}% top`,
              end: `${endPct}% top`,
              scrub: 1,
            },
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="section-dark relative" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-[300px] md:w-[400px]" style={{ clipPath: "inset(0)" }}>
          {slides.map((slide, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className={`${i === 0 ? "relative" : "absolute inset-0"} rounded-2xl overflow-hidden shadow-2xl bg-card`}
              style={{ zIndex: i }}
            >
              {slide.type === "text" ? (
                <div className="w-full aspect-[3/4] flex items-center justify-center">
                  {slide.content}
                </div>
              ) : (
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamShowcase;
