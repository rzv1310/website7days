import { useIsMobile } from "@/hooks/use-mobile";

const desktopLinks = [
  { label: "Recenzii", href: "#recenzii" },
  { label: "Prețuri", href: "#preturi" },
  { label: "FAQs", href: "#faq" },
  { label: "Echipa", href: "#echipa" },
];

const mobileLinks = [
  { label: "Prețuri", href: "#preturi" },
  { label: "FAQs", href: "#faq" },
  { label: "Echipa", href: "#echipa" },
];

const StickyNav = () => {
  const isMobile = useIsMobile();
  const links = isMobile ? mobileLinks : desktopLinks;

  return (
    <nav className="sticky top-0 z-[9999] bg-warm-dark py-5 md:py-5 px-4" style={{ paddingTop: `calc(0.9rem + env(safe-area-inset-top, 0px))` }}>
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-8 md:gap-10">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-body text-sm md:text-base text-gold hover:text-gold-bright transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default StickyNav;
