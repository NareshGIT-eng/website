import React from 'react';
import { Package } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ProductsSection = () => {
  const { language, t } = useLanguage();

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('productsTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('productsSubtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-900 to-green-700 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brown Husked Coconut */}
          <div className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-green-200 hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="relative overflow-hidden">
              <img
                src="/images/BrownHusked03.jpg"
                alt={language === 'en' ? 'Brown Husked Coconut' : 'பழுப்பு உமி தேங்காய்'}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                {t('available')}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-900 transition-colors mb-2">
                {language === 'en' ? 'Brown Husked Coconut' : 'பழுப்பு உமி தேங்காய்'}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {language === 'en' ? 'Mature coconuts with brown husk, ideal for extraction and commercial use.' : 'பழுப்பு உமியுடன் முதிர்ந்த தேங்காய்கள், பிரித்தெடுத்தல் மற்றும் வணிக பயன்பாட்டிற்கு ஏற்றது.'}
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm pb-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">{t('available')}:</span>
                  <span className="border border-amber-900 text-amber-900 text-xs px-2 py-1 rounded">
                    {t('both')}
                  </span>
                </div>

                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    High oil content
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Long shelf life
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Perfect for copra making
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Raw Husked Coconut */}
          <div className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-green-200 hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="relative overflow-hidden">
              <img
                src="/images/WhiteHusked01.jpg"
                alt={language === 'en' ? 'Raw Husked Coconut' : 'மூல உமி தேங்காய்'}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                {t('available')}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-900 transition-colors mb-2">
                {language === 'en' ? 'Raw Husked Coconut' : 'மூல உமி தேங்காய்'}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {language === 'en' ? 'Fresh raw coconuts with natural husk, perfect for retail and wholesale.' : 'இயற்கை உமியுடன் புதிய தேங்காய்கள், சில்லறை மற்றும் மொத்த விற்பனைக்கு ஏற்றது.'}
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm pb-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">{t('available')}:</span>
                  <span className="border border-amber-900 text-amber-900 text-xs px-2 py-1 rounded">
                    {t('both')}
                  </span>
                </div>

                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Natural freshness
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Versatile usage
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Direct from farm
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Semi Husked Coconut */}
          <div className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-green-200 hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="relative overflow-hidden">
              <img
                src="/images/SemiHusked05.jpg"
                alt={language === 'en' ? 'Semi Husked Coconut' : 'அரை உமி தேங்காய்'}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                {t('available')}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-900 transition-colors mb-2">
                {language === 'en' ? 'Semi Husked Coconut' : 'அரை உமி தேங்காய்'}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {language === 'en' ? 'Partially husked coconuts for easy handling and longer shelf life.' : 'பகுதியளவு உரிக்கப்பட்ட தேங்காய்கள், எளிதான கையாளுதல் மற்றும் நீண்ட கால சேமிப்புக்கு.'}
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm pb-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">{t('available')}:</span>
                  <span className="border border-amber-900 text-amber-900 text-xs px-2 py-1 rounded">
                    {t('both')}
                  </span>
                </div>

                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Easy to transport
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Ready to use
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Extended freshness
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tender Coconut */}
          <div className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-green-200 hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="relative overflow-hidden">
              <img
                src="/images/greentendercoconut03.jpeg"
                alt={language === 'en' ? 'Tender Coconut' : 'இளநீர்'}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                {t('available')}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-900 transition-colors mb-2">
                {language === 'en' ? 'Tender Coconut' : 'இளநீர்'}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {language === 'en' ? 'Fresh tender coconuts with sweet water, perfect for direct consumption.' : 'இனிப்பான நீருடன் புதிய இளநீர், நேரடி நுகர்வுக்கு ஏற்றது.'}
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm pb-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">{t('available')}:</span>
                  <span className="border border-amber-900 text-amber-900 text-xs px-2 py-1 rounded">
                    {t('both')}
                  </span>
                </div>

                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Sweet natural water
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Rich in nutrients
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Refreshing & healthy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-amber-50 border border-amber-200 rounded-full px-6 py-3">
            <Package className="w-5 h-5 text-amber-900 mr-2" />
            <span className="text-amber-900 font-medium">
              {language === 'en' 
                ? 'Custom orders for Thaboola bags available on request' 
                : 'தாபோலா பைகளுக்கான தனிப்பயன் ஆர்டர்கள் கோரிக்கையின் பேரில் கிடைக்கும்'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
