import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import './BeforeAfter.scss';

import floorCleaning from '../../assets/gallery/floor-cleaning.jpg';
import kitchen from '../../assets/gallery/kitchen.webp';
import rizpa from '../../assets/gallery/rizpa.jpg';
import sofa1 from '../../assets/gallery/sofa1-cleanning.webp';
import sofa2 from '../../assets/gallery/sofa2-cleaning.webp';
import sofa3 from '../../assets/gallery/sofa3-cleaning.webp';

interface GalleryItem {
  src: string;
  title: string;
  label: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: sofa3,
    title: 'ניקוי ספה',
    label: 'ספה – לפני ואחרי ניקוי מקצועי',
  },
  {
    src: kitchen,
    title: 'ניקוי מטבח',
    label: 'מטבח – ניקוי יסודי של כל המשטחים',
  },
  {
    src: rizpa,
    title: 'הברקת רצפה',
    label: 'פוליש ריצוף – מראה חדש לחלוטין',
  },
  {
    src: sofa1,
    title: 'ניקוי כורסה',
    label: 'כורסת בד – הסרת כתמים עמוקים',
  },
  {
    src: floorCleaning,
    title: 'ניקוי שטיחים',
    label: 'שטיח – הסרת כתמים קשים',
  },
  {
    src: sofa2,
    title: 'ניקוי ספה',
    label: 'ספת סלון – חידוש מלא',
  },
];

const BeforeAfter = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  return (
    <section className="before-after" id="gallery">
      <div className="container">
        <h2 className="section-title reveal">לפני ואחרי</h2>
        <p className="section-subtitle reveal">
          תוצאות אמיתיות מהשטח – ההבדל מדבר בעד עצמו
        </p>
      </div>

      <div className="before-after__grid">
        {galleryItems.map((item, index) => (
          <div
            className="gallery-card reveal"
            key={index}
            onClick={() => openLightbox(index)}
          >
            <div className="gallery-card__image-wrapper">
              <img
                className="gallery-card__image"
                src={item.src}
                alt={item.title}
                loading="lazy"
              />
              <div className="gallery-card__overlay">
                <span className="gallery-card__badge">לפני ← אחרי</span>
              </div>
            </div>
            <div className="gallery-card__info">
              <h3 className="gallery-card__title">{item.title}</h3>
              <p className="gallery-card__label">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button
            className="lightbox__close"
            onClick={closeLightbox}
            aria-label="סגור"
          >
            <MdClose />
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryItems[lightbox].src}
              alt={galleryItems[lightbox].title}
            />
            <div className="lightbox__caption">
              <h3>{galleryItems[lightbox].title}</h3>
              <p>{galleryItems[lightbox].label}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BeforeAfter;
