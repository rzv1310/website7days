

## Plan: Adaugare atribute `title` pe toate link-urile `<a>` si `<Link>`

Toate link-urile din site lipsesc atributul `title`, ceea ce afecteaza SEO si accesibilitatea. Voi adauga `title` descriptiv pe fiecare link.

### Fisiere si modificari:

**1. `src/components/sections/Footer.tsx`** (3 link-uri)
- `/termeni-si-conditii` → `title="Termeni și condiții"`
- `/gdpr` → `title="Politica GDPR"`
- `/cookies` → `title="Politica de Cookies"`

**2. `src/components/sections/CTA.tsx`** (1 link)
- `tel:+40742702982` → `title="Sună la SEO Doctor"`

**3. `src/components/sections/ForYou.tsx`** (2 link-uri)
- WhatsApp "Vreau site în 7 zile!" → `title="Contactează-ne pe WhatsApp"`
- WhatsApp "Vreau să vorbim!" → `title="Contactează-ne pe WhatsApp"`

**4. `src/components/sections/Pricing.tsx`** (link-uri din carduri)
- WhatsApp CTA → `title="Comandă pachet pe WhatsApp"`

**5. `src/components/CookieConsent.tsx`** (2 link-uri)
- `/cookies` → `title="Politica de Cookies"`
- `/gdpr` → `title="Politica GDPR"`

**6. `src/pages/TermsAndConditions.tsx`** (4 link-uri)
- Back link → `title="Înapoi la pagina principală"`
- `tel:` → `title="Sună la SEO Doctor"`
- `/cookies` → `title="Politica de Cookies"`
- `/gdpr` → `title="Politica GDPR"`

**7. `src/pages/Cookies.tsx`** (3 link-uri)
- Back link → `title="Înapoi la pagina principală"`
- `tel:` → `title="Sună la SEO Doctor"`
- `allaboutcookies.org` → `title="Informații despre cookies"`

**8. `src/pages/GDPR.tsx`** (2 link-uri)
- Back link → `title="Înapoi la pagina principală"`
- `tel:` → `title="Sună la SEO Doctor"`

**9. `src/components/ui/animated-shader-hero.tsx`** (butonul principal WhatsApp din Hero)
- → `title="Scrie-ne pe WhatsApp"`

