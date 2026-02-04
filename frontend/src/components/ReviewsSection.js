import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { reviewsData } from '../utils/mockData';

const ReviewsSection = () => {
  const { language, t } = useLanguage();

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('reviewsTitle')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('reviewsSubtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-900 to-green-700 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsData.map((review, index) => (
            <div
              key={review.id}
              className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-green-200 hover:shadow-2xl transition-all duration-300 p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-2">
                  "{language === 'en' ? review.comment : review.commentTa}"
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {review.date}
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-900 to-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">
                    {(language === 'en' ? review.name : review.nameTa).charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {language === 'en' ? review.name : review.nameTa}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {language === 'en' ? review.business : review.businessTa}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* JustDial & Google Reviews CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* JustDial Rating */}
          <div className="inline-flex items-center bg-white border-2 border-orange-200 rounded-full px-6 py-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-2 mr-4">
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              <span className="text-3xl font-bold text-gray-900">4.5</span>
            </div>
            <div className="text-left border-l-2 border-gray-200 pl-4">
              <p className="text-sm text-gray-600">JustDial</p>
              <p className="font-bold text-gray-900">23+ Reviews</p>
            </div>
          </div>

          {/* Google Rating */}
          <div className="inline-flex items-center bg-white border-2 border-blue-200 rounded-full px-6 py-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-2 mr-4">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-3xl font-bold text-gray-900">5.0</span>
            </div>
            <div className="text-left border-l-2 border-gray-200 pl-4">
              <p className="text-sm text-gray-600">Google</p>
              <p className="font-bold text-gray-900">2 Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
