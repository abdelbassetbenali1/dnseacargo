'use client';

import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentLocale = useLocale();

  const switchLocale = (locale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);
  };

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
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => switchLocale('ar')}
                className={`px-2 py-1 rounded ${
                  currentLocale === 'ar' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                العربية
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`px-2 py-1 rounded ${
                  currentLocale === 'en' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => switchLocale('fr')}
                className={`px-2 py-1 rounded ${
                  currentLocale === 'fr' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                FR
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-orange-500 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}