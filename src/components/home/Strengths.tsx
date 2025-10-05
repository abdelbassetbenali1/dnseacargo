"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

const strengths = [
  { icon: "/containers.svg", titleKey: "services.seaFreight.features.fcl" },
  { icon: "/containers.svg", titleKey: "services.seaFreight.features.lcl" },
  { icon: "/warehouse.svg", titleKey: "services.warehousing.title" },
  { icon: "/customs.svg", titleKey: "services.customs.title" },
  { icon: "/truck.svg", titleKey: "services.transport.title" },
  { icon: "/insurance.svg", titleKey: "services.insurance.title" },
];

export default function Services() {
  const t = useTranslations();
  return (
    <section className="bg-white py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">{t("services.subtitle")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {strengths.map((s, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4"
          >
            <div className="relative h-14 w-14">
              <Image src={s.icon} alt="" fill className="object-contain" />
            </div>
            <span className="text-sm font-medium text-center">{t(s.titleKey)}</span>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}