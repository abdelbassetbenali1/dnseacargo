'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ServicesPage() {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'ar';

  const services = [
    {
      key: 'seaFreight',
      icon: '🚢',
      color: 'from-blue-500 to-blue-700',
      features: ['fcl', 'lcl', 'bulk', 'roro']
    },
    {
      key: 'customs',
      icon: '📋',
      color: 'from-green-500 to-green-700',
      features: ['documents', 'fees', 'coordination']
    },
    {
      key: 'warehousing',
      icon: '🏭',
      color: 'from-purple-500 to-purple-700',
      features: ['storage', 'cold', 'temporary']
    },
    {
      key: 'insurance',
      icon: '🛡️',
      color: 'from-red-500 to-red-700',
      features: ['damage', 'marine']
    },
    {
      key: 'transport',
      icon: '🚛',
      color: 'from-yellow-500 to-yellow-700',
      features: ['pickup', 'delivery']
    },
    {
      key: 'logistics',
      icon: '📊',
      color: 'from-indigo-500 to-indigo-700',
      features: ['tracking', 'reports', 'doorToDoor']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-blue-100">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.key} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold">
                      {t(`services.${service.key}.title`)}
                    </h3>
                  </div>
                  <p className="text-lg opacity-90">
                    {t(`services.${service.key}.description`)}
                  </p>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">الخدمات المتضمنة:</h4>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">
                          {t(`services.${service.key}.${feature}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={`/${currentLocale}/services/${service.key.toLowerCase().replace(/([A-Z])/g, '-$1').toLowerCase()}`}
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    {t('hero.learnMore')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              لماذا تختار DNS Sea Cargo؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم خدمات متميزة بأعلى معايير الجودة والأمان
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">سرعة في التنفيذ</h3>
              <p className="text-gray-600">نضمن تنفيذ جميع الخدمات في أسرع وقت ممكن</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">أمان وموثوقية</h3>
              <p className="text-gray-600">حماية كاملة لبضائعك مع أعلى معايير الأمان</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">تغطية عالمية</h3>
              <p className="text-gray-600">شبكة واسعة من الشركاء حول العالم</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">أسعار تنافسية</h3>
              <p className="text-gray-600">أفضل الأسعار في السوق مع جودة عالية</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            هل تحتاج إلى خدماتنا؟
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            تواصل معنا الآن للحصول على عرض سعر مخصص لاحتياجاتك
          </p>
          <Link
            href={`/${currentLocale}/contact`}
            className="inline-block bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {t('hero.getQuote')}
          </Link>
        </div>
      </section>
    </div>
  );
}