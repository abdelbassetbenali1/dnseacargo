'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SeaFreightPage() {
  const t = useTranslations();
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'ar';

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              خدمات الشحن البحري
            </h1>
            <p className="text-xl text-blue-100">
              حلول شحن بحري متكاملة لجميع أنواع البضائع
            </p>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              أنواع خدمات الشحن البحري
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من خدمات الشحن البحري لتلبية جميع احتياجاتكم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FCL */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  شحن الحاويات الكاملة (FCL)
                </h3>
                <p className="text-orange-100">Full Container Load</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  خدمة شحن الحاويات الكاملة مخصصة للشحنات الكبيرة التي تملأ حاوية كاملة
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    حاويات 20 و 40 قدم
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    حاويات مبردة ومكيفة
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    حاويات مفتوحة الأعلى
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    حاويات مسطحة
                  </li>
                </ul>
              </div>
            </div>

            {/* LCL */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  شحن الحاويات المشتركة (LCL)
                </h3>
                <p className="text-blue-100">Less than Container Load</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  مثالي للشحنات الصغيرة والمتوسطة التي لا تحتاج لحاوية كاملة
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    توفير في التكاليف
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    مرونة في الكميات
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    تجميع آمن للبضائع
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    شحنات منتظمة
                  </li>
                </ul>
              </div>
            </div>

            {/* Bulk Cargo */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  شحن البضائع العامة
                </h3>
                <p className="text-green-100">Bulk Cargo</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  شحن البضائع السائبة والمواد الخام بكميات كبيرة
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    الحبوب والمواد الغذائية
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    المواد الكيميائية
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    المعادن والخامات
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    الفحم والأسمدة
                  </li>
                </ul>
              </div>
            </div>

            {/* RORO */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  شحن المركبات (RORO)
                </h3>
                <p className="text-purple-100">Roll On Roll Off</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  شحن السيارات والمركبات والمعدات الثقيلة
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    السيارات الشخصية
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    الشاحنات والحافلات
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    المعدات الثقيلة
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    المقطورات والمعدات
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              عملية الشحن البحري
            </h2>
            <p className="text-xl text-gray-600">
              خطوات بسيطة وواضحة لضمان وصول بضائعكم بأمان
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">طلب العرض</h3>
              <p className="text-gray-600">
                تقديم تفاصيل الشحنة والحصول على عرض سعر مفصل
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">حجز المساحة</h3>
              <p className="text-gray-600">
                تأكيد الحجز وتحديد موعد استلام البضائع
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">التحميل والشحن</h3>
              <p className="text-gray-600">
                تحميل البضائع وبدء رحلة الشحن البحري
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">التسليم</h3>
              <p className="text-gray-600">
                وصول البضائع وتسليمها في الوجهة المحددة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              مميزات خدماتنا
            </h2>
            <p className="text-xl text-gray-600">
              لماذا تختار خدمات الشحن البحري لدينا؟
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🚢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">شبكة عالمية</h3>
              <p className="text-gray-600">
                نصل إلى أكثر من 200 ميناء حول العالم مع شركاء موثوقين
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">⏰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">مواعيد منتظمة</h3>
              <p className="text-gray-600">
                رحلات منتظمة ومواعيد ثابتة لضمان وصول بضائعكم في الوقت المحدد
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">أمان وحماية</h3>
              <p className="text-gray-600">
                أعلى معايير الأمان والحماية لضمان سلامة بضائعكم
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            احصل على عرض سعر مخصص
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            تواصل معنا اليوم للحصول على أفضل الأسعار لخدمات الشحن البحري
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${currentLocale}/contact`}
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              احصل على عرض سعر
            </Link>
            <Link
              href={`/${currentLocale}/services`}
              className="inline-block border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              عرض جميع الخدمات
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}