import { ArrowRight, Mail, Phone } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section id="contact" className="section-light py-20 md:py-28">
      <div className="container">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-gold font-body text-sm uppercase tracking-[0.2em] font-medium">Hai să începem</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-warm-dark mt-4 mb-6">
              Ești gata să ai un <span className="text-gold">website profesional</span>?
            </h2>
            <p className="font-body text-warm-dark/60 text-lg mb-10 max-w-xl mx-auto">
              Scrie-ne acum și în 7 zile afacerea ta va fi online. Fără bătăi de cap, fără complicații.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.a
                href="mailto:contact@exemplu.ro"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl gradient-gold text-warm-dark font-body font-bold text-lg shadow-lg shadow-warm-gold/20 hover:opacity-90 transition-opacity"
              >
                <Mail className="w-5 h-5" />
                Contactează-ne
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="tel:+40700000000"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-warm-gold/30 text-warm-dark font-body font-semibold text-lg hover:bg-warm-gold/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Sună acum
              </motion.a>
            </div>

            <p className="font-body text-warm-dark/40 text-sm">
              Răspundem în maxim 24 de ore • Consultanță inițială gratuită
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTA;
