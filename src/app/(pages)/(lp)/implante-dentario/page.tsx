import './styles.scss';

import BenefitsSection from './sections/benefits-section';
import ContactCta from './sections/contact-cta';
import FaqSection from './sections/faq-section';
import HeroSection from './sections/hero-section';
import ImplantTypes from './sections/implant-types';
import LocationMap from './sections/location-map';
import Testimonials from './sections/testimonials';
import WhyChooseUs from './sections/why-choose-us';

export default function LpPage() {
  return (
    <section className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ImplantTypes />
      <WhyChooseUs />
      <Testimonials />
      <FaqSection />
      <ContactCta />
      <LocationMap />
    </section>
  );
}
