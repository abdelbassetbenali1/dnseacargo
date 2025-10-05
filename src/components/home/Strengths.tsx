"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

const services = [
  { 
    image: "/Transportation.jpg", 
    titleKey: "services.international.title",
    descriptionKey: "services.international.description"
  },
  { 
    image: "/Transportation.jpg", 
    titleKey: "services.lastMile.title",
    descriptionKey: "services.lastMile.description"
  },
  { 
    image: "/Wearhouse.jpg", 
    titleKey: "services.warehousing.title",
    descriptionKey: "services.warehousing.description"
  },
  { 
    image: "/Transportation.jpg", 
    titleKey: "services.supply.title",
    descriptionKey: "services.supply.description"
  },
  { 
    image: "/customs.svg", 
    titleKey: "services.customs.title",
    descriptionKey: "services.customs.description"
  },
];

export default function Strengths() {
  const t = useTranslations();
  return (
    <section className="bg-gray-50 py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-green-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              {t("services.badge")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Professional Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-auto lg:h-[600px]">
          {/* First Large Card - International Shipping */}
          <div className="lg:col-span-2 lg:row-span-2">
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative">
                <Image
                  src={services[0].image}
                  alt={t(services[0].titleKey)}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-3">
                  {t(services[0].titleKey)}
                </h3>
                <p className="text-gray-200 text-base leading-relaxed">
                  {t(services[0].descriptionKey)}
                </p>
              </div>
            </div>
          </div>

          {/* Second Large Card - Last Mile Delivery */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full">
              <div className="aspect-[4/3] lg:aspect-[2/1] relative">
                <Image
                  src={services[1].image}
                  alt={t(services[1].titleKey)}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">
                  {t(services[1].titleKey)}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {t(services[1].descriptionKey)}
                </p>
              </div>
            </div>
          </div>

          {/* Three Small Cards in Bottom Row */}
          <div className="lg:col-span-1">
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full">
              <div className="aspect-[4/3] lg:aspect-[1/1] relative">
                <Image
                  src={services[2].image}
                  alt={t(services[2].titleKey)}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-bold mb-2">
                  {t(services[2].titleKey)}
                </h3>
                <p className="text-gray-200 text-xs leading-relaxed">
                  {t(services[2].descriptionKey)}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full">
              <div className="aspect-[4/3] lg:aspect-[1/1] relative">
                <Image
                  src={services[3].image}
                  alt={t(services[3].titleKey)}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-bold mb-2">
                  {t(services[3].titleKey)}
                </h3>
                <p className="text-gray-200 text-xs leading-relaxed">
                  {t(services[3].descriptionKey)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}