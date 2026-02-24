import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import andreeaImg from "@/assets/Andreea.png";
import ioanImg from "@/assets/ioan.png";
import oanaImg from "@/assets/Oana.png";

gsap.registerPlugin(ScrollTrigger);

const images = [andreeaImg, ioanImg, oanaImg];

const TeamShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // First card slides left to reveal second
      gsap.to(cardsRef.current[0], {
        xPercent: -120,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "33% top",
          scrub: 1,
        },
      });

      // Second card slides left to reveal third
      gsap.to(cardsRef.current[1], {
        xPercent: -120,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "33% top",
          end: "66% top",
          scrub: 1,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="section-dark relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-[320px] md:w-[420px] aspect-[9/16] max-h-[80vh]">
          {images.map((src, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
              style={{ zIndex: images.length - i }}
            >
              <img
                src={src}
                alt={`Team member ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamShowcase;
