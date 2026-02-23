const Footer = () => {
  return (
    <footer className="section-dark border-t border-warm-gold/10 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-display text-lg font-semibold text-warm-light">
            Website<span className="text-gold">7</span>Zile
          </p>
          <p className="font-body text-sm text-warm-light-text/50">
            © {new Date().getFullYear()} Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
