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
      // Timeline: 0-15% dead zone card 1 visible
      // 15%-18% text 1 fades out
      // 18%-38% card 2 slides in (with text 2)
      // 38%-48% dead zone card 2
      // 48%-51% text 2 fades out  
      // 51%-66% card 3 slides in (with text 3)
      // 66%-100% dead zone card 3

      // Text 1 fades out before card 2 arrives
      gsap.to(textsRef.current[0], {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "13% top",
          end: "18% top",
          scrub: 1,
        },
      });

      // Text 2 appears as card 2 arrives
      gsap.fromTo(textsRef.current[1],
        { opacity: 0 },
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "33% top",
            end: "38% top",
            scrub: 1,
          },
        }
      );

      // Card 2 slides in from right
      gsap.fromTo(cardsRef.current[1],
        { xPercent: 120 },
        {
          xPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "18% top",
            end: "38% top",
            scrub: 1,
          },
        }
      );

      // Text 2 fades out before card 3 arrives
      gsap.to(textsRef.current[1], {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "46% top",
          end: "51% top",
          scrub: 1,
        },
      });

      // Text 3 appears as card 3 arrives
      gsap.fromTo(textsRef.current[2],
        { opacity: 0 },
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "61% top",
            end: "66% top",
            scrub: 1,
          },
        }
      );

      // Card 3 slides in from right
      gsap.fromTo(cardsRef.current[2],
        { xPercent: 120 },
        {
          xPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "51% top",
            end: "66% top",
            scrub: 1,
          },
        }
      );
      // 66%-100% = dead zone for last photo
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="section-dark relative" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
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
              <p
                ref={(el) => { textsRef.current[i] = el; }}
                className="text-center text-foreground font-medium text-base md:text-lg mt-4"
              >
                {member.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamShowcase;
