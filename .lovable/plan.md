

## Raspuns si Plan

**Da, trebuie actualizata politica de cookies.** Momentan textul spune explicit ca folositi "doar doua servicii terte" (Stripe si Google Analytics) si ca "nu folosim cookie-uri pentru publicitate, remarketing sau tracking in scopuri de marketing." Google Ads seteaza cookie-uri exact pentru remarketing si conversii, deci textul actual ar fi incorect/incomplet.

---

### Ce se va modifica

**1. `index.html`** - Adaugare Google Ads tag (gtag.js) in `<head>`, similar cu modul in care se adauga Google Analytics. Voi avea nevoie de **ID-ul tau Google Ads** (format: `AW-XXXXXXXXX`).

**2. `src/pages/Cookies.tsx`** - Urmatoarele modificari:

- **Sectiunea 2** (Cookie-uri de la terti): Se schimba "doar doua servicii terte" in "trei servicii terte" si se adauga un nou punct:
  - **Google Ads** - pentru masurarea conversiilor din campaniile publicitare si remarketing. Aceste cookie-uri ne permit sa intelegem eficienta campaniilor noastre publicitare si sa va afisam reclame relevante pe alte site-uri din reteaua Google.

- **Sectiunea 3** - Se reformuleaza complet: se elimina afirmatia ca nu folosim cookie-uri pentru publicitate/remarketing (deoarece Google Ads face exact asta). Textul nou va mentiona ca **nu vindem datele** si ca Google Ads este singurul serviciu de publicitate folosit.

- **Sectiunea 4** - Se adauga un punct nou despre dezactivarea cookie-urilor Google Ads.

---

### Intrebare necesara

Am nevoie de ID-ul tau Google Ads (format `AW-XXXXXXXXX`) pentru a adauga tag-ul. Il ai la indemana?

