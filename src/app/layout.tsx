import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DNS Sea Cargo - International Shipping & Logistics',
  description: 'Professional sea freight, customs clearance, and logistics services worldwide',
};

// This file is required for Next.js App Router but should be minimal
// The actual layout is handled in app/[locale]/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
