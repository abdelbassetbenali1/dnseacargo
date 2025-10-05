'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CustomsPage() {
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] || 'ar';

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              خدمات التخليص الجمركي
            </h1>
            <p className="text-xl text-green-100">
              تخليص جمركي سريع وموثوق لجميع أنواع البضائع
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              خدمات التخليص الجمركي الشاملة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم خدمات تخليص جمركي متكاملة لتسهيل عملية استيراد وتصدير بضائعكم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Document Preparation */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">📋</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                إعداد المستندات
              </h3>
              <p className="text-gray-600 mb-6">
                إعداد وتجهيز جميع المستندات الجمركية المطلوبة
              </p>
              <ul className="text-right space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  الفواتير التجارية
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  شهادات المنشأ
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  بوليصة الشحن
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  قوائم التعبئة
                </li>
              </ul>
            </div>

            {/* Fee Payment */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">💳</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                دفع الرسوم والضرائب
              </h3>
              <p className="text-gray-600 mb-6">
                دفع جميع الرسوم الجمركية والضرائب المستحقة
              </p>
              <ul className="text-right space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  الرسوم الجمركية
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  ضريبة القيمة المضافة
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  رسوم الخدمات
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  الرسوم الإضافية
                </li>
              </ul>
            </div>

            {/* Port Coordination */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                التنسيق مع الجهات
              </h3>
              <p className="text-gray-600 mb-6">
                التنسيق مع الميناء وهيئة الجمارك لإطلاق البضائع
              </p>
              <ul className="text-right space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  هيئة الجمارك السعودية
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  موانئ المملكة
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  الجهات الرقابية
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  شركات الشحن
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              عملية التخليص الجمركي
            </h2>
            <p className="text-xl text-gray-600">
              خطوات مبسطة لضمان تخليص سريع وآمن لبضائعكم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">استلام المستندات</h3>
              <p className="text-gray-600">
                استلام وفحص جميع المستندات المطلوبة للتخليص
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">تقديم البيان</h3>
              <p className="text-gray-600">
                تقديم البيان الجمركي إلى هيئة الجمارك
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">الفحص والتقييم</h3>
              <p className="text-gray-600">
                فحص البضائع وتقييم الرسوم الجمركية
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">إطلاق البضائع</h3>
              <p className="text-gray-600">
                دفع الرسوم وإطلاق البضائع من الجمارك
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
              المستندات المطلوبة
            </h2>
            <p className="text-xl text-gray-600">
              قائمة شاملة بالمستندات اللازمة للتخليص الجمركي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                مستندات الاستيراد
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">📄</span>
                  <span>الفاتورة التجارية الأصلية</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">📄</span>
                  <span>شهادة المنشأ</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">📄</span>
                  <span>بوليصة الشحن (Bill of Lading)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">📄</span>
                  <span>قائمة التعبئة (Packing List)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">📄</span>
                  <span>شهادة التأمين</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">📄</span>
                  <span>الشهادات الصحية (إن وجدت)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                مستندات التصدير
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">📄</span>
                  <span>الفاتورة التجارية</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">📄</span>
                  <span>شهادة المنشأ السعودية</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">📄</span>
                  <span>إذن التصدير</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">📄</span>
                  <span>قائمة التعبئة</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">📄</span>
                  <span>شهادة الجودة</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">📄</span>
                  <span>التراخيص الخاصة (إن وجدت)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              مميزات خدماتنا
            </h2>
            <p className="text-xl text-gray-600">
              لماذا تختار خدمات التخليص الجمركي لدينا؟
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">سرعة في التخليص</h3>
              <p className="text-gray-600">
                تخليص سريع وفعال يوفر الوقت والتكاليف
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">فريق متخصص</h3>
              <p className="text-gray-600">
                فريق من الخبراء المعتمدين في التخليص الجمركي
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🔄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">متابعة مستمرة</h3>
              <p className="text-gray-600">
                متابعة مستمرة لحالة التخليص وتحديثات فورية
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            تحتاج خدمات تخليص جمركي؟
          </h2>
          <p className="text-xl mb-8 text-green-100">
            تواصل معنا اليوم للحصول على خدمة تخليص جمركي سريعة وموثوقة
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
              className="inline-block border-2 border-white hover:bg-white hover:text-green-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              عرض جميع الخدمات
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}