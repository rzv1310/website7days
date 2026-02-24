import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--warm-dark))] text-[hsl(var(--warm-light-text))]">
      <div className="container max-w-3xl py-16 px-4">
        <Link to="/" className="inline-flex items-center gap-2 text-[hsl(var(--warm-gold))] hover:opacity-80 transition-opacity mb-8 font-body">
          <ArrowLeft className="w-4 h-4" />
          Înapoi la pagina principală
        </Link>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-[hsl(var(--warm-beige))] mb-10">Politica de Cookies</h1>

        <div className="space-y-8 font-body text-[hsl(var(--warm-light-text))]/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[hsl(var(--warm-beige))] mb-3">1. Ce sunt cookie-urile?</h2>
            <p>Cookie-urile sunt fișiere text mici care sunt plasate pe computerul sau dispozitivul dumneavoastră mobil atunci când vizitați un site web. Cookie-urile sunt utilizate pe scară largă pentru a face site-urile web să funcționeze mai eficient și pentru a furniza informații proprietarilor site-ului.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(var(--warm-beige))] mb-3">2. Cookie-urile pe care le utilizăm</h2>
            <p>Site-ul nostru utilizează următoarele tipuri de cookie-uri:</p>

            <h3 className="text-lg font-semibold text-[hsl(var(--warm-beige))] mt-4 mb-2">Cookie-uri esențiale</h3>
            <p>Aceste cookie-uri sunt necesare pentru funcționarea site-ului nostru. Includ, de exemplu, cookie-uri care vă permit să vă conectați în zonele securizate ale site-ului nostru sau să utilizați coșul de cumpărături.</p>

            <h3 className="text-lg font-semibold text-[hsl(var(--warm-beige))] mt-4 mb-2">Cookie-uri de la terți</h3>
            <p>Utilizăm doar două servicii terțe care pot seta cookie-uri:</p>
            <ul className="mt-2 space-y-2 list-disc list-inside">
              <li><strong>Stripe</strong> - pentru procesarea securizată a plăților. Stripe utilizează cookie-uri pentru a preveni fraudele și pentru a asigura securitatea tranzacțiilor dumneavoastră. Aceste cookie-uri sunt esențiale pentru procesarea plăților și nu pot fi dezactivate dacă doriți să efectuați o plată pe site-ul nostru.</li>
              <li><strong>Google Analytics</strong> - pentru a înțelege cum utilizatorii interacționează cu site-ul nostru. Aceste cookie-uri colectează informații în mod anonim, inclusiv numărul de vizitatori ai site-ului, de unde au venit vizitatorii și paginile pe care le-au vizitat.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(var(--warm-beige))] mb-3">3. Nu utilizăm alte cookie-uri de la terți</h2>
            <p><strong>Important:</strong> În afara cookie-urilor Stripe și Google Analytics menționate mai sus, nu utilizăm niciun alt cookie de la terți. Nu folosim cookie-uri pentru publicitate, remarketing sau tracking în scopuri de marketing. Nu vindem și nu partajăm datele dumneavoastră cu alte companii.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(var(--warm-beige))] mb-3">4. Gestionarea cookie-urilor</h2>
            <p>Majoritatea browser-elor web vă permit să controlați cookie-urile prin setările lor. Puteți seta browser-ul să vă avertizeze atunci când primiți cookie-uri sau să le refuze complet. Totuși, rețineți că:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Dacă dezactivați cookie-urile esențiale, este posibil să nu puteți utiliza anumite funcții ale site-ului nostru.</li>
              <li>Dacă dezactivați cookie-urile Stripe, nu veți putea efectua plăți pe site-ul nostru.</li>
              <li>Dacă dezactivați cookie-urile Google Analytics, nu vom putea înțelege cum să îmbunătățim experiența dumneavoastră pe site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(var(--warm-beige))] mb-3">5. Mai multe informații</h2>
            <p>Pentru mai multe informații despre cookie-uri și cum să le gestionați, puteți vizita:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--warm-gold))] hover:underline">www.allaboutcookies.org</a></li>
              <li>Politica de confidențialitate Stripe</li>
              <li>Politica de confidențialitate Google</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(var(--warm-beige))] mb-3">6. Contactați-ne</h2>
            <p>Dacă aveți întrebări despre utilizarea cookie-urilor pe site-ul nostru, vă rugăm să ne contactați:</p>
            <p className="mt-2">Telefon: <a href="tel:+40742702982" className="text-[hsl(var(--warm-gold))] hover:underline">+40 742 702 982</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
