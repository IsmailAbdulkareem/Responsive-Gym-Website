import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

const Header = dynamic(() => import('@/components/Header'), { ssr: true });
const Booking = dynamic(() => import('@/components/Booking'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export const metadata: Metadata = {
  title: "Book Your Membership - GYM Fitness Hub",
  description: "Join GYM Fitness Hub today! Book your membership online and start your fitness transformation journey with our expert trainers and world-class facilities.",
  keywords: "gym membership, fitness booking, join gym, Karachi gym membership",
};

export default function BookingPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <Booking />
      </div>
      <Footer />
    </main>
  );
}
