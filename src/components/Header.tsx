'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { type Locale } from '../lib/i18n';

export default function Header() {
  const t = useTranslations('nav');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentLocale = useLocale() as Locale;

  const navItems = [
    { key: 'home', href: `/${currentLocale}` },
    { key: 'services', href: `/${currentLocale}/services` },
    { key: 'about', href: `/${currentLocale}/about` },
    { key: 'contact', href: `/${currentLocale}/contact` },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${currentLocale}`} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">DNS</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Sea Cargo</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Right Side - Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher - Hidden on mobile, shown on desktop */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            {/* Get Quote Button - Hidden on mobile */}
            <Link
              href={`/${currentLocale}/contact`}
              className="hidden md:inline-flex items-center px-4 py-2 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-200"
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
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="block py-3 px-2 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg font-medium transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>
            
            {/* Mobile Language Switcher & Get Quote */}
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
              <div className="px-2">
                <LanguageSwitcher />
              </div>
              <Link
                href={`/${currentLocale}/contact`}
                className="block w-full text-center py-3 px-4 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors duration-200"
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