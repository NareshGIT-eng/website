import React from "react";
import "./App.css";
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import QualitySection from './components/QualitySection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ProductsSection />
          <QualitySection />
          <ServicesSection />
          <GallerySection />
          <ReviewsSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingButtons />
        <Toaster />
      </div>
    </LanguageProvider>
  );
}

export default App;
