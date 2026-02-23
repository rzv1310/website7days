import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "../ScrollReveal";

const faqs = [
  {
    q: "Chiar se poate face un site bun în 7 zile?",
    a: "Da! Procesul nostru este optimizat pentru eficiență. Folosim instrumente moderne și avem un workflow testat care livrează rezultate profesionale în timp record.",
  },
  {
    q: "Ce se întâmplă dacă am nevoie de modificări?",
    a: "Ai incluse 2 runde de revizuiri gratuite în preț. Prima lună de suport este de asemenea gratuită, iar după aceea putem oferi pachete de mentenanță accesibile.",
  },
  {
    q: "Am nevoie de hosting sau domeniu?",
    a: "Te ajutăm să alegi și să configurezi hostingul și domeniul. Costul lor este separat (de obicei ~50-100€/an), dar ne ocupăm noi de tot setup-ul tehnic.",
  },
  {
    q: "Pot actualiza conținutul singur după livrare?",
    a: "Absolut! Vei primi acces complet și instrucțiuni clare pentru a modifica texte, imagini și alte elemente de conținut.",
  },
  {
    q: "Ce informații aveți nevoie de la mine?",
    a: "Logo-ul afacerii (dacă există), texte și fotografii relevante, informații de contact și o idee generală despre ce vrei să comunici. Te ghidăm noi pe parcurs.",
  },
];

const FAQ = () => {
  return (
    <section className="section-dark py-20 md:py-28">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold font-body text-sm uppercase tracking-[0.2em] font-medium">Întrebări frecvente</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-warm-light mt-4">
              Ai întrebări? Avem <span className="text-gold-bright">răspunsuri</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-warm-gold/10 rounded-xl px-6 bg-warm-dark-secondary/50 backdrop-blur-sm data-[state=open]:border-warm-gold/25 transition-colors"
                >
                  <AccordionTrigger className="font-display text-lg text-warm-light hover:text-gold-bright hover:no-underline py-5 text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-warm-light-text/70 leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQ;
