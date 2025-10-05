"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

export default function CTA() {
  const t = useTranslations();

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* CTA Container with Hero-inspired styling */}
        <div className="bg-slate-800 rounded-3xl overflow-hidden relative min-h-[400px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/cta-banner.svg"
              alt="CTA Background"
              fill
              className="object-cover opacity-5"
            />
            <div className="absolute inset-0 bg-slate-800/50"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center p-8 lg:p-12 text-white">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="bg-green-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                Get Started Today
              </span>
            </div>
            
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {t('cta.title')}
            </h2>
            
            {/* Description */}
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('cta.description')}
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-green-400 hover:bg-green-500 text-slate-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                {t('cta.button')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-3 border-2 border-gray-300 hover:bg-white hover:text-slate-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
              >
                View Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}