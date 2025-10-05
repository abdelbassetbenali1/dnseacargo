"use client";

import { useTranslations } from 'next-intl';

export default function Stats() {
  const t = useTranslations();

  return (
    <section className="py-16 bg-blue-900 text-white px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('stats.title')}
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            {t('stats.description')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-800 rounded-lg p-6">
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-blue-200">{t('stats.clients')}</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-blue-800 rounded-lg p-6">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-blue-200">{t('stats.years')}</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-blue-800 rounded-lg p-6">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-blue-200">{t('stats.countries')}</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-blue-800 rounded-lg p-6">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-blue-200">{t('stats.support')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}