import About from '@/components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Courses from '@/components/Courses';
import Offer from '@/components/Offer';
import Coaches from '@/components/Coaches';
import Review from '@/components/Reviews';
import Pricing from '@/components/Pricing';
import OpeningHours from '@/components/OpeningHours';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About/>
      <Courses />
      <Pricing />
      <Offer />
      <Coaches />
      <Review/>
      <OpeningHours />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
