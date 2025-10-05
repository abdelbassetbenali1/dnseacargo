"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="bg-gray-50 py-8 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Container */}
        <div className="bg-slate-800 rounded-3xl overflow-hidden relative min-h-[750px]">
          {/* Hero Background */}
      <div className="absolute inset-0">
        <Image
          src="/ocean.jpg"
          alt="Ocean Background"
          fill
          className="object-cover opacity-5"
          priority
        />
        <div className="absolute inset-0 bg-slate-800/50"></div>
      </div>
          
          {/* Main Content Grid */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12 min-h-[600px]">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <div className="inline-block">
                <span className="bg-green-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                  {t("servicesBadge")}
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                {t("mainTitle")}
              </h1>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                {t("mainDescription")}
              </p>
            </div>

            {/* Right Content - Container Ship with Floating Cards */}
            <div className="relative flex justify-center">
              {/* Main Ship Container with 3:5 aspect ratio */}
              <div className="relative w-full max-w-md">
                <div className="aspect-[6/7] relative">
                  <Image
                    src="/hero.jpg"
                    alt="Container Ship"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
                
                {/* Shipment Tracking Card */}
                <div className="absolute -top-4 -right-8 bg-white rounded-xl p-4 shadow-lg max-w-[200px] z-10">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 mb-1">{t("trackingTitle")}</div>
                      <div className="text-xs text-gray-500 leading-tight">{t("trackingDescription")}</div>
                    </div>
                  </div>
                </div>

                {/* Insurance Coverage Card */}
                <div className="absolute -bottom-4 -left-8 bg-white rounded-xl p-4 shadow-lg max-w-[200px] z-10">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 mb-1">{t("insuranceTitle")}</div>
                      <div className="text-xs text-gray-500 leading-tight">{t("insuranceDescription")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        {/* Bottom CTA Section */}
        <div className="relative z-20 -mt-20 lg:-mt-28 max-w-8xl mx-auto px-8">
          <div className="relative bg-gradient-to-r from-green-400 via-green-500 to-green-400 rounded-3xl py-8 px-6 lg:py-12 lg:px-8 scale-90 overflow-hidden min-h-[200px] lg:min-h-[240px]">
            {/* World Map Background */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <Image
                src="/world.png"
                alt="World Map Background"
                fill
                className="object-cover opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/80 via-green-500/80 to-green-400/80"></div>
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 h-full">
              <div className="flex-1">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
                  {t("ctaTitle")}
                </h2>
              </div>
              <Link
                href="/quote"
                className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {t("ctaButton")}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}