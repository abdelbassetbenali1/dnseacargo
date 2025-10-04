import { useTranslations } from 'next-intl';
import { Package, Truck, BarChart3, Globe, Clock, Shield, CheckCircle, ArrowRight, Users, Target } from 'lucide-react';

export default function LogisticsPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('services.logistics.title')}
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              {t('services.logistics.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-2">
                <Globe className="w-6 h-6" />
                <span>{t('services.logistics.features.global')}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-2">
                <BarChart3 className="w-6 h-6" />
                <span>{t('services.logistics.features.optimized')}</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                <span>{t('services.logistics.features.reliable')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('services.logistics.services.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('services.logistics.services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Supply Chain Management */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.logistics.types.supplyChain.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('services.logistics.types.supplyChain.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.logistics.types.supplyChain.features.planning')}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.logistics.types.supplyChain.features.optimization')}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.logistics.types.supplyChain.features.monitoring')}
                </li>
              </ul>
            </div>

            {/* Distribution Management */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.logistics.types.distribution.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('services.logistics.types.distribution.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.logistics.types.distribution.features.network')}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.logistics.types.distribution.features.lastMile')}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.logistics.types.distribution.features.tracking')}
                </li>
              </ul>
            </div>

            {/* Inventory Management */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.logistics.types.inventory.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('services.logistics.types.inventory.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.logistics.types.inventory.features.control')}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.logistics.types.inventory.features.forecasting')}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.logistics.types.inventory.features.automation')}
                </li>
              </ul>
            </div>

            {/* Freight Forwarding */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.logistics.types.forwarding.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('services.logistics.types.forwarding.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.logistics.types.forwarding.features.multimodal')}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.logistics.types.forwarding.features.documentation')}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.logistics.types.forwarding.features.customs')}
                </li>
              </ul>
            </div>

            {/* Project Logistics */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.logistics.types.project.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('services.logistics.types.project.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.logistics.types.project.features.heavyLift')}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.logistics.types.project.features.specialized')}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.logistics.types.project.features.management')}
                </li>
              </ul>
            </div>

            {/* Consulting Services */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('services.logistics.types.consulting.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('services.logistics.types.consulting.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.logistics.types.consulting.features.analysis')}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.logistics.types.consulting.features.strategy')}
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {t('services.logistics.types.consulting.features.implementation')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('services.logistics.process.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('services.logistics.process.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t('services.logistics.process.steps.analysis.title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('services.logistics.process.steps.analysis.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t('services.logistics.process.steps.planning.title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('services.logistics.process.steps.planning.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t('services.logistics.process.steps.execution.title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('services.logistics.process.steps.execution.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t('services.logistics.process.steps.monitoring.title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('services.logistics.process.steps.monitoring.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t('services.logistics.process.steps.optimization.title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('services.logistics.process.steps.optimization.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('services.logistics.benefits.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('services.logistics.benefits.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {t('services.logistics.advantages.efficiency.title')}
                </h3>
                <p className="text-gray-600">
                  {t('services.logistics.advantages.efficiency.description')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {t('services.logistics.advantages.speed.title')}
                </h3>
                <p className="text-gray-600">
                  {t('services.logistics.advantages.speed.description')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {t('services.logistics.advantages.reliability.title')}
                </h3>
                <p className="text-gray-600">
                  {t('services.logistics.advantages.reliability.description')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {t('services.logistics.advantages.global.title')}
                </h3>
                <p className="text-gray-600">
                  {t('services.logistics.advantages.global.description')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {t('services.logistics.advantages.customized.title')}
                </h3>
                <p className="text-gray-600">
                  {t('services.logistics.advantages.customized.description')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {t('services.logistics.advantages.support.title')}
                </h3>
                <p className="text-gray-600">
                  {t('services.logistics.advantages.support.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('services.logistics.cta.title')}
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            {t('services.logistics.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {t('services.logistics.cta.consultation')}
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              {t('services.logistics.cta.contact')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}