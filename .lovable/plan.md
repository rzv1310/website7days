

## Problem

The current fix works for **client-side navigation** but has a race condition on **hard page refresh**:

1. Browser restores scroll position → happens immediately on page load
2. React mounts → happens after JS bundle loads and executes
3. `useEffect` runs → sets `scrollRestoration = 'manual'` and calls `scrollTo(0, 0)`

By step 3, the browser has already restored the scroll position. The `scrollTo` with `behavior: 'instant'` does fire and should snap to top, but with `scroll-behavior: smooth` in CSS, some browsers may still animate it briefly.

## Solution (2 changes)

### 1. Add inline script in `index.html` (before React loads)

Add a `<script>` tag in the `<head>` of `index.html` to set `scrollRestoration` and scroll to top **before** any framework code runs:

```html
<script>
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
</script>
```

This guarantees scroll restoration is disabled before the browser even attempts it.

### 2. Keep the existing `ScrollToTop` component in `App.tsx`

No changes needed — it still handles client-side route transitions correctly.

### Optional: CSS scroll-behavior

The `scroll-behavior: smooth` in `index.css` is fine to keep — it provides smooth scrolling for anchor links (e.g., FAQ, Team sections). The `behavior: 'instant'` in the JS call correctly overrides it for programmatic scroll-to-top.

**Files to edit:** `index.html` (add 4-line script in `<head>`)

