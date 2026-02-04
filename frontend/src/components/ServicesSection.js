import React from 'react';
import { ShoppingCart, Store, Package } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: ShoppingCart,
      title: t('wholesaleBusiness'),
      description: t('wholesaleDesc'),
      color: 'from-amber-500 to-orange-500',
      bgColor: 'from-amber-50 to-orange-50'
    },
    {
      icon: Store,
      title: t('retailSupply'),
      description: t('retailDesc'),
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: Package,
      title: t('customOrders'),
      description: t('customDesc'),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-900 to-green-700 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-green-200 hover:shadow-2xl transition-all duration-500 overflow-hidden p-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-900 group-hover:to-green-700 group-hover:bg-clip-text transition-all duration-300 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Areas */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t('serviceAreasTitle')}
            </h3>
            <p className="text-lg text-gray-600">
              {t('serviceAreasSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t('chennaiAreas'), areas: ['Keelkattalai', 'Avadi', 'Ambattur', 'Tiruvallur', 'Chromepet', 'Tambaram'] },
              { title: t('tamilNadu'), areas: ['Coimbatore', 'Madurai', 'Trichy', 'Salem', 'Tirunelveli', 'Vellore'] },
              { title: t('southIndia'), areas: ['Andhra Pradesh', 'Karnataka', 'Kerala', 'Pondicherry'] },
              { title: t('panIndia'), areas: ['Bulk orders', 'All major cities', 'On request'] }
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-4 pb-3 border-b-2 border-green-500">
                  {area.title}
                </h4>
                <ul className="space-y-2">
                  {area.areas.map((location, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {location}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
