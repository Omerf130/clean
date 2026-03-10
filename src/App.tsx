import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import Services from './sections/Services/Services';
import WhyChooseUs from './sections/WhyChooseUs/WhyChooseUs';
import BeforeAfter from './sections/BeforeAfter/BeforeAfter';
import Testimonials from './sections/Testimonials/Testimonials';
import ServiceArea from './sections/ServiceArea/ServiceArea';
import Contact from './sections/Contact/Contact';
import Footer from './components/Footer/Footer';
import FloatingButtons from './components/FloatingButtons/FloatingButtons';

function App() {
  const mainRef = useScrollReveal();

  return (
    <div ref={mainRef}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <BeforeAfter />
        <Testimonials />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
