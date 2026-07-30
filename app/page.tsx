import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Location from '@/components/Location';
import Reviews from '@/components/Reviews';
import Tips from '@/components/Tips';
import BookingWizard from '@/components/BookingWizard';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <Services />
      <Location />
      <Reviews />
      <Tips />
      <BookingWizard />
      <Contact />
      <Footer />
    </main>
  );
}
