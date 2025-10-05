import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale, isValidLocale } from '../lib/i18n';

export default getRequestConfig(async ({ requestLocale }) => {
  // `requestLocale` contains the locale that was resolved by the middleware
  let locale = await requestLocale;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !isValidLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;

  return {
    locale: currentLocale,
    messages: (await import(`../../messages/${currentLocale}.json`)).default,
    timeZone: 'UTC',
    now: new Date()
  };
});