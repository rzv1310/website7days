import { Link } from "react-router-dom";
import { Shield, ChevronDown, ChevronUp } from "lucide-react";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { AnimatePresence, motion } from "framer-motion";

const CookieConsent = () => {
  const {
    showBanner,
    showDetails,
    setShowDetails,
    preferences,
    setPreferences,
    acceptAll,
    rejectAll,
    saveCustom,
  } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
      >
        <div className="max-w-3xl mx-auto rounded-2xl border border-[hsl(var(--warm-gold))]/20 bg-[hsl(var(--warm-dark-secondary))] shadow-2xl shadow-black/40 backdrop-blur-sm">
          <div className="p-5 md:p-6">
            {/* Header */}
            <div className="flex items-start gap-3 mb-4">
              <Shield className="w-6 h-6 text-[hsl(var(--warm-gold))] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display text-lg font-semibold text-[hsl(var(--warm-beige))]">
                  Respectăm confidențialitatea dumneavoastră
                </h3>
                <p className="text-sm text-[hsl(var(--warm-light-text))]/70 mt-1 font-body leading-relaxed">
                  Utilizăm cookie-uri esențiale pentru funcționarea site-ului și, cu acordul dumneavoastră, cookie-uri de analiză și marketing. 
                  Puteți accepta toate, le puteți refuza sau personaliza preferințele.{" "}
                  <Link to="/cookies" title="Politica de Cookies" className="text-[hsl(var(--warm-gold))] hover:underline">
                    Politica de Cookies
                  </Link>{" "}
                  |{" "}
                  <Link to="/gdpr" title="Politica GDPR" className="text-[hsl(var(--warm-gold))] hover:underline">
                    GDPR
                  </Link>
                </p>
              </div>
            </div>

            {/* Cookie Details Toggle */}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-1.5 text-sm text-[hsl(var(--warm-gold))] hover:text-[hsl(var(--warm-gold-bright))] transition-colors font-body mb-4"
            >
              {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              {showDetails ? "Ascunde detalii" : "Personalizează preferințele"}
            </button>

            {/* Cookie Categories */}
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-3 mb-5 pb-5 border-b border-[hsl(var(--warm-gold))]/10">
                    {/* Essential */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-[hsl(var(--warm-dark))]/50">
                      <div>
                        <p className="text-sm font-semibold text-[hsl(var(--warm-beige))] font-body">Cookie-uri esențiale</p>
                        <p className="text-xs text-[hsl(var(--warm-light-text))]/60 font-body mt-0.5">
                          Necesare pentru funcționarea site-ului. Nu pot fi dezactivate.
                        </p>
                      </div>
                      <div className="shrink-0 ml-4">
                        <div className="w-10 h-5 rounded-full bg-[hsl(var(--warm-gold))] flex items-center justify-end px-0.5 cursor-not-allowed opacity-70">
                          <div className="w-4 h-4 rounded-full bg-white" />
                        </div>
                      </div>
                    </div>

                    {/* Analytics */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-[hsl(var(--warm-dark))]/50">
                      <div>
                        <p className="text-sm font-semibold text-[hsl(var(--warm-beige))] font-body">Cookie-uri de analiză</p>
                        <p className="text-xs text-[hsl(var(--warm-light-text))]/60 font-body mt-0.5">
                          Google Analytics – ne ajută să înțelegem cum este utilizat site-ul.
                        </p>
                      </div>
                      <button
                        onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                        className="shrink-0 ml-4"
                        aria-label="Toggle analytics cookies"
                      >
                        <div className={`w-10 h-5 rounded-full flex items-center px-0.5 transition-colors ${preferences.analytics ? "bg-[hsl(var(--warm-gold))] justify-end" : "bg-[hsl(var(--warm-dark))] border border-[hsl(var(--warm-light-text))]/20 justify-start"}`}>
                          <div className={`w-4 h-4 rounded-full transition-colors ${preferences.analytics ? "bg-white" : "bg-[hsl(var(--warm-light-text))]/40"}`} />
                        </div>
                      </button>
                    </div>

                    {/* Marketing */}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-[hsl(var(--warm-dark))]/50">
                      <div>
                        <p className="text-sm font-semibold text-[hsl(var(--warm-beige))] font-body">Cookie-uri de marketing</p>
                        <p className="text-xs text-[hsl(var(--warm-light-text))]/60 font-body mt-0.5">
                          Google Ads – măsurarea conversiilor și remarketing. Se încarcă doar cu acordul dumneavoastră.
                        </p>
                      </div>
                      <button
                        onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                        className="shrink-0 ml-4"
                        aria-label="Toggle marketing cookies"
                      >
                        <div className={`w-10 h-5 rounded-full flex items-center px-0.5 transition-colors ${preferences.marketing ? "bg-[hsl(var(--warm-gold))] justify-end" : "bg-[hsl(var(--warm-dark))] border border-[hsl(var(--warm-light-text))]/20 justify-start"}`}>
                          <div className={`w-4 h-4 rounded-full transition-colors ${preferences.marketing ? "bg-white" : "bg-[hsl(var(--warm-light-text))]/40"}`} />
                        </div>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={rejectAll}
                className="flex-1 px-5 py-2.5 rounded-lg border border-[hsl(var(--warm-light-text))]/15 text-[hsl(var(--warm-light-text))]/70 text-sm font-body hover:bg-[hsl(var(--warm-light-text))]/5 transition-colors"
              >
                Refuză opționalele
              </button>
              {showDetails && (
                <button
                  onClick={saveCustom}
                  className="flex-1 px-5 py-2.5 rounded-lg border border-[hsl(var(--warm-gold))]/30 text-[hsl(var(--warm-gold))] font-semibold text-sm font-body hover:bg-[hsl(var(--warm-gold))]/10 transition-colors"
                >
                  Salvează preferințele
                </button>
              )}
              <button
                onClick={acceptAll}
                className="flex-1 px-5 py-2.5 rounded-lg gradient-gold text-[hsl(var(--warm-dark))] font-semibold text-sm font-body hover:opacity-90 transition-opacity"
              >
                Acceptă toate
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;
