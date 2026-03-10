import { useState, type FormEvent } from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';
import './Contact.scss';

const WHATSAPP_LINK = 'https://wa.me/9720525237600?text=היי, אשמח לקבל הצעת מחיר';
const PHONE_NUMBER = '052-523-7600';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Build WhatsApp message from form data
    const text = `שלום, שמי ${formData.name}.\nטלפון: ${formData.phone}\n${formData.message}`;
    const waLink = `https://wa.me/9720525237600?text=${encodeURIComponent(text)}`;
    window.open(waLink, '_blank');

    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title reveal">צרו איתנו קשר</h2>
        <p className="section-subtitle reveal">
          נשמח לעמוד לשירותכם! מלאו את הטופס או פנו אלינו ישירות
        </p>
      </div>

      <div className="contact__wrapper">
        <div className="contact__info reveal">
          <div>
            <h3 className="contact__info-title">בואו נדבר!</h3>
            <p className="contact__info-text">
              אנחנו כאן לכל שאלה, בקשה או הצעת מחיר. צרו קשר ונחזור אליכם בהקדם
              האפשרי. זמינים גם בוואטסאפ לנוחותכם.
            </p>
          </div>

          <div className="contact__methods">
            <a
              className="contact__method contact__method--whatsapp"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact__method-icon">
                <FaWhatsapp />
              </div>
              <div className="contact__method-details">
                <span className="contact__method-label">וואטסאפ</span>
                <span className="contact__method-value">שלחו הודעה עכשיו</span>
              </div>
            </a>

            <a className="contact__method contact__method--phone" href="tel:+9720525237600">
              <div className="contact__method-icon">
                <FaPhone />
              </div>
              <div className="contact__method-details">
                <span className="contact__method-label">טלפון</span>
                <span className="contact__method-value">{PHONE_NUMBER}</span>
              </div>
            </a>
          </div>
        </div>

        <div className="reveal">
          {!submitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="contact-form__title">השאירו פרטים</h3>
              <p className="contact-form__subtitle">ונחזור אליכם עם הצעת מחיר</p>

              <div className="contact-form__group">
                <label className="contact-form__label" htmlFor="name">
                  שם מלא
                </label>
                <input
                  className="contact-form__input"
                  id="name"
                  type="text"
                  placeholder="הכנס את שמך"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="contact-form__group">
                <label className="contact-form__label" htmlFor="phone">
                  טלפון
                </label>
                <input
                  className="contact-form__input"
                  id="phone"
                  type="tel"
                  placeholder="052-523-7600"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="contact-form__group">
                <label className="contact-form__label" htmlFor="message">
                  הודעה
                </label>
                <textarea
                  className="contact-form__textarea"
                  id="message"
                  placeholder="ספר לנו במה נוכל לעזור..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button className="contact-form__submit" type="submit">
                <MdSend />
                שלח הודעה
              </button>
            </form>
          ) : (
            <div className="contact-form">
              <div className="contact-form__success">
                <div className="contact-form__success-icon">✅</div>
                <h3 className="contact-form__success-title">ההודעה נשלחה בהצלחה!</h3>
                <p className="contact-form__success-text">נחזור אליכם בהקדם האפשרי</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
