import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function NotFound() {
  const t = await getTranslations();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            {t('common.pageNotFound')}
          </h2>
          <p className="text-gray-600 mb-8">
            {t('common.pageNotFoundDescription')}
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('common.goHome')}
          </Link>
          
          <div className="mt-4">
            <Link href="/contact" className="text-blue-600 hover:underline text-sm">
              {t('navigation.contact')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}