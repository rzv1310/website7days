import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const testimonials = [
  {
    name: "Bogdan L.",
    business: "Avocat, București",
    text: "Site-ul meu e senzațional! Designul e foarte elegant, se încarcă rapid, iar colegii mei avocați sunt invidioși. Cea mai bună investiție făcută.",
    stars: 5,
  },
  {
    name: "Mihaela P.",
    business: "Proprietar Clinică Medicală",
    text: "Sincer, nu credeam că e posibil așa un site profi în 24 de ore. M-am înșelat. Totul arată exact cum mi-am dorit și funcționează perfect pe mobil. Mulțumesc Oana ❤️❤️❤️",
    stars: 5,
  },
  {
    name: "Matei R.",
    business: "Medic, Piatra Neamț",
    text: "Am avut site la cabinet ani de zile. Acum, după o singură zi, am unul de 10 ori mai bun, mai frumos și mai intuitiv pentru pacienții mei. O recomand cu drag pe Andreea, dar toată echipa e de nota 10 !!",
    stars: 5,
  },
  {
    name: "Anca B.",
    business: "Manager Clinică Cluj",
    text: "Prețul e corect, livrarea e rapidă și rezultatul e wow. Am recomandat deja 3 prieteni. Dacă vrei un site care aduce clienți, Oana e alegerea.",
    stars: 5,
  },
  {
    name: "Stefan B.",
    business: "Owner Coffee Shop",
    text: "Super tare!! Mi-a luat ideea din cap și a făcut-o realitate exact cum mi-am imaginat. Ioan e un adevărat vrăjitor pe partea tehnică la construit site-uri, răspunde repede și e un om de nota 10. Recomand 🤗",
    stars: 5,
  },
  {
    name: "Andrei M.",
    business: "Auto Service Premium",
    text: "Am primit un site profesional în doar 5 zile. Clienții mei mă găsesc acum pe Google și am crescut cu 40% programările online.",
    stars: 5,
  },
];

const TestimonialCard = ({ t }: { t: (typeof testimonials)[0] }) => (
  <div className="p-6 md:p-8 rounded-2xl border border-warm-gold/10 bg-warm-dark/50 backdrop-blur-sm hover:border-warm-gold/25 transition-all duration-500 h-full flex flex-col">
    <Quote className="w-8 h-8 text-gold/30 mb-4" />
    <div className="flex gap-1 mb-4">
      {Array.from({ length: t.stars }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-warm-gold text-warm-gold" />
      ))}
    </div>
    <p className="font-body text-[1.1875rem] text-warm-light-text/80 leading-relaxed flex-1 mb-6 italic">
      "{t.text}"
    </p>
    <div>
      <p className="font-display font-semibold text-warm-light">{t.name}</p>
      <p className="font-body text-sm text-gold/70">{t.business}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const isMobile = useIsMobile();

  return (
    <section className="section-dark-alt py-20 md:py-28">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold font-body text-sm uppercase tracking-[0.2em] font-medium">Testimoniale</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-warm-light mt-4">
              Ce spun <span className="text-gold-bright">clienții</span> noștri
            </h2>
          </div>
        </ScrollReveal>

        {isMobile ? (
          <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name}>
                  <TestimonialCard t={t} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className="static translate-y-0 border-warm-gold/30 bg-warm-dark text-warm-gold hover:bg-warm-gold/10 hover:border-warm-gold/50" />
              <CarouselNext className="static translate-y-0 border-warm-gold/30 bg-warm-dark text-warm-gold hover:bg-warm-gold/10 hover:border-warm-gold/50" />
            </div>
          </Carousel>
        ) : (
          <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, index) => (
              <ScrollReveal key={t.name} delay={index * 0.12}>
                <TestimonialCard t={t} />
              </ScrollReveal>
            ))}
          </div>
        )}

        
      </div>
    </section>
  );
};

export default Testimonials;
