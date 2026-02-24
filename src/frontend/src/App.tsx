import Header from './components/Header';
import Hero from './components/Hero';
import FleetShowcase from './components/FleetShowcase';
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <FleetShowcase />
        <ServicesSection />
        <PricingSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
