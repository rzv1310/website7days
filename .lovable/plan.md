

## Problem

On page refresh, the browser's built-in scroll restoration kicks in **before** React mounts and runs `useEffect`, so the page stays at the previous scroll position instead of jumping to the top. The CSS `scroll-behavior: smooth` also makes the `scrollTo(0,0)` animate slowly instead of snapping.

## Plan

**File: `src/pages/Index.tsx`** — Update the `useEffect` to:
1. Set `history.scrollRestoration = 'manual'` to disable the browser's automatic scroll restoration.
2. Use `window.scrollTo({ top: 0, behavior: 'instant' })` to override the smooth scroll CSS and snap to top immediately.

```tsx
useEffect(() => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
}, []);
```

This is a 1-file, ~3-line change.

