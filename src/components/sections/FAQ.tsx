import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "../ScrollReveal";

const faqs = [
  {
    q: "Chiar se poate face un site bun în 7 zile?",
    a: "Da! Procesul nostru este optimizat pentru eficiență.\n\nVei avea 3 oameni dedicați care vor lucra până la 140 de ore în săptămâna dedicată ție.\n\nCodare + design + texte + SEO - vei avea totul gata într-un timp record!",
  },
  {
    q: "Ce informații aveți nevoie de la mine?",
    a: "Nume Business (+ poze), Adresa completă, Telefon, Echipa (specializări + poze), Lista servicii (+ detalii), Lista Prețuri, Detalii business (istoric, etc.)\n\nDacă nu ai aproape nimic pregătit, te ghidăm noi pas cu pas.",
  },
  {
    q: "Trebuie să fiu disponibil(ă) în ziua lansării?",
    a: "Da, va trebui să fii disponibil(ă) în ziua respectivă. Nu trebuie să stai lipit(ă) de laptop toată ziua, dar e important să ai telefonul aproame ca să poți răspunde rapid dacă apar întrebări sau avem nevoie de feedback.\n\nTe rugăm să-ți rezervi o fereastră liberă spre finalul zilei, după ora 15:00 (când îți prezentăm site-ul și facem reviziile).",
  },
  {
    q: "Există costuri suplimentare?",
    a: "Da.\nAi nevoie de un domeniu și de găzduire (hosting).\nDacă nu vrei bătăi de cap, ne ocupăm noi de tot, inclusiv suport tehnic permanent, pentru doar 100 lei pe lună.",
  },
  {
    q: "Oferiți plata în rate?",
    a: "Câteodată! Știm că e o investiție importantă și vrem să fie cât mai ușor să spui \u201Eda\u201D și să începem.\nDe aceea oferim opțiuni de plată în câteva rate lunare la toate pachetele.",
  },
  {
    q: "Mai aveți și alte pachete de website?",
    a: "Da! Avem și proiecte custom, pentru business-uri care au nevoie de un site mai amplu, cu impact mai mare și funcționalități avansate. Spune-ne ce ai în minte și îți propunem un plan potrivit.",
  },
  {
    q: "Cu cât timp înainte ar trebui să-mă programez?",
    a: "În ziua programării vom avea împreună o conversație telefonică și vom stabili atunci.\n\nRecomandăm, de obicei, să rezervi cu aprox. 2 săptămâni înainte, ca să avem timp să strângem textele și materialele necesare. Dacă ai deadline strâns, spune-ne și vedem cum te putem \u201Estrecura\u201D în program.",
  },
  {
    q: "Scrieți voi textele pentru site?",
    a: "Da, serviciile de copywriting sunt incluse.\nDar evident că avem nevoie de ajutorul tău.\nStabilim împreună structura și conținutul și va trebui să-ți dai acordul în prealabil.",
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
                  <AccordionContent className="font-body text-warm-light-text/70 leading-relaxed pb-5 whitespace-pre-line">
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
