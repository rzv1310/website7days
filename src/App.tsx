import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";

const NotFound = lazy(() => import("./pages/NotFound"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const GDPR = lazy(() => import("./pages/GDPR"));
const Cookies = lazy(() => import("./pages/Cookies"));
const CookieConsent = lazy(() => import("./components/CookieConsent"));
const AccessibilityWidget = lazy(() => import("./components/AccessibilityWidget"));
const WhatsAppButton = lazy(() => import("./components/WhatsAppButton"));

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

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/termeni-si-conditii" element={<TermsAndConditions />} />
        <Route path="/gdpr" element={<GDPR />} />
        <Route path="/cookies" element={<Cookies />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieConsent />
      <AccessibilityWidget />
      <WhatsAppButton />
    </Suspense>
  </BrowserRouter>
);

export default App;
