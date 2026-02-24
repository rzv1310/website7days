import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="section-dark border-t border-warm-gold/10 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-display text-lg font-semibold text-warm-light">
            Website<span className="text-gold">7</span>Zile
          </p>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-4 font-body text-sm text-warm-light-text/60">
              <Link to="/termeni-si-conditii" title="Termeni și condiții" className="hover:text-warm-gold transition-colors">Termeni și condiții</Link>
              <span>•</span>
              <Link to="/gdpr" title="Politica GDPR" className="hover:text-warm-gold transition-colors">GDPR</Link>
              <span>•</span>
              <Link to="/cookies" title="Politica de Cookies" className="hover:text-warm-gold transition-colors">Cookies</Link>
            </div>
            <p className="font-body text-sm text-warm-light-text/50">
              © {new Date().getFullYear()} Toate drepturile rezervate.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
