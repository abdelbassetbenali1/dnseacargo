import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/lib/i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,
  
  // Use 'as-needed' instead of 'always' to avoid unnecessary redirects
  localePrefix: 'as-needed',
  
  // Alternate links for SEO
  alternateLinks: true,
  
  // Locale detection
  localeDetection: true
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',
    
    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(ar|en|fr)/:path*',
    
    // Match all other paths except API routes, Next.js internals, and static files
    '/((?!api|_next|_vercel|.*\..*).*)' 
  ]
};