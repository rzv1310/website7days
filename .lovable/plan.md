

## Plan: Ștergere indicator scroll din Hero

Voi elimina indicatorul de scroll (iconița pill cu punctul care sare) din partea de jos a secțiunii Hero.

### Modificare
**Fișier**: `src/components/ui/animated-shader-hero.tsx` (liniile 233-237)

Șterg complet blocul:
```tsx
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
  <div className="w-6 h-10 rounded-full border-2 border-warm-gold/40 flex justify-center pt-2">
    <div className="w-1.5 h-3 rounded-full gradient-gold animate-bounce" />
  </div>
</div>
```

