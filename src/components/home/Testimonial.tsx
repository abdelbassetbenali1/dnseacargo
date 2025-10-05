'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Testimonial() {
  const t = useTranslations('testimonials');

  const testimonials = [
    {
      key: 'ahmed',
      country: 'AE',
      countryName: 'United Arab Emirates'
    },
    {
      key: 'fatima',
      country: 'MA',
      countryName: 'Morocco'
    },
    {
      key: 'omar',
      country: 'EG',
      countryName: 'Egypt'
    },
    {
      key: 'sarah',
      country: 'LB',
      countryName: 'Lebanon'
    },
    {
      key: 'youssef',
      country: 'TN',
      countryName: 'Tunisia'
    },
    {
      key: 'khalid',
      country: 'SA',
      countryName: 'Saudi Arabia'
    },
    {
      key: 'amina',
      country: 'DZ',
      countryName: 'Algeria'
    },
    {
      key: 'mohammed',
      country: 'QA',
      countryName: 'Qatar'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-green-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              {t('badge')}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.key}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 relative overflow-hidden group hover:-translate-y-1 ${
                index < 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                <div className="absolute top-0 right-0 w-20 h-20 bg-slate-800 rounded-full translate-x-10 -translate-y-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-green-400 rounded-full -translate-x-8 translate-y-8"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="mb-4">
                  <svg className="w-8 h-8 text-slate-800 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-slate-700 leading-relaxed mb-6 text-sm lg:text-base line-clamp-4">
                  &ldquo;{t(`clients.${testimonial.key}.testimonial`)}&rdquo;
                </blockquote>

                {/* Client Info */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 text-sm lg:text-base">
                        {t(`clients.${testimonial.key}.name`)}
                      </h4>
                      <p className="text-slate-600 text-xs lg:text-sm mb-2">
                        {t(`clients.${testimonial.key}.position`)}
                      </p>
                      <div className="flex items-center">
                        <Image
                          src={`/flags/m/${testimonial.country}.svg`}
                          alt={`${testimonial.countryName} Flag`}
                          width={20}
                          height={14}
                          className="mr-2 rounded-sm"
                        />
                        <span className="text-xs text-slate-500">{testimonial.countryName}</span>
                      </div>
                    </div>
                    
                    {/* Rating Stars */}
                    <div className="flex ml-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-green-400 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">انضم إلى آلاف العملاء الراضين حول العالم</p>
          <button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
            احصل على عرض سعر اليوم
          </button>
        </div>
      </div>
    </section>
  );
}