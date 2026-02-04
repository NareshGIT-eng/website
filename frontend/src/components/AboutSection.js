import React from 'react';
import { Award, Target, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('aboutTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-900 to-green-700 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-green-100 rounded-3xl transform -rotate-3"></div>
            <img
              src="/images/SemiHusked04.jpg"
              alt="About Us"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover transform rotate-1 hover:rotate-0 transition-transform duration-500"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('aboutDescription')}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-6 border border-amber-200 hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 bg-amber-900 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('ourMission')}</h3>
                <p className="text-gray-700">{t('ourMissionDesc')}</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6 border border-green-200 hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 bg-green-700 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('ourValues')}</h3>
                <p className="text-gray-700">{t('ourValuesDesc')}</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 mt-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{t('certifications')}</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><span className="font-semibold">{t('fssai')}:</span> 22425075000557</p>
                    <p><span className="font-semibold">{t('gst')}:</span> 33NXGPS8769Q1ZX</p>
                    <p><span className="font-semibold">{t('udyam')}:</span> UDYAM-TN-02-0425990</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
