

# Plan: Curățare cod

Am analizat întregul proiect și am identificat următoarele probleme:

---

## 1. Fișiere nefolosite de șters

Următoarele componente UI nu sunt importate nicăieri în aplicație (doar se referă intern una la alta):

- `src/components/ui/alert-dialog.tsx`
- `src/components/ui/alert.tsx`
- `src/components/ui/aspect-ratio.tsx`
- `src/components/ui/badge.tsx`
- `src/components/ui/breadcrumb.tsx`
- `src/components/ui/calendar.tsx`
- `src/components/ui/chart.tsx`
- `src/components/ui/checkbox.tsx`
- `src/components/ui/collapsible.tsx`
- `src/components/ui/command.tsx`
- `src/components/ui/context-menu.tsx`
- `src/components/ui/dialog.tsx`
- `src/components/ui/drawer.tsx`
- `src/components/ui/dropdown-menu.tsx`
- `src/components/ui/form.tsx`
- `src/components/ui/hover-card.tsx`
- `src/components/ui/input-otp.tsx`
- `src/components/ui/input.tsx`
- `src/components/ui/label.tsx`
- `src/components/ui/menubar.tsx`
- `src/components/ui/navigation-menu.tsx`
- `src/components/ui/pagination.tsx`
- `src/components/ui/popover.tsx`
- `src/components/ui/progress.tsx`
- `src/components/ui/radio-group.tsx`
- `src/components/ui/resizable.tsx`
- `src/components/ui/scroll-area.tsx`
- `src/components/ui/select.tsx`
- `src/components/ui/separator.tsx`
- `src/components/ui/sheet.tsx`
- `src/components/ui/sidebar.tsx`
- `src/components/ui/skeleton.tsx`
- `src/components/ui/slider.tsx`
- `src/components/ui/switch.tsx`
- `src/components/ui/table.tsx`
- `src/components/ui/tabs.tsx`
- `src/components/ui/textarea.tsx`
- `src/components/ui/toggle-group.tsx`
- `src/components/ui/toggle.tsx`
- `src/components/ui/card.tsx`
- `src/components/NavLink.tsx` — neimportat nicăieri
- `src/components/SectionDivider.tsx` — importat în Index.tsx dar nu folosit (nici un `<SectionDivider` în cod)
- `src/App.css` — neimportat nicăieri (stilurile Vite default, nefolosite)

## 2. Import nefolosit de eliminat

- **`src/pages/Index.tsx`**: eliminare `import SectionDivider`

## 3. Componente folosite dar discutabile

Următoarele rămân pentru că sunt folosite activ:
- `accordion.tsx` — folosit în FAQ
- `avatar.tsx` — probabil folosit
- `button.tsx` — folosit în carousel, calendar, etc.
- `carousel.tsx` — folosit în Testimonials
- `sonner.tsx`, `toaster.tsx`, `toast.tsx`, `tooltip.tsx` — folosite în App.tsx
- `use-toast.ts` (hooks) — folosit

## 4. Dependențe npm nefolosite

Următoarele pachete nu par a fi folosite în cod și ar putea fi eliminate din `package.json`:
- `@hookform/resolvers`, `react-hook-form`, `zod` — nu există formulare
- `@paper-design/shaders-react` — shader-ul e custom, nu folosește acest pachet
- `next-themes` — nu este importat nicăieri
- `react-resizable-panels` — nefolosit
- `recharts` — nefolosit
- `vaul` — drawer nefolosit
- `cmdk` — command nefolosit
- `input-otp` — nefolosit
- `react-day-picker` — calendar nefolosit
- `date-fns` — nefolosit
- Multiple pachete `@radix-ui/*` care corespund componentelor UI șterse

---

## Rezumat

| Acțiune | Număr |
|---------|-------|
| Fișiere de șters | ~43 |
| Importuri de curățat | 1 |
| Pachete npm de eliminat | ~15+ |

Toate componentele UI shadcn nefolosite vor fi șterse. Funcționalitatea site-ului rămâne identică — doar codul mort este eliminat.

