

## Analysis

The scroll-to-top logic exists in `src/pages/Index.tsx` but may have timing issues:

1. **Current implementation**: The `useEffect` runs *after* component mount, which can be too late - the browser's scroll restoration may have already kicked in
2. **CSS interference**: The global `scroll-behavior: smooth` in `index.css` might conflict with the instant scroll intent
3. **Route-specific**: The fix only applies to the Index page, not other routes

## Root Cause

Browser scroll restoration happens very early in the page lifecycle, potentially before React mounts and the `useEffect` executes. This creates a race condition where the browser scrolls first, then React tries to counteract it.

## Solution

Move the scroll restoration logic to the **App level** (in `App.tsx`) using a `useEffect` that runs on route changes. This ensures:
- It runs for all routes, not just Index
- It executes consistently on navigation
- It happens at the router level, catching all route transitions

### Implementation

**File: `src/App.tsx`**

Add a `useEffect` with `useLocation` dependency to handle scroll restoration on every route change:

```tsx
import { useLocation } from "react-router-dom";

// Inside App component, after BrowserRouter
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);
  
  return null;
};

// Then render <ScrollToTop /> inside BrowserRouter
```

**File: `src/pages/Index.tsx`**

Remove the duplicate scroll logic from Index page since it's now handled globally.

---

**Changes**: 2 files  
**Complexity**: Low - standard React Router scroll restoration pattern

