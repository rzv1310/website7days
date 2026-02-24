import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import andreeaImg from "@/assets/Andreea.webp";
import ioanImg from "@/assets/ioan.webp";
import oanaImg from "@/assets/Oana.webp";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { src: andreeaImg, name: "Andreea", role: "Design", experience: "5 ani experiență" },
  { src: ioanImg, name: "Ioan", role: "Web Developer", experience: "15 ani experiență" },
  { src: oanaImg, name: "Oana", role: "Marketing", experience: "7 ani experiență" },
];

const TeamShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Second card slides in from right over the first (15%-40%)
      gsap.fromTo(cardsRef.current[1],
        { xPercent: 120 },
        {
          xPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "15% top",
            end: "40% top",
            scrub: 1,
          },
        }
      );

      // Third card slides in from right over the second (40%-60%)
      gsap.fromTo(cardsRef.current[2],
        { xPercent: 120 },
        {
          xPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "40% top",
            end: "60% top",
            scrub: 1,
          },
        }
      );
      // 60%-100% = dead zone for last photo
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="section-dark relative" style={{ height: "350vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-[300px] md:w-[400px]">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className={`${i === 0 ? 'relative' : 'absolute inset-0'} overflow-hidden`}
              style={{ zIndex: i }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={member.src}
                  alt={member.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="text-center mt-3">
                <p className="text-foreground font-semibold text-lg">{member.name}</p>
                <p className="text-muted-foreground text-sm">{member.role} · {member.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamShowcase;
