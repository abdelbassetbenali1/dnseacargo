// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/lib/i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
  alternateLinks: true,
  localeDetection: false // مهم جداً لتفادي undefined locale في الإنتاج
});

export const config = {
  matcher: ['/', '/(ar|en|fr)/:path*']
};
