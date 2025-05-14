import { notFound } from 'next/navigation';

const serviceData = {
  "hearing-tests": {
    title: "Hearing Tests",
    description: "Our hearing evaluations include pure-tone audiometry, tympanometry, speech testing, and otoacoustic emissions. These tests help us determine the exact type and degree of hearing loss.",
    image: "/images/hearing-tests.jpg",  // Add image
    video: "/videos/hearing-tests.mp4", // Add video if necessary
  },
  "hearing-aids": {
    title: "Hearing Aids",
    description: "We offer a wide variety of hearing aids—from nearly invisible to rechargeable options—custom programmed to match your hearing profile. Our audiologists ensure proper fitting and ongoing support.",
    image: "/images/hearing-aids.jpg",
    video: "/videos/hearing-aids.mp4",
  },
  "ear-wax-removal": {
    title: "Ear Wax Removal",
    description: "Using microsuction and irrigation, we safely remove impacted wax, preventing hearing loss and ear infections without damaging your eardrum.",
    image: "/images/ear-wax-removal.jpg",
    video: "/videos/ear-wax-removal.mp4",
  },
  "speech-therapy": {
    title: "Speech Therapy",
    description: "We help children and adults with stuttering, voice disorders, articulation issues, and more through personalized therapy by licensed speech-language pathologists.",
    image: "/images/speech-therapy.jpg",
    video: "/videos/speech-therapy.mp4",
  },
  "tinnitus-management": {
    title: "Tinnitus Management",
    description: "We offer sound therapy, tinnitus retraining therapy, and counseling to help you manage and reduce the effects of tinnitus.",
    image: "/images/tinnitus-management.jpg",
    video: "/videos/tinnitus-management.mp4",
  },
  "balance-assessment": {
    title: "Balance Assessment",
    description: "Includes vestibular testing such as videonystagmography (VNG) and customized balance rehabilitation plans to restore coordination and confidence.",
    image: "/images/balance-assessment.jpg",
    video: "/videos/balance-assessment.mp4",
  },
};

export default function ServiceDetail({ params }) {
  const service = serviceData[params.slug]; // Getting the service by slug

  if (!service) {
    // If no service data exists for the slug, show a 404
    return notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">{service.title}</h1>
      <p className="text-lg text-gray-700 mb-6">{service.description}</p>

      {/* Check if there's an image or video to display */}
      {service.image && (
        <img
          src={service.image}
          alt={service.title}
          className="rounded-xl shadow-lg w-full h-auto mb-6"
        />
      )}

      {service.video && (
        <div className="mb-6">
          <video controls className="w-full h-auto">
            <source src={service.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

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
