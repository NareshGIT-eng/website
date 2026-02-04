import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { reviewsData } from '../utils/mockData';
import { Card, CardContent, CardHeader } from './ui/card';

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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsData.map((review, index) => (
            <Card
              key={review.id}
              className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "{language === 'en' ? review.comment : review.commentTa}"
                </p>
              </CardHeader>

              <CardContent>
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
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-white border-2 border-green-200 rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-2 mr-4">
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              <span className="text-3xl font-bold text-gray-900">4.8</span>
            </div>
            <div className="text-left border-l-2 border-gray-200 pl-4">
              <p className="text-sm text-gray-600">Based on</p>
              <p className="font-bold text-gray-900">500+ Google Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
