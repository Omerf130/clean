import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { MdStar } from 'react-icons/md';
import './Hero.scss';

const WHATSAPP_LINK = 'https://wa.me/9720525237600?text=היי, אשמח לקבל הצעת מחיר';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__shapes">
        <div className="shape shape--1" />
        <div className="shape shape--2" />
        <div className="shape shape--3" />
        <div className="shape shape--4" />
      </div>

      <div className="hero__content">
        <div className="hero__badge">
          <MdStar />
          שירות ניקיון מקצועי באזור השרון
        </div>

        <h1 className="hero__title">
          <span>המבריק 100</span>
          ניקיון מקצועי שמדבר בעד עצמו
        </h1>

        <p className="hero__subtitle">
          מומחים בניקוי ספות, ריפודים, שטיחים ומזרנים. הופכים כל בית לנקי, 
          רענן ומבריק. שירות אמין, מקצועי ובמחירים הוגנים באזור השרון.
        </p>

        <div className="hero__buttons">
          <a
            className="hero__btn hero__btn--primary"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            קבל הצעת מחיר בוואטסאפ
          </a>
          <a className="hero__btn hero__btn--secondary" href="tel:+9720525237600">
            <FaPhone />
            התקשר עכשיו
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">500+</span>
            <span className="hero__stat-label">לקוחות מרוצים</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">5⭐</span>
            <span className="hero__stat-label">דירוג ממוצע</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">7+</span>
            <span className="hero__stat-label">שנות ניסיון</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
