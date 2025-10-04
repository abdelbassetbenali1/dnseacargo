import { useTranslations } from 'next-intl';
import { Truck, MapPin, Clock, Shield, CheckCircle, ArrowRight } from 'lucide-react';

export default function TransportPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('services.transport.title')}
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              {t('services.transport.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-2">
                <Truck className="w-6 h-6" />
                <span>{t('services.transport.features.reliable')}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                <span>{t('services.transport.features.nationwide')}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-2">
                <Clock className="w-6 h-6" />
                <span>{t('services.transport.features.timely')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('services.transport.services.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('services.transport.services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Road Transport */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.transport.types.road.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('services.transport.types.road.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.transport.types.road.features.trucks')}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.transport.types.road.features.trailers')}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.transport.types.road.features.containers')}
                </li>
              </ul>
            </div>

            {/* Rail Transport */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.transport.types.rail.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('services.transport.types.rail.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.transport.types.rail.features.bulk')}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.transport.types.rail.features.containers')}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.transport.types.rail.features.specialized')}
                </li>
              </ul>
            </div>

            {/* Multimodal Transport */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.transport.types.multimodal.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('services.transport.types.multimodal.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.transport.types.multimodal.features.seamless')}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.transport.types.multimodal.features.costEffective')}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.transport.types.multimodal.features.tracking')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('services.transport.process.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('services.transport.process.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t('services.transport.process.steps.planning.title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('services.transport.process.steps.planning.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t('services.transport.process.steps.pickup.title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('services.transport.process.steps.pickup.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t('services.transport.process.steps.transport.title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('services.transport.process.steps.transport.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t('services.transport.process.steps.delivery.title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('services.transport.process.steps.delivery.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('services.transport.whyChoose.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('services.transport.whyChoose.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {t('services.transport.benefits.timely.title')}
                </h3>
                <p className="text-gray-600">
                  {t('services.transport.benefits.timely.description')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {t('services.transport.benefits.secure.title')}
                </h3>
                <p className="text-gray-600">
                  {t('services.transport.benefits.secure.description')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {t('services.transport.benefits.tracking.title')}
                </h3>
                <p className="text-gray-600">
                  {t('services.transport.benefits.tracking.description')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {t('services.transport.benefits.fleet.title')}
                </h3>
                <p className="text-gray-600">
                  {t('services.transport.benefits.fleet.description')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {t('services.transport.benefits.compliance.title')}
                </h3>
                <p className="text-gray-600">
                  {t('services.transport.benefits.compliance.description')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {t('services.transport.benefits.flexible.title')}
                </h3>
                <p className="text-gray-600">
                  {t('services.transport.benefits.flexible.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('services.transport.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            {t('services.transport.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {t('services.transport.cta.quote')}
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              {t('services.transport.cta.contact')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}