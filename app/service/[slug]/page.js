import { notFound } from 'next/navigation';

const serviceData = {
  "hearing-tests": {
    title: "Hearing Tests",
    description: "Our hearing evaluations include pure-tone audiometry, tympanometry, speech testing, and otoacoustic emissions. These tests help us determine the exact type and degree of hearing loss."
  },
  "hearing-aids": {
    title: "Hearing Aids",
    description: "We offer a wide variety of hearing aids—from nearly invisible to rechargeable options—custom programmed to match your hearing profile. Our audiologists ensure proper fitting and ongoing support."
  },
  "ear-wax-removal": {
    title: "Ear Wax Removal",
    description: "Using microsuction and irrigation, we safely remove impacted wax, preventing hearing loss and ear infections without damaging your eardrum."
  },
  "speech-therapy": {
    title: "Speech Therapy",
    description: "We help children and adults with stuttering, voice disorders, articulation issues, and more through personalized therapy by licensed speech-language pathologists."
  },
  "tinnitus-management": {
    title: "Tinnitus Management",
    description: "We offer sound therapy, tinnitus retraining therapy, and counseling to help you manage and reduce the effects of tinnitus."
  },
  "balance-assessment": {
    title: "Balance Assessment",
    description: "Includes vestibular testing such as videonystagmography (VNG) and customized balance rehabilitation plans to restore coordination and confidence."
  }
};

export default function ServiceDetail({ params }) {
  const service = serviceData[params.slug];

  if (!service) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">{service.title}</h1>
      <p className="text-lg text-gray-700">{service.description}</p>

      {/* Back Button */}
      <a
        href="/services"
        className="inline-block mt-8 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Back to Services
      </a>
    </div>
  );
}
