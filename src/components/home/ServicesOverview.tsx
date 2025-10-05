"use client";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useState, useEffect } from "react";

export default function ServicesOverview() {
  const t = useTranslations();
  const locale = useLocale();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Determine if current locale is RTL
  const isRTL = locale === 'ar';

  const services = [
    {
      icon: "/Transportation.jpg",
      image: "/Transportation.jpg",
      title: t('services.overview.groundTransport.title'),
      description: t('services.overview.groundTransport.description'),
      features: [
        t('services.overview.groundTransport.features.tracking'),
        t('services.overview.groundTransport.features.express'),
        t('services.overview.groundTransport.features.secure'),
        t('services.overview.groundTransport.features.support')
      ]
    },
    {
      icon: "/containers.svg",
      image: "/ocean.jpg", 
      title: t('services.overview.oceanFreight.title'),
      description: t('services.overview.oceanFreight.description'),
      features: [
        t('services.overview.oceanFreight.features.container'),
        t('services.overview.oceanFreight.features.bulk'),
        t('services.overview.oceanFreight.features.portToPort'),
        t('services.overview.oceanFreight.features.customs')
      ]
    },
    {
      icon: "/Wearhouse.jpg",
      image: "/Wearhouse.jpg",
      title: t('services.overview.warehousing.title'),
      description: t('services.overview.warehousing.description'),
      features: [
        t('services.overview.warehousing.features.climate'),
        t('services.overview.warehousing.features.security'),
        t('services.overview.warehousing.features.inventory'),
        t('services.overview.warehousing.features.distribution')
      ]
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  return (
    <section className={`bg-gray-50 py-20 px-4 lg:px-8 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
      
        {/* Full-Width Slider */}
        <div className="relative">
          {/* Slides Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${isRTL ? currentSlide * 100 : -currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  {/* Full-Width Card */}
                  <div className="relative overflow-hidden min-h-[500px] lg:min-h-[300px]">
                    <div className={`grid lg:grid-cols-2 h-full ${isRTL ? 'lg:grid-flow-col-dense' : ''}`}>
                      
                      {/* Left Side - Rounded Image */}
                      <div className={`relative flex items-center justify-center p-8 lg:p-16 ${isRTL ? 'lg:col-start-2' : ''}`}>
                        {/* Rounded Image Container */}
                        <div className="relative">
                          <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-green-400/20 to-slate-800/20 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                            <Image
                              src={service.image}
                              alt={service.title}
                              width={320}
                              height={480}
                              className="w-64 h-64 lg:w-80 lg:h-90 object-cover rounded-2xl"
                            />
                          </div>
                          
                          {/* Floating Badge */}
                          <div className={`absolute -top-4 bg-green-400 text-slate-900 px-6 py-3 rounded-full font-bold text-lg shadow-xl ${isRTL ? '-left-4' : '-right-4'}`}>
                            #{String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Content */}
                      <div className={`flex items-center p-8 lg:p-16 ${isRTL ? 'lg:col-start-1 text-right' : 'text-left'}`}>
                        <div className="w-full max-w-2xl">
                          {/* Service Category */}
                          <div className="mb-6">
                            <span className="inline-block bg-green-400/20 text-green-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider border border-green-400/30">
                              {t('services.overview.premiumService')}
                            </span>
                          </div>
                          
                          {/* Title */}
                          <h3 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-8 leading-tight">
                            {service.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-xl text-gray-600 leading-relaxed mb-10">
                            {service.description}
                          </p>
                          
                          {/* Features Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                                <span className="text-gray-700 font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <div>
                            <Link
                              href="/services"
                              className="inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
                            >
                              {t('services.overview.exploreService')}
                              <svg className={`w-6 h-6 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className={`flex justify-center gap-3 mt-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-green-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
}