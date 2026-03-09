

## Modificare stilul notei din pachetul Gold

Textul "Opțional: Domeniu + Găzduire + suport + security updates = 100 lei/lună" va fi schimbat:
- Culoare: din `white` în gri (e.g. `hsla(30, 30%, 88%, 0.6)` — același gri folosit deja pentru descrieri)
- Fără bold (deja nu e bold, deci nu e nevoie de schimbări aici)

### Modificare în `src/components/sections/Pricing.tsx`

Linia cu `plan.note` (linia ~299) — schimb `color: "white"` în `color: "hsla(30, 30%, 88%, 0.6)"`.

