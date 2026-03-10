import type { ReactNode } from 'react';
import { MdCleaningServices, MdKitchen, MdApartment, MdAutoFixHigh, MdHome } from 'react-icons/md';
import { FaCouch, FaBroom } from 'react-icons/fa';
import './Services.scss';

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <FaCouch />,
    title: 'ניקוי ספות וריפודים מקצועי',
    description: 'ניקוי עמוק של ספות, כורסאות וכל סוגי הריפודים בשיטות מתקדמות ובחומרים ידידותיים לסביבה.',
  },
  {
    icon: <FaBroom />,
    title: 'ניקוי שטיחים ומזרנים',
    description: 'הסרת כתמים, אלרגנים ואבק מצטבר משטיחים ומזרנים לתחושת רעננות מושלמת.',
  },
  {
    icon: <MdApartment />,
    title: 'ניקוי דירות אחרי שיפוץ',
    description: 'ניקוי יסודי של דירות ובתים לאחר עבודות שיפוצים, כולל הסרת אבק בנייה וחלקיקים.',
  },
  {
    icon: <MdCleaningServices />,
    title: 'ניקוי דירות לפני / אחרי מעבר',
    description: 'ניקוי מקיף של דירות לקראת מעבר דירה – נכנסים לבית נקי ומבריק.',
  },
  {
    icon: <MdKitchen />,
    title: 'ניקוי מטבחים, מקלחות וחלונות',
    description: 'ניקוי יסודי של מטבחים, חדרי אמבטיה, מקלחונים וחלונות עד לרמת הברקה.',
  },
  {
    icon: <MdAutoFixHigh />,
    title: 'ניקוי מרצפות והברקת רצפה',
    description: 'פוליש וניקוי מעמיק של מרצפות, אריחים ורצפות מכל סוג להחזרת הברק המקורי.',
  },
  {
    icon: <MdHome />,
    title: 'ניקיון יסודי לדירות ובתים פרטיים',
    description: 'שירות ניקיון יסודי ומקיף לכל חלקי הבית – מהתקרה ועד הרצפה.',
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title reveal">השירותים שלנו</h2>
        <p className="section-subtitle reveal">
          מגוון רחב של שירותי ניקיון מקצועיים לבית ולעסק. כל שירות מותאם אישית לצרכים שלכם.
        </p>
      </div>
      <div className="services__grid">
        {services.map((service, index) => (
          <div className="service-card reveal" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="service-card__icon">{service.icon}</div>
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

