import React from 'react';
import { HandMetal, Search, ShieldCheck, Truck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const QualitySection = () => {
  const { t } = useLanguage();

  return (
    <section id="quality" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('qualityTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('qualitySubtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-900 to-green-700 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hand-Picked */}
          <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <HandMetal className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-900 group-hover:to-green-700 group-hover:bg-clip-text transition-all duration-300">
                {t('handPicked')}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {t('handPickedDesc')}
              </p>

              <div className="absolute top-0 right-0 text-7xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors -mt-4 -mr-4">
                01
              </div>
            </div>
          </div>

          {/* Manual Check */}
          <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Search className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-900 group-hover:to-green-700 group-hover:bg-clip-text transition-all duration-300">
                {t('manualCheck')}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {t('manualCheckDesc')}
              </p>

              <div className="absolute top-0 right-0 text-7xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors -mt-4 -mr-4">
                02
              </div>
            </div>
          </div>

          {/* Hygienic Handling */}
          <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-900 group-hover:to-green-700 group-hover:bg-clip-text transition-all duration-300">
                {t('hygienicHandling')}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {t('hygienicHandlingDesc')}
              </p>

              <div className="absolute top-0 right-0 text-7xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors -mt-4 -mr-4">
                03
              </div>
            </div>
          </div>

          {/* Reliable Delivery */}
          <div className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Truck className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-900 group-hover:to-green-700 group-hover:bg-clip-text transition-all duration-300">
                {t('reliableDelivery')}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {t('reliableDeliveryDesc')}
              </p>

              <div className="absolute top-0 right-0 text-7xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors -mt-4 -mr-4">
                04
              </div>
            </div>
          </div>
        </div>

        {/* Process Flow */}
        <div className="mt-16 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-amber-200 via-green-200 to-purple-200 hidden lg:block"></div>
          <div className="relative flex justify-between items-center">
            <div className="hidden lg:flex w-12 h-12 bg-white border-4 border-green-500 rounded-full items-center justify-center text-green-700 font-bold shadow-lg">1</div>
            <div className="hidden lg:flex w-12 h-12 bg-white border-4 border-green-500 rounded-full items-center justify-center text-green-700 font-bold shadow-lg">2</div>
            <div className="hidden lg:flex w-12 h-12 bg-white border-4 border-green-500 rounded-full items-center justify-center text-green-700 font-bold shadow-lg">3</div>
            <div className="hidden lg:flex w-12 h-12 bg-white border-4 border-green-500 rounded-full items-center justify-center text-green-700 font-bold shadow-lg">4</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
