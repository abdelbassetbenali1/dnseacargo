'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function FAQ() {
  const t = useTranslations('faq');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const faqItems: FAQItem[] = [
    {
      id: 'international',
      question: t('international.question'),
      answer: t('international.answer'),
    },
    {
      id: 'services',
      question: t('services.question'),
      answer: t('services.answer'),
    },
    {
      id: 'tracking',
      question: t('tracking.question'),
      answer: t('tracking.answer'),
    },
    {
      id: 'delivery',
      question: t('delivery.question'),
      answer: t('delivery.answer'),
    },
  ];

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-400 text-slate-900 rounded-full mb-4">
            <span className="text-lg font-bold">FAQ</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            {t('title')}
          </h2>
          <p className="text-xl text-slate-700">
            {t('subtitle')}
          </p>
        </div>

        {/* FAQ Items - Two Column Layout */}
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              {/* Desktop Two-Column Layout */}
              <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 p-6">
                {/* Left Column - Question */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-400 text-slate-900 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 leading-relaxed">
                      {item.question}
                    </h3>
                  </div>
                </div>
                
                {/* Right Column - Answer */}
                <div className="flex items-start">
                  <p className="text-slate-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>

              {/* Mobile Collapsible Layout */}
              <div className="lg:hidden">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-400 text-slate-900 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-slate-900">
                      {item.question}
                    </h3>
                  </div>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-slate-500 transition-transform ${
                      openItems.has(item.id) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openItems.has(item.id) && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <div className="ml-12 text-slate-700 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}