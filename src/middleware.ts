import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['ar', 'en', 'fr'],

  // Used when no locale matches
  defaultLocale: 'ar'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/((?!api|_next|_vercel|.*\\..*).*)']
};