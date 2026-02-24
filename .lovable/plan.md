

## Plan: Butonul "Acceptă toate" mutat în dreapta

### Problema actuală
Butoanele sunt afișate în ordinea: **Acceptă toate → Salvează → Refuză**. Pe mobile sunt stacked vertical (`flex-col`), pe desktop sunt pe un rând (`sm:flex-row`). "Acceptă toate" apare primul (stânga pe desktop, sus pe mobile).

### Soluția
Reordonăm butoanele în JSX astfel: **Refuză → Salvează → Acceptă toate**, ca "Acceptă toate" să fie ultimul element (deci în dreapta pe desktop, jos pe mobile). Alternativ, folosim `order` CSS pentru a-l forța în dreapta pe toate dispozitivele fără a schimba ordinea logică.

### Modificare în `src/components/CookieConsent.tsx` (liniile 130-152)
- Mutăm butonul "Refuză opționalele" primul în ordine
- Apoi "Salvează preferințele" (condiționat)
- Apoi "Acceptă toate" ultimul (dreapta pe desktop, jos pe mobile)

Sau mai simplu: adăugăm `order-last` pe butonul "Acceptă toate" și `order-first` pe "Refuză".

