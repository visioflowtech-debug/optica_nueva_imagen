import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import BookingWizard from '@/components/BookingWizard';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <StatsBar />
      <BookingWizard />
      <Footer />
    </main>
  );
}
