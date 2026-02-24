import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import andreeaImg from "@/assets/Andreea.webp";
import ioanImg from "@/assets/ioan.webp";
import oanaImg from "@/assets/Oana.webp";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { src: andreeaImg, label: "Andreea - design, 5 ani experiență" },
  { src: ioanImg, label: "Ioan - web developer, 15 ani experiență" },
  { src: oanaImg, label: "Oana - marketing, 7 ani experiență" },
];

const TeamShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const textsRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Timeline (400vh):
      // 0-15%   dead zone, card 1 + text 1 visible
      // 15-18%  text 1 fades out
      // 18-38%  card 2 slides in
      // 35-38%  text 2 fades in
      // 38-48%  dead zone card 2
      // 48-51%  text 2 fades out
      // 51-66%  card 3 slides in
      // 63-66%  text 3 fades in
      // 66-100% dead zone card 3

      // Set initial states explicitly
      gsap.set(textsRef.current[1], { opacity: 0 });
      gsap.set(textsRef.current[2], { opacity: 0 });
      gsap.set(cardsRef.current[1], { xPercent: 120 });
      gsap.set(cardsRef.current[2], { xPercent: 120 });

      // Text 1 fades out
      gsap.to(textsRef.current[0], {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "15% top",
          end: "18% top",
          scrub: true,
        },
      });

      // Card 2 slides in
      gsap.to(cardsRef.current[1], {
        xPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "18% top",
          end: "38% top",
          scrub: true,
        },
      });

      // Text 2 fades in (near end of card 2 slide)
      gsap.to(textsRef.current[1], {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "35% top",
          end: "38% top",
          scrub: true,
        },
      });

      // Text 2 fades out
      gsap.to(textsRef.current[1], {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "48% top",
          end: "51% top",
          scrub: true,
        },
      });

      // Card 3 slides in
      gsap.to(cardsRef.current[2], {
        xPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "51% top",
          end: "66% top",
          scrub: true,
        },
      });

      // Text 3 fades in (near end of card 3 slide)
      gsap.to(textsRef.current[2], {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "63% top",
          end: "66% top",
          scrub: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="section-dark relative" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center" style={{ clipPath: "inset(0)" }}>
          {/* Image stack */}
          <div className="relative w-[300px] md:w-[400px]">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                ref={(el) => { cardsRef.current[i] = el; }}
                className={`${i === 0 ? 'relative' : 'absolute inset-0'}`}
                style={{ zIndex: i }}
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={member.src}
                    alt={member.label}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Text labels - separate from cards, stacked in same spot */}
          <div className="relative h-8 mt-4 w-[300px] md:w-[400px]">
            {teamMembers.map((member, i) => (
              <p
                key={i}
                ref={(el) => { textsRef.current[i] = el; }}
                className="absolute inset-0 text-center text-foreground font-medium text-base md:text-lg"
                style={{ opacity: i === 0 ? 1 : 0 }}
              >
                {member.label}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamShowcase;
