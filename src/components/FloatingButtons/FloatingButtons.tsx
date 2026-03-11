import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import './FloatingButtons.scss';

const WHATSAPP_LINK = 'https://wa.me/9720526862924?text=היי, אשמח לקבל הצעת מחיר';

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a
        className="floating-btn floating-btn--whatsapp"
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
        <span className="floating-btn__tooltip">שלח הודעה בוואטסאפ</span>
      </a>

      <a
        className="floating-btn floating-btn--phone"
        href="tel:+9720526862924"
        aria-label="התקשר"
      >
        <FaPhone />
        <span className="floating-btn__tooltip">התקשר עכשיו</span>
      </a>
    </div>
  );
};

export default FloatingButtons;

