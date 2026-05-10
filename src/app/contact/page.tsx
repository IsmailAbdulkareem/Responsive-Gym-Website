import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

const Header = dynamic(() => import('@/components/Header'), { ssr: true });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export const metadata: Metadata = {
  title: "Contact Us - GYM Fitness Hub",
  description: "Get in touch with GYM Fitness Hub. Visit us in Korangi, Karachi or reach out via phone, email, or WhatsApp. We're here to answer all your fitness questions!",
  keywords: "contact gym, gym location Karachi, gym phone number, fitness center contact",
};

export default function ContactPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
