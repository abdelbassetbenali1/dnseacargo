"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Testimonial() {
  const t = useTranslations();

  return (
    <section className="py-16 bg-gray-50 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by businesses worldwide for reliable shipping solutions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              <Image
                src="/profile.svg"
                alt="Client testimonial"
                width={80}
                height={80}
                className="mx-auto rounded-full"
              />
            </div>
            <blockquote className="text-lg text-gray-700 mb-6 italic">
              "DNS Sea Cargo has been our trusted logistics partner for over 5 years. Their reliability and professional service have helped us expand our business globally."
            </blockquote>
            <div className="text-gray-900 font-semibold">Ahmed Al-Rashid</div>
            <div className="text-gray-600">CEO, Global Trading Co.</div>
          </div>
        </div>
      </div>
    </section>
  );
}