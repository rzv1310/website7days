import { useAccessibility } from "@/hooks/useAccessibility";
import { AnimatePresence, motion } from "framer-motion";
import {
  Accessibility,
  X,
  Type,
  Contrast,
  Palette,
  Link2,
  Space,
  MousePointer2,
  BookOpen,
  Pause,
  RotateCcw,
  Eye,
  TextCursor,
} from "lucide-react";

const AccessibilityWidget = () => {
  const { isOpen, setIsOpen, settings, updateSetting, resetAll, cycleFontSize } =
    useAccessibility();

  const modules = [
    {
      icon: Type,
      label: "Dimensiune text",
      description: settings.fontSize === 0 ? "Normal" : settings.fontSize === 1 ? "Mare" : "Foarte mare",
      active: settings.fontSize > 0,
      onClick: cycleFontSize,
    },
    {
      icon: Contrast,
      label: "Contrast ridicat",
      description: "Crește contrastul culorilor",
      active: settings.highContrast,
      onClick: () => updateSetting("highContrast", !settings.highContrast),
    },
    {
      icon: Palette,
      label: "Tonuri de gri",
      description: "Elimină culorile din pagină",
      active: settings.grayscale,
      onClick: () => updateSetting("grayscale", !settings.grayscale),
    },
    {
      icon: Link2,
      label: "Evidențiere linkuri",
      description: "Subliniază toate legăturile",
      active: settings.linkHighlight,
      onClick: () => updateSetting("linkHighlight", !settings.linkHighlight),
    },
    {
      icon: Space,
      label: "Spațiere text",
      description: "Mărește distanța între rânduri",
      active: settings.textSpacing,
      onClick: () => updateSetting("textSpacing", !settings.textSpacing),
    },
    {
      icon: MousePointer2,
      label: "Cursor mare",
      description: "Mărește dimensiunea cursorului",
      active: settings.largeCursor,
      onClick: () => updateSetting("largeCursor", !settings.largeCursor),
    },
    {
      icon: BookOpen,
      label: "Ghid de citire",
      description: "Bandă care urmărește cursorul",
      active: settings.readingGuide,
      onClick: () => updateSetting("readingGuide", !settings.readingGuide),
    },
    {
      icon: Pause,
      label: "Oprire animații",
      description: "Dezactivează toate animațiile",
      active: settings.stopAnimations,
      onClick: () => updateSetting("stopAnimations", !settings.stopAnimations),
    },
    {
      icon: TextCursor,
      label: "Font dislexie",
      description: "Font optimizat pentru dislexie",
      active: settings.dyslexiaFont,
      onClick: () => updateSetting("dyslexiaFont", !settings.dyslexiaFont),
    },
    {
      icon: Eye,
      label: "Text alternativ imagini",
      description: "Afișează descrierea imaginilor",
      active: settings.imageAltText,
      onClick: () => updateSetting("imageAltText", !settings.imageAltText),
    },
  ];

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-[9998] w-14 h-14 rounded-full bg-[hsl(var(--warm-dark-secondary))] border border-[hsl(var(--warm-gold))]/30 shadow-xl shadow-black/30 flex items-center justify-center hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-[hsl(var(--warm-gold))]"
        aria-label="Deschide meniul de accesibilitate"
        title="Accesibilitate"
      >
        <Accessibility className="w-6 h-6 text-[hsl(var(--warm-gold))]" />
      </button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -400, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed bottom-24 left-6 z-[9998] w-[340px] max-h-[70vh] rounded-2xl border border-[hsl(var(--warm-gold))]/20 bg-[hsl(var(--warm-dark-secondary))] shadow-2xl shadow-black/40 overflow-hidden flex flex-col"
            role="dialog"
            aria-label="Setări accesibilitate"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[hsl(var(--warm-gold))]/10">
              <div className="flex items-center gap-2.5">
                <Accessibility className="w-5 h-5 text-[hsl(var(--warm-gold))]" />
                <h2 className="font-display text-lg font-semibold text-[hsl(var(--warm-beige))]">
                  Accesibilitate
                </h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-[hsl(var(--warm-light-text))]/10 transition-colors"
                aria-label="Închide meniul de accesibilitate"
              >
                <X className="w-4 h-4 text-[hsl(var(--warm-light-text))]/70" />
              </button>
            </div>

            {/* Modules */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
              {modules.map((mod) => (
                <button
                  key={mod.label}
                  onClick={mod.onClick}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors text-left ${
                    mod.active
                      ? "bg-[hsl(var(--warm-gold))]/15 border border-[hsl(var(--warm-gold))]/30"
                      : "bg-[hsl(var(--warm-dark))]/40 border border-transparent hover:bg-[hsl(var(--warm-dark))]/70"
                  }`}
                  aria-pressed={mod.active}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      mod.active
                        ? "bg-[hsl(var(--warm-gold))] text-[hsl(var(--warm-dark))]"
                        : "bg-[hsl(var(--warm-light-text))]/10 text-[hsl(var(--warm-light-text))]/60"
                    }`}
                  >
                    <mod.icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="min-w-0">
                    <p
                      className={`text-sm font-semibold font-body ${
                        mod.active
                          ? "text-[hsl(var(--warm-gold))]"
                          : "text-[hsl(var(--warm-beige))]"
                      }`}
                    >
                      {mod.label}
                    </p>
                    <p className="text-xs text-[hsl(var(--warm-light-text))]/50 font-body">
                      {mod.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-[hsl(var(--warm-gold))]/10">
              <button
                onClick={resetAll}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[hsl(var(--warm-light-text))]/15 text-[hsl(var(--warm-light-text))]/70 text-sm font-body hover:bg-[hsl(var(--warm-light-text))]/5 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Resetează toate setările
              </button>
              <p className="text-[10px] text-[hsl(var(--warm-light-text))]/40 text-center mt-2 font-body">
                Conform Directivei UE 2016/2102 și legislației române
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityWidget;
