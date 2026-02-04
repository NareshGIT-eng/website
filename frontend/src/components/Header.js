import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: t('home'), id: 'home' },
    { label: t('about'), id: 'about' },
    { label: t('products'), id: 'products' },
    { label: t('quality'), id: 'quality' },
    { label: t('services'), id: 'services' },
    { label: t('gallery'), id: 'gallery' },
    { label: t('reviews'), id: 'reviews' },
    { label: t('faq'), id: 'faq' },
    { label: t('contact'), id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img src="/images/logo.png" alt="Suba Coconut Merchant" className="h-12 w-12 object-contain" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-amber-900">
                {language === 'en' ? 'Suba Coconut Merchant' : 'சுபா தேங்காய் வணிகர்'}
              </span>
              <span className="text-xs text-green-700 font-medium">
                {language === 'en' ? 'Fresh from Farm' : 'பண்ணையில் இருந்து புதிய'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-amber-900 hover:bg-amber-50 rounded-lg transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-green-600 text-green-700 hover:bg-green-50"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language === 'en' ? 'தமிழ்' : 'English'}
            </Button>
            <Button
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="bg-amber-900 hover:bg-amber-800 text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              {t('contact')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-green-700"
            >
              <Globe className="w-5 h-5" />
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-amber-900 p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl">
          <nav className="px-4 py-6 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-amber-900 hover:bg-amber-50 rounded-lg transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <Button
              className="w-full mt-4 bg-amber-900 hover:bg-amber-800 text-white"
              onClick={() => scrollToSection('contact')}
            >
              <Phone className="w-4 h-4 mr-2" />
              {t('contact')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
