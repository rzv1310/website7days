

## Modificare butoane CTA - Pricing Cards

### Ce se schimbă

1. **Text**: "Vreau acest pachet" → "Vreau să vorbim"
2. **Săgeata**: păstrată (ArrowRight)
3. **Design**: fundal transparent, bordură 1px gold, text gold
4. **Animație**: un punct luminos (dot) care se deplasează continuu pe conturul bordurii (CSS animation cu `@keyframes` pe un pseudo-element sau un `<span>` absolut poziționat care urmează un `offset-path` dreptunghiular)

### Detalii tehnice

**Fișier**: `src/components/sections/Pricing.tsx`

- Înlocuiesc butonul cu gradient gold plin cu un buton outline:
  - `background: transparent`
  - `border: 1px solid hsl(36, 50%, 62%)` (gold)
  - `color: gold`
- Textul devine "Vreau să vorbim"
- Adaug un element animat (punct luminos ~6px, blur glow) care se deplasează pe conturul bordurii folosind CSS `offset-path` cu un `inset()` rect sau un SVG path care urmărește dreptunghiul rotunjit al butonului
- Animația va fi continuă, lentă (~4s per ciclu), cu `infinite` loop

**Fișier**: `src/index.css` (sau inline styles)

- Keyframe `@keyframes travel-border` cu `offset-distance: 0%` → `100%`
- Punctul luminos: un pseudo-element cu `background: radial-gradient(gold, transparent)`, `box-shadow` pentru glow

