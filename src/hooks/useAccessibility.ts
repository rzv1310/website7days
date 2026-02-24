import { useState, useEffect, useCallback } from "react";

export interface AccessibilitySettings {
  fontSize: number; // 0 = normal, 1 = large, 2 = extra large
  highContrast: boolean;
  grayscale: boolean;
  linkHighlight: boolean;
  textSpacing: boolean;
  largeCursor: boolean;
  readingGuide: boolean;
  stopAnimations: boolean;
  dyslexiaFont: boolean;
  imageAltText: boolean;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 0,
  highContrast: false,
  grayscale: false,
  linkHighlight: false,
  textSpacing: false,
  largeCursor: false,
  readingGuide: false,
  stopAnimations: false,
  dyslexiaFont: false,
  imageAltText: false,
};

const STORAGE_KEY = "accessibility_settings";

export const useAccessibility = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings;
    } catch {
      return defaultSettings;
    }
  });

  const applySettings = useCallback((s: AccessibilitySettings) => {
    const root = document.documentElement;
    const body = document.body;

    // Font size
    root.classList.remove("a11y-font-1", "a11y-font-2");
    if (s.fontSize === 1) root.classList.add("a11y-font-1");
    if (s.fontSize === 2) root.classList.add("a11y-font-2");

    // High contrast
    root.classList.toggle("a11y-high-contrast", s.highContrast);

    // Grayscale
    root.classList.toggle("a11y-grayscale", s.grayscale);

    // Link highlighting
    root.classList.toggle("a11y-link-highlight", s.linkHighlight);

    // Text spacing
    root.classList.toggle("a11y-text-spacing", s.textSpacing);

    // Large cursor
    root.classList.toggle("a11y-large-cursor", s.largeCursor);

    // Stop animations
    root.classList.toggle("a11y-stop-animations", s.stopAnimations);

    // Dyslexia font
    root.classList.toggle("a11y-dyslexia-font", s.dyslexiaFont);

    // Image alt text
    root.classList.toggle("a11y-image-alt", s.imageAltText);

    // Reading guide
    const existingGuide = document.getElementById("a11y-reading-guide");
    if (s.readingGuide && !existingGuide) {
      const guide = document.createElement("div");
      guide.id = "a11y-reading-guide";
      body.appendChild(guide);
      const moveGuide = (e: MouseEvent) => {
        guide.style.top = `${e.clientY - 20}px`;
      };
      document.addEventListener("mousemove", moveGuide);
      (guide as any)._cleanup = () => document.removeEventListener("mousemove", moveGuide);
    } else if (!s.readingGuide && existingGuide) {
      (existingGuide as any)._cleanup?.();
      existingGuide.remove();
    }
  }, []);

  useEffect(() => {
    applySettings(settings);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings, applySettings]);

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const resetAll = () => {
    setSettings(defaultSettings);
  };

  const cycleFontSize = () => {
    setSettings((prev) => ({ ...prev, fontSize: (prev.fontSize + 1) % 3 }));
  };

  return {
    isOpen,
    setIsOpen,
    settings,
    updateSetting,
    resetAll,
    cycleFontSize,
  };
};
