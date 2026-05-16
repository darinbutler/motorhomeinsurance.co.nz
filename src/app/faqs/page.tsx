import type { Metadata } from 'next';
import { faqs } from '@/data/faqs';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import FaqsClient from './FaqsClient';

export const metadata: Metadata = {
  title: 'Motorhome Insurance FAQs | MotorHomeInsurance.co.nz',
  description: 'Answers to common questions about motorhome insurance in New Zealand — coverage, cost, claims, excess, agreed value, and more from licensed NZ brokers.',
  alternates: { canonical: 'https://www.motorhomeinsurance.co.nz/faqs/' },
  openGraph: {
    title: 'Motorhome Insurance FAQs | MotorHomeInsurance.co.nz',
    description: 'Answers to common questions about motorhome insurance in New Zealand — coverage, cost, claims, excess, and more.',
    url: 'https://www.motorhomeinsurance.co.nz/faqs/',
    siteName: 'MotorHomeInsurance.co.nz',
    type: 'website',
    locale: 'en_NZ',
    images: [{ url: 'https://www.motorhomeinsurance.co.nz/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Motorhome Insurance FAQs NZ',
    description: 'Answers to common NZ motorhome insurance questions — coverage, cost, claims, and more.',
    images: ['https://www.motorhomeinsurance.co.nz/og-image.png'],
  },
};

const breadcrumbs = [
  { name: 'Home', url: 'https://www.motorhomeinsurance.co.nz/' },
  { name: 'FAQs', url: 'https://www.motorhomeinsurance.co.nz/faqs/' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function FAQsPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={breadcrumbs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url(/hero-motorhome-3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/65 to-slate-900/35" />
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Motorhome Insurance FAQs</h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Clear answers to New Zealand&apos;s most common motorhome insurance questions — from coverage and cost to claims and specialist situations.
          </p>
        </div>
      </section>

      {/* Client accordion */}
      <FaqsClient />
    </>
  );
}
