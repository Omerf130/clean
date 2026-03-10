import type { ReactNode } from 'react';
import { MdVerified, MdHighQuality, MdLocationOn, MdBuild } from 'react-icons/md';
import './WhyChooseUs.scss';

interface Advantage {
  icon: ReactNode;
  title: string;
  text: string;
}

const advantages: Advantage[] = [
  {
    icon: <MdVerified />,
    title: 'שירות מקצועי ואמין',
    text: 'צוות מנוסה ומיומן עם ניסיון רב בתחום הניקיון המקצועי. אמינות ודייקנות בכל עבודה.',
  },
  {
    icon: <MdBuild />,
    title: 'ציוד וחומרי ניקוי מתקדמים',
    text: 'שימוש בציוד חדשני וחומרי ניקוי איכותיים, ידידותיים לסביבה ובטוחים למשפחה.',
  },
  {
    icon: <MdHighQuality />,
    title: 'תוצאות ברמה גבוהה',
    text: 'תוצאות מרשימות בכל פרויקט. שביעות רצון מלאה של הלקוחות מובטחת.',
  },
  {
    icon: <MdLocationOn />,
    title: 'שירות באזור השרון',
    text: 'מתן שירות מקצועי בכל אזור השרון – נתניה, הרצליה, רעננה, כפר סבא, הוד השרון ועוד.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <h2 className="section-title reveal">למה לבחור בנו?</h2>
        <p className="section-subtitle reveal">
          אנחנו מביאים איתנו ניסיון, מקצועיות וציוד מתקדם לכל עבודה
        </p>
      </div>
      <div className="why-us__grid">
        {advantages.map((advantage, index) => (
          <div className="advantage-card reveal" key={index}>
            <div className="advantage-card__icon">{advantage.icon}</div>
            <h3 className="advantage-card__title">{advantage.title}</h3>
            <p className="advantage-card__text">{advantage.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

