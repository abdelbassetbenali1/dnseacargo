'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function InsurancePage() {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'ar';

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              تأمين البضائع
            </h1>
            <p className="text-xl text-indigo-100">
              حماية شاملة لبضائعكم ضد جميع المخاطر أثناء النقل
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              أنواع التأمين
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم تغطية تأمينية شاملة لحماية استثماراتكم أثناء النقل البحري
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Damage/Loss Insurance */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  تأمين ضد التلف والفقدان
                </h3>
                <p className="text-red-100">Damage & Loss Coverage</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  حماية شاملة ضد التلف أو الفقدان الكلي أو الجزئي للبضائع
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    التلف أثناء التحميل والتفريغ
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    الفقدان الكلي أو الجزئي
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    التلف بسبب سوء التعامل
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    أضرار التعبئة والتغليف
                  </li>
                </ul>
              </div>
            </div>

            {/* Marine Risks Insurance */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  تأمين ضد المخاطر البحرية
                </h3>
                <p className="text-blue-100">Marine Risks Coverage</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  تغطية ضد المخاطر البحرية الطبيعية والاستثنائية
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    الغرق والانقلاب
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    العواصف والأعاصير
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    القرصنة والسرقة
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    الحرائق والانفجارات
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              خيارات التغطية
            </h2>
            <p className="text-xl text-gray-600">
              اختر نوع التغطية التأمينية المناسبة لاحتياجاتكم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Coverage */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                التغطية الأساسية
              </h3>
              <p className="text-gray-600 mb-6">
                تغطية ضد المخاطر الأساسية أثناء النقل البحري
              </p>
              <ul className="text-right space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  الغرق والانقلاب
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  الحرائق
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  التصادم
                </li>
              </ul>
              <div className="text-2xl font-bold text-green-500 mb-2">0.15%</div>
              <p className="text-gray-500">من قيمة البضاعة</p>
            </div>

            {/* Comprehensive Coverage */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-2 border-orange-500">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                التغطية الشاملة
              </h3>
              <p className="text-gray-600 mb-6">
                تغطية شاملة ضد جميع المخاطر والأضرار
              </p>
              <ul className="text-right space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  جميع المخاطر البحرية
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  التلف والفقدان
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  القرصنة والسرقة
                </li>
              </ul>
              <div className="text-2xl font-bold text-orange-500 mb-2">0.25%</div>
              <p className="text-gray-500">من قيمة البضاعة</p>
              <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm mt-4">
                الأكثر شعبية
              </div>
            </div>

            {/* Premium Coverage */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">💎</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                التغطية المتميزة
              </h3>
              <p className="text-gray-600 mb-6">
                تغطية متميزة مع خدمات إضافية وحماية موسعة
              </p>
              <ul className="text-right space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  تغطية شاملة + إضافات
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  تعويض سريع
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  خدمة عملاء مخصصة
                </li>
              </ul>
              <div className="text-2xl font-bold text-purple-500 mb-2">0.35%</div>
              <p className="text-gray-500">من قيمة البضاعة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Claims Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              عملية المطالبة
            </h2>
            <p className="text-xl text-gray-600">
              خطوات بسيطة وسريعة للحصول على التعويض
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">الإبلاغ</h3>
              <p className="text-gray-600">
                إبلاغ فوري عن الحادث أو الضرر
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">التوثيق</h3>
              <p className="text-gray-600">
                جمع وتقديم المستندات المطلوبة
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">التقييم</h3>
              <p className="text-gray-600">
                تقييم الأضرار من قبل خبراء مختصين
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">التعويض</h3>
              <p className="text-gray-600">
                صرف التعويض المستحق بسرعة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Insurance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              لماذا تختار تأميننا؟
            </h2>
            <p className="text-xl text-gray-600">
              مميزات تجعلنا الخيار الأفضل لتأمين بضائعكم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">تعويض سريع</h3>
              <p className="text-gray-600">
                معالجة سريعة للمطالبات وصرف التعويضات في أقل وقت ممكن
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">شركاء موثوقون</h3>
              <p className="text-gray-600">
                شراكة مع أفضل شركات التأمين العالمية والمحلية
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">📞</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">دعم مستمر</h3>
              <p className="text-gray-600">
                فريق دعم متخصص متاح على مدار الساعة لمساعدتكم
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              المستندات المطلوبة للتأمين
            </h2>
            <p className="text-xl text-gray-600">
              المستندات اللازمة لإصدار بوليصة التأمين
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    مستندات أساسية
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-3">📄</span>
                      <span>الفاتورة التجارية</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-3">📄</span>
                      <span>قائمة التعبئة</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-3">📄</span>
                      <span>بوليصة الشحن</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-3">📄</span>
                      <span>شهادة المنشأ</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    مستندات إضافية
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">📄</span>
                      <span>شهادة الجودة</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">📄</span>
                      <span>تقرير المسح</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">📄</span>
                      <span>صور البضائع</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-3">📄</span>
                      <span>تفاصيل التعبئة</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            احم استثمارك اليوم
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            احصل على عرض تأمين مخصص لبضائعكم مع أفضل الأسعار والتغطية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${currentLocale}/contact`}
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              احصل على عرض تأمين
            </Link>
            <Link
              href={`/${currentLocale}/services`}
              className="inline-block border-2 border-white hover:bg-white hover:text-indigo-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              عرض جميع الخدمات
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}