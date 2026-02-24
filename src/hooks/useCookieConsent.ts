import { useState, useEffect, useCallback } from "react";

export interface CookiePreferences {
  essential: boolean; // always true
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = "cookie_consent";
const COOKIE_PREFERENCES_KEY = "cookie_preferences";

const DEFAULT_PREFERENCES: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
};

export function getCookiePreferences(): CookiePreferences | null {
  try {
    const stored = localStorage.getItem(COOKIE_PREFERENCES_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return null;
}

export function hasConsented(): boolean {
  return localStorage.getItem(COOKIE_CONSENT_KEY) === "true";
}

function loadGoogleAdsScript() {
  // Replace YOUR_GOOGLE_ADS_ID with actual Google Ads conversion ID
  const gtagId = "AW-XXXXXXXXX";
  
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${gtagId}"]`)) return;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", gtagId);
  };
}

function loadGoogleAnalyticsScript() {
  const gaId = "G-XXXXXXXXX"; // Replace with actual GA4 ID
  
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${gaId}"]`)) return;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", gaId);
  };
}

export function useCookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    if (!hasConsented()) {
      setShowBanner(true);
    } else {
      const saved = getCookiePreferences();
      if (saved) {
        setPreferences(saved);
        applyPreferences(saved);
      }
    }
  }, []);

  const applyPreferences = useCallback((prefs: CookiePreferences) => {
    if (prefs.analytics) {
      loadGoogleAnalyticsScript();
    }
    if (prefs.marketing) {
      loadGoogleAdsScript();
    }
  }, []);

  const saveConsent = useCallback((prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowDetails(false);
    applyPreferences(prefs);
  }, [applyPreferences]);

  const acceptAll = useCallback(() => {
    saveConsent({ essential: true, analytics: true, marketing: true });
  }, [saveConsent]);

  const rejectAll = useCallback(() => {
    saveConsent({ essential: true, analytics: false, marketing: false });
  }, [saveConsent]);

  const saveCustom = useCallback(() => {
    saveConsent({ ...preferences, essential: true });
  }, [preferences, saveConsent]);

  return {
    showBanner,
    showDetails,
    setShowDetails,
    preferences,
    setPreferences,
    acceptAll,
    rejectAll,
    saveCustom,
  };
}

// Extend Window for gtag dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}
