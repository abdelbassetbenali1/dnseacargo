export const locales = ['ar', 'en', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ar';

export const localeNames: Record<Locale, string> = {
  ar: 'العربية',
  en: 'English',
  fr: 'Français'
};

export const localeFlags: Record<Locale, string> = {
  ar: '🇸🇦',
  en: '🇺🇸', 
  fr: '🇫🇷'
};

export const rtlLocales: Locale[] = ['ar'];

export function isRtlLocale(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

export function getLocaleDirection(locale: Locale): 'ltr' | 'rtl' {
  return isRtlLocale(locale) ? 'rtl' : 'ltr';
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}