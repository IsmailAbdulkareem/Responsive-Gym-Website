import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import WhatsAppButton from '@/components/WhatsAppButton';

// Dynamic imports for better bundle optimization
const Header = dynamic(() => import('../components/Header'), { ssr: true });
const Hero = dynamic(() => import('../components/Hero'), { ssr: true });
const About = dynamic(() => import('@/components/About'), { ssr: true });
const Courses = dynamic(() => import('@/components/Courses'), { ssr: true });
const Pricing = dynamic(() => import('@/components/Pricing'), { ssr: true });
const Offer = dynamic(() => import('@/components/Offer'), { ssr: true });
const Coaches = dynamic(() => import('@/components/Coaches'), { ssr: true });
const Reviews = dynamic(() => import('@/components/Reviews'), { ssr: true });
const OpeningHours = dynamic(() => import('@/components/OpeningHours'), { ssr: true });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export const metadata: Metadata = {
  title: "GYM Fitness Hub - Premier Fitness Center in Karachi",
  description: "Transform your body and life at GYM Fitness Hub. World-class facilities, expert personal trainers, and diverse fitness programs in Korangi, Karachi. Join now!",
  keywords: "gym, fitness, Karachi, Korangi, personal training, bodybuilding, crossfit, fitness programs",
  openGraph: {
    title: "GYM Fitness Hub - Premier Fitness Center in Karachi",
    description: "Transform your body and life at GYM Fitness Hub. World-class facilities, expert personal trainers, and diverse fitness programs.",
    type: "website",
    locale: "en_PK",
  },
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Courses />
      <Pricing />
      <Offer />
      <Coaches />
      <Reviews />
      <OpeningHours />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
