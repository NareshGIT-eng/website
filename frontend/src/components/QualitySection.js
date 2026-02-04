import React from 'react';
import { HandMetal, Search, ShieldCheck, Truck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const QualitySection = () => {
  const { t } = useLanguage();

  const qualitySteps = [
    {
      icon: HandMetal,
      title: t('handPicked'),
      description: t('handPickedDesc'),
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Search,
      title: t('manualCheck'),
      description: t('manualCheckDesc'),
      color: 'from-green-500 to-green-600'
    },
    {
      icon: ShieldCheck,
      title: t('hygienicHandling'),
      description: t('hygienicHandlingDesc'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Truck,
      title: t('reliableDelivery'),
      description: t('reliableDeliveryDesc'),
      color: 'from-purple-500 to-purple-600'
    }
  ];

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
          {qualitySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-900 group-hover:to-green-700 group-hover:bg-clip-text transition-all duration-300">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="absolute top-0 right-0 text-7xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors -mt-4 -mr-4">
                    0{index + 1}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Flow */}
        <div className="mt-16 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-amber-200 via-green-200 to-purple-200 hidden lg:block"></div>
          <div className="relative flex justify-between items-center">
            {qualitySteps.map((_, index) => (
              <div
                key={index}
                className="hidden lg:flex w-12 h-12 bg-white border-4 border-green-500 rounded-full items-center justify-center text-green-700 font-bold shadow-lg"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
