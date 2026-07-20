import Header from '../components/Header';
import Hero from '../components/Hero';
import PromoBanner from '../components/PromoBanner';
import CategoryGrid from '../components/CategoryGrid';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PromoBanner />
      <CategoryGrid />
      <CTASection />
      <Footer />
    </>
  );
}
