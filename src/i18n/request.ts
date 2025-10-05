import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['ar', 'en', 'fr'] as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || 'ar';

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
    timeZone: 'UTC',
    now: new Date(),
  };
});
