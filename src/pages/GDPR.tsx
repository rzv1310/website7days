import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const GDPR = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--warm-dark))] text-[hsl(var(--warm-light-text))]">
      <div className="container max-w-3xl py-16 px-4">
        <Link to="/" className="inline-flex items-center gap-2 text-[hsl(var(--warm-gold))] hover:opacity-80 transition-opacity mb-8 font-body">
          <ArrowLeft className="w-4 h-4" />
          Înapoi la pagina principală
        </Link>

        <h1 className="font-display text-3xl md:text-4xl font-bold text-[hsl(var(--warm-beige))] mb-10">GDPR - Protecția Datelor</h1>

        <div className="space-y-8 font-body text-[hsl(var(--warm-light-text))]/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[hsl(var(--warm-beige))] mb-3">1. Conformitate GDPR</h2>
            <p>SEO Doctor SRL respectă Regulamentul General privind Protecția Datelor (GDPR) al Uniunii Europene, care a intrat în vigoare la 25 mai 2018. Această secțiune GDPR face parte din Politica noastră de Confidențialitate și explică drepturile dumneavoastră în ceea ce privește datele dumneavoastră personale și modul în care ne conformăm acestor reglementări.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(var(--warm-beige))] mb-3">2. Operatorul de date</h2>
            <p>SEO Doctor SRL acționează în calitate de "operator de date" pentru orice date personale colectate prin Serviciul nostru. Acest lucru înseamnă că determinăm scopurile și mijloacele de prelucrare a datelor dumneavoastră personale.</p>
            <div className="mt-4 p-4 rounded-lg bg-[hsl(var(--warm-dark-secondary))] border border-[hsl(var(--warm-gold))]/10">
              <p className="font-semibold text-[hsl(var(--warm-beige))] mb-2">Date de contact ale Operatorului:</p>
              <p>Nume: SEO Doctor SRL</p>
              <p>Cod Unic de Înregistrare: 49345207</p>
              <p>Adresă: Str. Campia Libertății 33, sector 3, București</p>
              <p>Telefon: <a href="tel:+40742702982" className="text-[hsl(var(--warm-gold))] hover:underline">+40 742 702 982</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(var(--warm-beige))] mb-3">3. Temeiurile juridice pentru prelucrare</h2>
            <p>Prelucrăm datele dumneavoastră personale numai atunci când avem un temei juridic valid pentru a face acest lucru. Temeiurile juridice pe care ne bazăm includ:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong>Consimțământul:</strong> Când ne-ați dat permisiunea explicită de a prelucra datele dumneavoastră personale pentru un scop specific.</li>
              <li><strong>Executarea unui contract:</strong> Când prelucrarea este necesară pentru îndeplinirea unui contract la care sunteți parte sau pentru a lua măsuri la cererea dumneavoastră înainte de încheierea unui contract.</li>
              <li><strong>Obligație legală:</strong> Când prelucrarea este necesară pentru a respecta o obligație legală la care suntem supuși.</li>
              <li><strong>Interese legitime:</strong> Când prelucrarea este necesară pentru interesele noastre legitime sau ale unei terțe părți, cu excepția cazului în care prevalează interesele sau drepturile și libertățile dumneavoastră fundamentale care necesită protecția datelor personale.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(var(--warm-beige))] mb-3">4. Drepturile dumneavoastră GDPR</h2>
            <p>Conform GDPR, aveți următoarele drepturi în ceea ce privește datele dumneavoastră personale:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li><strong>Dreptul de a fi informat:</strong> Aveți dreptul de a primi informații clare, transparente, ușor de înțeles și ușor accesibile despre modul în care utilizăm datele dumneavoastră personale.</li>
              <li><strong>Dreptul de acces:</strong> Aveți dreptul de a obține confirmarea dacă prelucrăm datele dumneavoastră personale și de a accesa aceste date personale.</li>
              <li><strong>Dreptul la rectificare:</strong> Aveți dreptul de a solicita corectarea datelor personale inexacte sau completarea datelor personale incomplete.</li>
              <li><strong>Dreptul la ștergere ('dreptul de a fi uitat'):</strong> Aveți dreptul de a solicita ștergerea datelor dumneavoastră personale în anumite circumstanțe.</li>
              <li><strong>Dreptul la restricționarea prelucrării:</strong> Aveți dreptul de a solicita restricționarea prelucrării datelor dumneavoastră personale în anumite circumstanțe.</li>
              <li><strong>Dreptul la portabilitatea datelor:</strong> Aveți dreptul de a primi datele personale pe care ni le-ați furnizat într-un format structurat, utilizat în mod obișnuit și care poate fi citit automat, și de a transmite aceste date altui operator de date.</li>
              <li><strong>Dreptul la opoziție:</strong> Aveți dreptul de a vă opune prelucrării datelor dumneavoastră personale în anumite circumstanțe, inclusiv prelucrării pentru marketing direct.</li>
              <li><strong>Drepturi legate de luarea deciziilor automatizate și de profilare:</strong> Aveți dreptul de a nu face obiectul unei decizii bazate exclusiv pe prelucrarea automatizată, inclusiv profilarea, care produce efecte juridice asupra dumneavoastră sau vă afectează în mod similar în mod semnificativ.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(var(--warm-beige))] mb-3">5. Exercitarea drepturilor dumneavoastră</h2>
            <p>Pentru a vă exercita drepturile GDPR, vă rugăm să ne contactați utilizând detaliile de contact furnizate mai sus. Vom răspunde la solicitarea dumneavoastră în termen de o lună de la primirea acesteia. Acest termen poate fi prelungit cu două luni suplimentare dacă este necesar, ținând cont de complexitatea și numărul solicitărilor.</p>
            <p className="mt-2">Dacă solicitarea este evident nefondată sau excesivă, în special din cauza caracterului său repetitiv, putem:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Să percepem o taxă rezonabilă, ținând cont de costurile administrative;</li>
              <li>Să refuzăm să dăm curs cererii.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(var(--warm-beige))] mb-3">6. Transfer de date în afara UE/SEE</h2>
            <p>Dacă transferăm datele dumneavoastră personale în afara Uniunii Europene sau Spațiului Economic European, ne asigurăm că transferul este efectuat în conformitate cu GDPR. Aceasta poate include transferul către țări care au fost recunoscute de Comisia Europeană ca oferind un nivel adecvat de protecție a datelor sau utilizarea clauzelor contractuale standard aprobate de Comisia Europeană.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(var(--warm-beige))] mb-3">7. Încălcări ale securității datelor</h2>
            <p>În cazul unei încălcări a securității datelor care prezintă un risc pentru drepturile și libertățile dumneavoastră, vom notifica autoritatea competentă de protecție a datelor fără întârzieri nejustificate și, dacă este posibil, în termen de 72 de ore după ce am luat cunoștință de încălcare.</p>
            <p className="mt-2">Dacă încălcarea este susceptibilă de a duce la un risc ridicat pentru drepturile și libertățile dumneavoastră, vă vom notifica, de asemenea, direct și fără întârzieri nejustificate.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(var(--warm-beige))] mb-3">8. Autoritatea de supraveghere</h2>
            <p>Dacă considerați că prelucrarea datelor dumneavoastră personale încalcă prevederile GDPR, aveți dreptul de a depune o plângere la o autoritate de supraveghere.</p>
            <div className="mt-4 p-4 rounded-lg bg-[hsl(var(--warm-dark-secondary))] border border-[hsl(var(--warm-gold))]/10">
              <p className="font-semibold text-[hsl(var(--warm-beige))] mb-2">Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</p>
              <p>Adresă: B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, cod poștal 010336, București, România</p>
              <p>Website: <a href="https://www.dataprotection.ro/" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--warm-gold))] hover:underline">www.dataprotection.ro</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[hsl(var(--warm-beige))] mb-3">9. Contactați-ne</h2>
            <p>Dacă aveți întrebări sau preocupări despre modul în care prelucrăm datele dumneavoastră personale sau doriți să vă exercitați drepturile GDPR, vă rugăm să ne contactați:</p>
            <p className="mt-2">Telefon: <a href="tel:+40742702982" className="text-[hsl(var(--warm-gold))] hover:underline">+40 742 702 982</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GDPR;
