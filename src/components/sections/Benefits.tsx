import { Clock, Zap, Shield, TrendingUp, Smartphone, HeartHandshake } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Gata în 7 Zile",
    description: "Nu mai aștepți câteva luni după programatori. Site-ul tău este live în doar o săptămână.",
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
  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-body text-sm uppercase tracking-[0.2em] font-medium">
            De ce noi
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-warm-light mt-4">
            Tot ce ai nevoie pentru o <span className="text-gold-bright">prezență online</span> de succes
          </h2>
        </div>

        {/* Horizontal scroll container */}
        <div className="overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0">
          <div className="flex gap-4 md:gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group flex-shrink-0 w-[300px] md:w-auto p-6 md:p-8 rounded-2xl border border-warm-gold/10 backdrop-blur-sm hover:border-warm-gold/30 transition-all duration-300"
                style={{
                  backgroundColor: "hsl(25 20% 14% / 0.5)",
                  backgroundImage: `linear-gradient(hsl(30 35% 90% / 0.04) 1px, transparent 1px), linear-gradient(90deg, hsl(30 35% 90% / 0.04) 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                  backgroundPosition: "8px 8px",
                }}
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
    </section>
  );
};

export default Benefits;
