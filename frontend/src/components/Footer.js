import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { language, t } = useLanguage();

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
    }
  };

  const quickLinks = [
    { label: t('home'), id: 'home' },
    { label: t('about'), id: 'about' },
    { label: t('products'), id: 'products' },
    { label: t('services'), id: 'services' },
    { label: t('contact'), id: 'contact' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src="/images/logo.png" alt="Logo" className="h-12 w-12 object-contain" />
              <div>
                <h3 className="text-xl font-bold">
                  {language === 'en' ? 'Suba Coconut Merchant' : 'சுபா தேங்காய் வணிகர்'}
                </h3>
                <p className="text-sm text-gray-400">
                  {language === 'en' ? 'Fresh from Farm' : 'பண்ணையில் இருந்து புதிய'}
                </p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {language === 'en'
                ? 'Premium quality coconuts sourced directly from trusted farmers across Tamil Nadu.'
                : 'தமிழ்நாடு முழுவதும் நம்பகமான விவசாயிகளிடமிருந்து நேரடியாக பெறப்பட்ட தரமான தேங்காய்கள்.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-green-500 pb-2 inline-block">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-amber-500 pb-2 inline-block">
              {t('contactInfo')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Keelkattalai, Chennai<br />Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  <a href="tel:+919952044195" className="hover:text-white block">+91 9952044195</a>
                  <a href="tel:+919790874116" className="hover:text-white block">+91 9790874116</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <a href="mailto:jsubacoconutmerchant@gmail.com" className="text-gray-400 hover:text-white break-all">
                  jsubacoconutmerchant@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b-2 border-blue-500 pb-2 inline-block">
              {t('certifications')}
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <span className="font-semibold text-white">{t('fssai')}:</span><br />
                22425075000557
              </li>
              <li>
                <span className="font-semibold text-white">{t('gst')}:</span><br />
                33NXGPS8769Q1ZX
              </li>
              <li>
                <span className="font-semibold text-white">{t('udyam')}:</span><br />
                UDYAM-TN-02-0425990
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {language === 'en' ? 'Suba Coconut Merchant' : 'சுபா தேங்காய் வணிகர்'}. {t('allRightsReserved')}.
            </p>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">{t('followUs')}:</span>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
