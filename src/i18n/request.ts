import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Can be imported from a shared config
const locales = ['ar', 'en', 'fr'] as const;
type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (typeof locale !== 'string' || !locales.includes(locale as Locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;

  return {
    locale: currentLocale,
    messages: (await import(`../../messages/${currentLocale}.json`)).default
  };
});