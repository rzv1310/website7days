import andreeaImg from "@/assets/Andreea.webp";
import teamBg from "@/assets/team_bg.webp";
import teamBgMobil from "@/assets/team_bg_mobil.webp";
import ioanImg from "@/assets/ioan.webp";
import oanaImg from "@/assets/Oana.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Slide =
  | { type: "text"; content: React.ReactNode }
  | { type: "image"; src: string; alt: string };

const slides: Slide[] = [
  {
    type: "text",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-6 text-center" style={{ background: '#ffffff' }}>
        <p className="text-[1.375rem] md:text-[1.625rem] font-bold text-gray-900 mb-6">
          Suntem echipa care transformă „frumosul" în „profitabil".
        </p>
        <p className="text-[0.9375rem] md:text-[1.125rem] text-gray-700 mb-4">
          La noi, proiectul tău nu primește doar o bifă într-un calendar, ci devine o prioritate strategică.
        </p>
        <p className="text-[0.9375rem] md:text-[1.125rem] text-gray-700">
          Nu ne limităm la a crea ceva care „arată bine" – construim instrumente de vânzare.
        </p>
      </div>
    ),
  },
  {
    type: "text",
    content: (
      <div className="flex flex-col items-center justify-center h-full px-5 text-center" style={{ background: '#ffffff' }}>
        <div className="space-y-4 mb-6">
          <p className="text-[0.8125rem] md:text-[0.9375rem] text-gray-700">
            <span className="font-semibold text-gray-900">Andreea (Design, 5 ani):</span> Se asigură că brandul tău are o identitate vizuală care captează atenția și ghidează utilizatorul spre conversie.
          </p>
          <p className="text-[0.8125rem] md:text-[0.9375rem] text-gray-700">
            <span className="font-semibold text-gray-900">Ioan (Webdev, 15 ani):</span> Pune bazele unei infrastructuri tehnice impecabile, unde viteza și funcționalitatea sunt obligatorii.
          </p>
          <p className="text-[0.8125rem] md:text-[0.9375rem] text-gray-700">
            <span className="font-semibold text-gray-900">Oana (Marketing, 7 ani):</span> Traduce viziunea ta pe limba publicului țintă, astfel încât mesajul să ajungă exact unde trebuie.
          </p>
        </div>
        <p className="text-[0.9375rem] md:text-[1.125rem] font-bold text-gray-900">
          Concluzia?
        </p>
        <p className="text-[0.9375rem] md:text-[1.125rem] text-gray-700">
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
  return (
    <div className="relative py-20 md:py-28">
      <picture className="absolute inset-0 w-full h-full">
        <source media="(max-width: 767px)" srcSet={teamBgMobil} />
        <img src={teamBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      </picture>
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Cine Suntem?</h2>

        <Carousel opts={{ align: "center", loop: true }} className="w-[85vw] md:w-[380px]">
          <CarouselContent>
            {slides.map((slide, i) => (
              <CarouselItem key={i}>
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-card">
                  {slide.type === "text" ? (
                    <div className="w-full aspect-[4/5] md:aspect-[3/4] flex items-center justify-center" style={{ borderTop: '14px solid white', borderBottom: '14px solid white' }}>
                      {slide.content}
                    </div>
                  ) : (
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      title={slide.alt}
                      className="w-full aspect-[4/5] md:aspect-[3/4] object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-6">
            <CarouselPrevious className="static translate-y-0 border-white/30 bg-black/30 text-white hover:bg-white/20 hover:border-white/50" />
            <CarouselNext className="static translate-y-0 border-white/30 bg-black/30 text-white hover:bg-white/20 hover:border-white/50" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default TeamShowcase;
