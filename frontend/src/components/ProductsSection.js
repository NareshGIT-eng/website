import React from 'react';
import { Package } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { productsData } from '../utils/mockData';

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
          {productsData.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-green-200 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={language === 'en' ? product.name : product.nameTa}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                  {t('available')}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-900 transition-colors mb-2">
                  {language === 'en' ? product.name : product.nameTa}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {language === 'en' ? product.description : product.descriptionTa}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm pb-3 border-b border-gray-100">
                    <span className="font-medium text-gray-700">{t('available')}:</span>
                    <span className="border border-amber-900 text-amber-900 text-xs px-2 py-1 rounded">
                      {product.availability === 'Both' ? t('both') : product.availability === 'Wholesale' ? t('wholesale') : t('retail')}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
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
