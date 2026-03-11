import { useState, useEffect, type MouseEvent } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './Navbar.scss';

const navLinks = [
  { label: 'שירותים', href: '#services' },
  { label: 'למה אנחנו', href: '#why-us' },
  { label: 'גלריה', href: '#gallery' },
  { label: 'המלצות', href: '#testimonials' },
  { label: 'אזור שירות', href: '#service-area' },
  { label: 'צור קשר', href: '#contact' },
];

const WHATSAPP_LINK = 'https://wa.me/9720526862924?text=היי, אשמח לקבל הצעת מחיר';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__inner">
        <div className="navbar__logo" onClick={scrollToTop}>
          המבריק 100
        </div>

        <div className="navbar__links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          className="navbar__cta"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
          שלח הודעה
        </a>

        <button
          className={`navbar__mobile-toggle ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="תפריט"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileOpen && (
        <div className="navbar__mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="navbar__cta--mobile"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            שלח הודעה בוואטסאפ
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
