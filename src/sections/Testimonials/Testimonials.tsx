import { MdStar } from 'react-icons/md';
import './Testimonials.scss';

interface Testimonial {
  text: string;
  name: string;
  location: string;
  rating: number;
  initial: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'הספה חזרה להיראות כמו חדשה! שירות מצוין, מקצועי ואמין. ממליצה בחום לכל מי שמחפש ניקוי ספות ברמה גבוהה.',
    name: 'מיכל כהן',
    location: 'רעננה',
    rating: 5,
    initial: 'מ',
  },
  {
    text: 'הזמנו ניקיון יסודי לדירה אחרי שיפוץ. הצוות הגיע בזמן, עבד ביסודיות והתוצאה הייתה מדהימה. הדירה נראתה מושלמת!',
    name: 'אבי לוי',
    location: 'כפר סבא',
    rating: 5,
    initial: 'א',
  },
  {
    text: 'שירות ניקוי השטיחים היה מעולה. הכתמים שחשבנו שלא יורדו נעלמו לחלוטין. מחירים הוגנים ותוצאות מעולות. בהחלט אזמין שוב!',
    name: 'שירה ברק',
    location: 'הרצליה',
    rating: 5,
    initial: 'ש',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title reveal">מה הלקוחות שלנו אומרים</h2>
        <p className="section-subtitle reveal">
          מאות לקוחות מרוצים באזור השרון. הנה כמה מהמלצות שקיבלנו
        </p>
      </div>
      <div className="testimonials__grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card reveal" key={index}>
            <div className="testimonial-card__stars">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <MdStar key={i} />
              ))}
            </div>
            <p className="testimonial-card__text">{testimonial.text}</p>
            <div className="testimonial-card__author">
              <div className="testimonial-card__avatar">
                {testimonial.initial}
              </div>
              <div className="testimonial-card__info">
                <span className="testimonial-card__name">{testimonial.name}</span>
                <span className="testimonial-card__location">{testimonial.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

