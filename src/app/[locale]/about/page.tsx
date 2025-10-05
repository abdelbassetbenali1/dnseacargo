import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n';
import Link from 'next/link';

// Generate static params for all supported locales
export async function generateStaticParams() {
  return [
    { locale: 'ar' },
    { locale: 'en' },
    { locale: 'fr' }
  ];
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  // Validate locale
  if (!isValidLocale(locale)) {
    notFound();
  }
  
  const t = await getTranslations({ locale });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-blue-100">
              شركة رائدة في مجال الخدمات اللوجستية والشحن البحري
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                قصة شركتنا
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('about.description')}
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                تأسست شركة DNS للشحن البحري بهدف تقديم حلول لوجستية متكاملة وموثوقة لعملائنا. 
                نحن نفخر بخبرتنا الطويلة في هذا المجال والتي تمتد لأكثر من 15 عامًا.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                نسعى دائمًا لتطوير خدماتنا ومواكبة أحدث التقنيات في مجال الشحن والخدمات اللوجستية 
                لضمان تقديم أفضل الخدمات لعملائنا الكرام.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">رؤيتنا ورسالتنا</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">الرؤية</h4>
                    <p className="text-orange-100">
                      أن نكون الشركة الرائدة في مجال الخدمات اللوجستية والشحن البحري في المنطقة
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">الرسالة</h4>
                    <p className="text-orange-100">
                      تقديم خدمات لوجستية متميزة وموثوقة تلبي احتياجات عملائنا وتتجاوز توقعاتهم
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              إنجازاتنا بالأرقام
            </h2>
            <p className="text-xl text-gray-600">
              أرقام تعكس ثقة عملائنا وجودة خدماتنا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">15+</div>
              <p className="text-xl text-gray-700">{t('about.experience')}</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">500+</div>
              <p className="text-xl text-gray-700">{t('about.clients')}</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">10K+</div>
              <p className="text-xl text-gray-700">{t('about.shipments')}</p>
            </div>
            <div className="text-center bg-white rounded-lg p-6 shadow-lg">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">50+</div>
              <p className="text-xl text-gray-700">دولة نخدمها</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              قيمنا الأساسية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              القيم التي نؤمن بها وتوجه عملنا اليومي
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">الالتزام</h3>
              <p className="text-gray-600">
                نلتزم بتقديم خدماتنا في الوقت المحدد وبأعلى معايير الجودة
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">الشراكة</h3>
              <p className="text-gray-600">
                نبني علاقات طويلة الأمد مع عملائنا وشركائنا حول العالم
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">الابتكار</h3>
              <p className="text-gray-600">
                نسعى دائمًا لتطوير حلول مبتكرة تلبي احتياجات السوق المتغيرة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              فريق العمل
            </h2>
            <p className="text-xl text-gray-600">
              فريق من الخبراء المتخصصين في مجال الشحن والخدمات اللوجستية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">أحمد محمد</h3>
              <p className="text-orange-500 font-semibold mb-3">المدير العام</p>
              <p className="text-gray-600">
                خبرة تزيد عن 20 عامًا في مجال الشحن البحري والخدمات اللوجستية
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">فاطمة علي</h3>
              <p className="text-orange-500 font-semibold mb-3">مدير العمليات</p>
              <p className="text-gray-600">
                متخصصة في إدارة العمليات اللوجستية والتخليص الجمركي
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">محمد حسن</h3>
              <p className="text-orange-500 font-semibold mb-3">مدير خدمة العملاء</p>
              <p className="text-gray-600">
                خبير في تقديم الدعم والمساعدة للعملاء على مدار الساعة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            انضم إلى عائلة عملائنا
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            اكتشف كيف يمكننا مساعدتك في تحقيق أهدافك اللوجستية
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {t('hero.getQuote')}
          </Link>
        </div>
      </section>
    </div>
  );
}