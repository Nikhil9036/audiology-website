'use client'; // only needed in Next.js App Router

import Link from 'next/link';  // Import Link from Next.js for navigation

export default function ServicesPage() {
  const services = [
    {
      title: "Hearing Tests",
      slug: "hearing-tests",  // Create a slug for each service
      short: "Comprehensive hearing assessments for all age groups.",
    },
    {
      title: "Hearing Aids",
      slug: "hearing-aids",
      short: "Modern digital hearing aids tailored to your needs.",
    },
    {
      title: "Ear Wax Removal",
      slug: "ear-wax-removal",
      short: "Safe and gentle wax removal by professionals.",
    },
    {
      title: "Speech Therapy",
      slug: "speech-therapy",
      short: "Tailored therapy for speech and communication disorders.",
    },
    {
      title: "Tinnitus Management",
      slug: "tinnitus-management",
      short: "Relief strategies for ringing or buzzing in the ears.",
    },
    {
      title: "Balance Assessment",
      slug: "balance-assessment",
      short: "Diagnosing causes of dizziness and imbalance.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Link href={`/services/${service.slug}`} key={index}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 transition duration-300 cursor-pointer">
              <h2 className="text-2xl font-semibold text-blue-600">{service.title}</h2>
              <p className="text-gray-700 mt-2">{service.short}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
