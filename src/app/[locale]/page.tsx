
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n';
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import BigBanner from "@/components/home/BigBanner";
import Strengths from "@/components/home/Strengths";
import Stats from "@/components/home/Stats";
import Testimonial from "@/components/home/Testimonial";
import CTA from "@/components/home/CTA";

// Generate static params for all supported locales
export async function generateStaticParams() {
  return [
    { locale: 'ar' },
    { locale: 'en' },
    { locale: 'fr' }
  ];
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  // Validate locale
  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <main>
      <Hero />
      <ServicesOverview />
      <BigBanner />
      <Strengths />
      <Stats />
      <Testimonial />
      <CTA />
    </main>
  );
}