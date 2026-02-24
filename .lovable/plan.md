

## Implementare: 5 paragrafe noi în Termeni și Condiții

Se vor adăuga secțiunile 12-16 în `src/pages/TermsAndConditions.tsx`, imediat după secțiunea 11 (Contactați-ne), cu textele agreate anterior:

- **12. Descrierea serviciilor și obligațiile clientului**
- **13. Condiții de plată**
- **14. Forță majoră**
- **15. Confidențialitate**
- **16. Legătura cu alte politici** (linkuri către Cookies și GDPR)

### Detalii tehnice
- Se inserează 5 noi `<section>` blocuri în JSX-ul existent, înainte de închiderea `</div>`-ului principal
- Linkurile către `/cookies` și `/gdpr` vor folosi componenta `<Link>` din react-router-dom (deja importată)
- Stilizarea va fi identică cu secțiunile existente

