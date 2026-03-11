import { FaWhatsapp } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import './ServiceArea.scss';

const cities = [
  'נתניה',
  'הרצליה',
  'רעננה',
  'כפר סבא',
  'הוד השרון',
  'רמת השרון',
  'פתח תקוה',
  'ראש העין',
  'רמת גן',
  'גבעתיים',
  'תל אביב',
  'קיסריה',
  'חדרה',
  'פרדס חנה',
];

const WHATSAPP_LINK = 'https://wa.me/9720526862924?text=היי, אשמח לקבל הצעת מחיר';

const ServiceArea = () => {
  return (
    <section className="service-area" id="service-area">
      <div className="service-area__content">
        <div className="reveal">
          <MdLocationOn style={{ fontSize: '3rem', color: 'white', marginBottom: '16px' }} />
          <h2 className="service-area__title">אזור השירות שלנו</h2>
          <p className="service-area__text">
            המבריק 100 מספק שירותי ניקיון מקצועיים בכל רחבי אזור השרון והמרכז. 
            אנחנו מגיעים אליכם עד הבית עם כל הציוד הנדרש. צרו קשר לבדיקת זמינות באזורכם.
          </p>
        </div>
        <div className="service-area__cities reveal">
          {cities.map((city) => (
            <span className="service-area__city" key={city}>
              {city}
            </span>
          ))}
        </div>
        <div className="service-area__cta reveal">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
            בדוק זמינות באזורך
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;

