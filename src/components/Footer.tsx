'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations();
  const currentLocale = useLocale();
  const isRTL = currentLocale === 'ar';

  return (
    <footer className="bg-transparent py-16 px-4 lg:px-8" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-16`}>
          
          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">{t('footer.company.title')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-slate-800 transition-colors text-sm block">
                  {t('footer.company.aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-600 hover:text-slate-800 transition-colors text-sm block">
                  {t('footer.company.ourTeam')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-slate-800 transition-colors text-sm block">
                  {t('footer.company.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">{t('footer.services.title')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/worldwide" className="text-gray-600 hover:text-slate-800 transition-colors text-sm block">
                  {t('footer.services.worldwideShipping')}
                </Link>
              </li>
              <li>
                <Link href="/services/sea" className="text-gray-600 hover:text-slate-800 transition-colors text-sm block">
                  {t('footer.services.seaShipping')}
                </Link>
              </li>
              <li>
                <Link href="/services/ground" className="text-gray-600 hover:text-slate-800 transition-colors text-sm block">
                  {t('footer.services.groundShipping')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Shipping Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">{t('footer.shipping.title')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/tracking" className="text-gray-600 hover:text-slate-800 transition-colors text-sm block">
                  {t('footer.shipping.trackPackages')}
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-gray-600 hover:text-slate-800 transition-colors text-sm block">
                  {t('footer.shipping.calculateFare')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">{t('footer.support.title')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/support" className="text-gray-600 hover:text-slate-800 transition-colors text-sm block">
                  {t('footer.support.customerCare')}
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="text-gray-600 hover:text-slate-800 transition-colors text-sm block">
                  {t('footer.support.insuranceClaim')}
                </Link>
              </li>
            </ul>
          </div>

          {/* News Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">{t('footer.news.title')}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/press" className="text-gray-600 hover:text-slate-800 transition-colors text-sm block">
                  {t('footer.news.pressRelease')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-slate-800 transition-colors text-sm block">
                  {t('footer.news.ourBlog')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`flex flex-col lg:flex-row items-center justify-between gap-8 pt-8 border-t border-gray-200 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Left Side - Logo and Copyright */}
          <div className={`flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold text-slate-800">
                <span className="text-green-400">U</span>thao
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-sm text-gray-600">
              {t('footer.bottom.copyright')}
            </div>
          </div>

          {/* Right Side - CTA and Social Links */}
          <div className={`flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            
            {/* CTA Section */}
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="text-slate-800 font-medium text-lg">{t('footer.bottom.readyToShip')}</span>
              <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Link
                  href="/contact"
                  className="bg-green-400 hover:bg-green-500 text-slate-900 px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  {t('footer.bottom.contactUs')}
                </Link>
                <Link
                  href="/quote"
                  className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <svg className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Links and Social */}
        <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-gray-100 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
          
          {/* Legal Links */}
          <div className={`flex items-center gap-6 text-sm text-gray-600 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Link href="/terms" className="hover:text-slate-800 transition-colors">
              {t('footer.bottom.termsOfUse')}
            </Link>
            <Link href="/privacy" className="hover:text-slate-800 transition-colors">
              {t('footer.bottom.privacy')}
            </Link>
            <a href={`mailto:${t('footer.bottom.email')}`} className="hover:text-slate-800 transition-colors">
              {t('footer.bottom.email')}
            </a>
          </div>

          {/* Social Links */}
          <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <a 
              href="#" 
              className="w-8 h-8 bg-gray-100 hover:bg-slate-800 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="w-8 h-8 bg-gray-100 hover:bg-slate-800 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.218-3.323 1.218zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.875-.875-1.365-2.026-1.365-3.323s.49-2.448 1.365-3.323c.875-.926 2.026-1.416 3.323-1.416s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="w-8 h-8 bg-gray-100 hover:bg-slate-800 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}