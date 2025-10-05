'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { type Locale } from '../lib/i18n';

export default function Header() {
  const t = useTranslations('nav');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'services', href: '/services' },
    { key: 'about', href: '/about' },
    { key: 'contact', href: '/contact' },
  ];

  return (
    <header className="bg-gray-50 sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">Dera Al Nuhas</span>
            </div>
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-slate-700 hover:text-slate-900 font-medium text-lg transition-colors duration-200"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Right Side - Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-6">
            {/* Language Switcher - Hidden on mobile, shown on desktop */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            {/* Get Quote Button - Hidden on mobile */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {t('getQuote')}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-200">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="block py-4 px-3 text-slate-700 hover:text-slate-900 hover:bg-gray-100 rounded-xl font-medium text-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>
            
            {/* Mobile Language Switcher & Get Quote */}
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
              <div className="px-3">
                <LanguageSwitcher />
              </div>
              <Link
                href="/contact"
                className="block w-full text-center py-4 px-6 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-200 shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('getQuote')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}