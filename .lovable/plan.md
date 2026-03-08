

## Plan: Add Additional Text to Gold Package Note

### Current State
The Gold pricing package has a `note` field with text about the optional domain/hosting/support package.

### Change Required
Add two additional paragraphs below the existing note text:
- "Ce primești aici NU e doar 'un site frumos'."
- "Ce primești aici este top local SEO, tehnic impecabil, desenat de la zero pentru businessul tău și focusat pe apeluri și programări - pentru a converti vizitatorii în clienți."

### Implementation
Update the `note` field in the Gold plan object (line 25 in `src/components/sections/Pricing.tsx`):

**Before:**
```typescript
note: "Opțional: Domeniu + Găzduire + suport + security updates = 100 lei/lună",
```

**After:**
```typescript
note: "Opțional: Domeniu + Găzduire + suport + security updates = 100 lei/lună\n\nCe primești aici NU e doar 'un site frumos'.\n\nCe primești aici este top local SEO, tehnic impecabil, desenat de la zero pentru businessul tău și focusat pe apeluri și programări - pentru a converti vizitatorii în clienți.",
```

The existing `whitespace-pre-line` CSS class on the note paragraph will handle the line breaks (`\n\n`) properly, displaying the text across multiple paragraphs.

### Files to Edit
- `src/components/sections/Pricing.tsx` (line 25)

