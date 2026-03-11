import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <div className="footer__brand-name">המבריק 100</div>
          <p className="footer__brand-text">
            שירותי ניקיון מקצועיים באזור השרון. ניקוי ספות, שטיחים, דירות ועוד.
            שירות אמין, מקצועי ובמחירים הוגנים.
          </p>
        </div>

        <div className="footer__links">
          <h4 className="footer__links-title">קישורים מהירים</h4>
          <ul>
            <li><a href="#services" onClick={() => scrollTo('#services')}>שירותים</a></li>
            <li><a href="#why-us" onClick={() => scrollTo('#why-us')}>למה אנחנו</a></li>
            <li><a href="#gallery" onClick={() => scrollTo('#gallery')}>גלריה</a></li>
            <li><a href="#testimonials" onClick={() => scrollTo('#testimonials')}>המלצות</a></li>
            <li><a href="#contact" onClick={() => scrollTo('#contact')}>צור קשר</a></li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4 className="footer__contact-title">יצירת קשר</h4>
          <div className="footer__contact-item">
            <FaPhone />
            <span>052-686-2924</span>
          </div>
          <div className="footer__contact-item">
            <FaWhatsapp />
            <span>וואטסאפ – 052-686-2924</span>
          </div>
          <div className="footer__contact-item">
            <MdLocationOn />
            <span>אזור השרון והמרכז</span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {currentYear} המבריק 100 – כל הזכויות שמורות | שירותי ניקיון מקצועיים באזור השרון</span>
        <span className="footer__credit">
          אתר זה נבנה על ידי{' '}
          <a href="https://weblio.co.il" target="_blank" rel="noopener noreferrer">
            weblio
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;

