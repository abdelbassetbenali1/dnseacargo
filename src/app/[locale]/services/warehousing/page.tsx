'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function WarehousingPage() {
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'ar';

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              خدمات التخزين
            </h1>
            <p className="text-xl text-purple-100">
              حلول تخزين متطورة وآمنة لجميع أنواع البضائع
            </p>
          </div>
        </div>
      </section>

      {/* Storage Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              أنواع خدمات التخزين
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نوفر مجموعة متنوعة من حلول التخزين المتخصصة لتلبية احتياجاتكم المختلفة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Port Storage */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  تخزين الموانئ
                </h3>
                <p className="text-blue-100">Port Storage</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  تخزين البضائع في مخازن الموانئ أو مخازن وسيطة قريبة من الميناء
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    مخازن مغطاة ومفتوحة
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    أمان على مدار الساعة
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    سهولة الوصول للشحن
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    معدات رفع متطورة
                  </li>
                </ul>
              </div>
            </div>

            {/* Cold Storage */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  التخزين المبرد
                </h3>
                <p className="text-cyan-100">Cold Storage</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  مستودعات مبردة متخصصة للمنتجات الغذائية والدوائية
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    تحكم دقيق في درجة الحرارة
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    مراقبة الرطوبة
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    شهادات الجودة
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    نظام إنذار متقدم
                  </li>
                </ul>
              </div>
            </div>

            {/* Temporary Storage */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  التخزين المؤقت
                </h3>
                <p className="text-orange-100">Temporary Storage</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  تخزين مؤقت حتى استكمال الإجراءات الجمركية والتخليص
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    مرونة في المدة
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    أسعار تنافسية
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    سرعة في التسليم
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    تسهيلات جمركية
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              مميزات مستودعاتنا
            </h2>
            <p className="text-xl text-gray-600">
              مرافق تخزين حديثة ومجهزة بأحدث التقنيات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">مساحات واسعة</h3>
              <p className="text-gray-600">
                مستودعات بمساحات متنوعة تناسب جميع أحجام البضائع
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">أمان متقدم</h3>
              <p className="text-gray-600">
                أنظمة أمان متطورة مع مراقبة على مدار الساعة
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">إدارة المخزون</h3>
              <p className="text-gray-600">
                نظام إدارة مخزون متطور لتتبع البضائع
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🚛</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">سهولة الوصول</h3>
              <p className="text-gray-600">
                موقع استراتيجي مع سهولة الوصول للشاحنات
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              عملية التخزين
            </h2>
            <p className="text-xl text-gray-600">
              خطوات منظمة لضمان تخزين آمن وفعال لبضائعكم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">الاستلام</h3>
              <p className="text-gray-600">
                استلام البضائع وفحصها وتسجيلها في النظام
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">التصنيف</h3>
              <p className="text-gray-600">
                تصنيف البضائع حسب النوع والمتطلبات الخاصة
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">التخزين</h3>
              <p className="text-gray-600">
                وضع البضائع في المكان المناسب مع التوثيق
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">التسليم</h3>
              <p className="text-gray-600">
                تجهيز وتسليم البضائع عند الطلب
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Storage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              تخزين متخصص
            </h2>
            <p className="text-xl text-gray-600">
              حلول تخزين مخصصة لأنواع مختلفة من البضائع
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                البضائع الخطرة
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">⚠️</span>
                  <span>مخازن معتمدة للمواد الخطرة</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">⚠️</span>
                  <span>أنظمة إطفاء متطورة</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">⚠️</span>
                  <span>تدريب متخصص للعاملين</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">⚠️</span>
                  <span>شهادات السلامة المطلوبة</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                البضائع عالية القيمة
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-3">💎</span>
                  <span>مخازن عالية الأمان</span>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-3">💎</span>
                  <span>تأمين شامل</span>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-3">💎</span>
                  <span>مراقبة مستمرة</span>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-3">💎</span>
                  <span>وصول محدود ومراقب</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            تحتاج حلول تخزين؟
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            تواصل معنا للحصول على أفضل حلول التخزين المناسبة لاحتياجاتكم
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
              className="inline-block border-2 border-white hover:bg-white hover:text-purple-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              عرض جميع الخدمات
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}