import { Hero } from '../components/hero';
import { ProductSection } from '../components/product-section';
import { Features } from '../components/features';
import { ContactForm } from '../components/contact-form';
import { Footer } from '../components/footer';
import { Navbar } from '../components/navbar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductSection />
      <Features />
      <ContactForm />
      <Footer />
    </main>
  );
}
