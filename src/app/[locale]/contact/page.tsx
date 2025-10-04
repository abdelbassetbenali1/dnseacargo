'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactPage() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-blue-100">
              نحن هنا لمساعدتك في جميع احتياجاتك اللوجستية
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                احصل على عرض سعر مجاني
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      رقم الهاتف *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="+966 50 123 4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      الخدمة المطلوبة
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">اختر الخدمة</option>
                      <option value="sea-freight">الشحن البحري</option>
                      <option value="customs">التخليص الجمركي</option>
                      <option value="warehousing">التخزين</option>
                      <option value="insurance">التأمين</option>
                      <option value="transport">النقل البري</option>
                      <option value="logistics">الخدمات اللوجستية</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    تفاصيل الطلب *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="اكتب تفاصيل طلبك هنا..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  إرسال الطلب
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                معلومات التواصل
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">العنوان</h3>
                    <p className="text-gray-600">
                      شارع الملك فهد، حي الميناء<br />
                      الدمام 31411، المملكة العربية السعودية
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">الهاتف</h3>
                    <p className="text-gray-600">
                      +966 13 123 4567<br />
                      +966 50 123 4567
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">البريد الإلكتروني</h3>
                    <p className="text-gray-600">
                      info@dnseacargo.com<br />
                      sales@dnseacargo.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">ساعات العمل</h3>
                    <p className="text-gray-600">
                      الأحد - الخميس: 8:00 ص - 6:00 م<br />
                      السبت: 9:00 ص - 2:00 م
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="mt-8">
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500">خريطة الموقع</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              الأسئلة الشائعة
            </h2>
            <p className="text-xl text-gray-600">
              إجابات على أكثر الأسئلة شيوعاً حول خدماتنا
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                كم يستغرق الشحن البحري؟
              </h3>
              <p className="text-gray-600">
                يختلف وقت الشحن حسب الوجهة، ولكن عادة ما يستغرق من 15-30 يوماً للشحنات الدولية.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                هل تقدمون خدمة التتبع؟
              </h3>
              <p className="text-gray-600">
                نعم، نوفر خدمة تتبع الشحنات على مدار الساعة عبر موقعنا الإلكتروني أو التطبيق.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                ما هي أنواع البضائع التي تشحنونها؟
              </h3>
              <p className="text-gray-600">
                نشحن جميع أنواع البضائع بما في ذلك البضائع العامة، المواد الغذائية، المركبات، والبضائع الخطرة.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                هل تقدمون خدمة التأمين؟
              </h3>
              <p className="text-gray-600">
                نعم، نقدم خدمات التأمين الشاملة لحماية بضائعكم ضد جميع المخاطر أثناء النقل.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}