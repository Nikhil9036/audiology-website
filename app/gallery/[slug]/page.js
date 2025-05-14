import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const galleryData = {
  "testing-room": {
    title: "Testing Room",
    src: "/testroom.jpg",
    description: "Modern equipment for precise hearing tests.",
  },
  "waiting-lounge": {
    title: "Waiting Lounge",
    src: "/waiting.jpeg",
    description: "Comfortable seating with calming ambiance.",
  },
  "therapy-room": {
    title: "Therapy Room",
    src: "/therapy.jpeg",
    description: "Dedicated room for speech and audio therapy.",
  },
  "certified-audiologist": {
    title: "Certified Audiologist",
    src: "/certi.jpeg",
    description: "Personalized hearing care from specialists.",
  },
  "hearing-aid-display": {
    title: "Hearing Aid Display",
    src: "/hearingaid.jpeg",
    description: "Explore latest hearing devices in our display zone.",
  },
  "consultation-cabin": {
    title: "Consultation Cabin",
    src: "/consult.jpeg",
    description: "Private consultation area for client comfort.",
  },
  "pediatric-care": {
    title: "Pediatric Care",
    src: "/padiatric.jpeg",
    description: "Specialized services for children with hearing needs.",
  },
  "sound-proof-room": {
    title: "Sound-Proof Room",
    src: "/soundroom.jpeg",
    description: "Best acoustic design for accurate diagnosis.",
  },
  "reception-desk": {
    title: "Reception Desk",
    src: "/reception.jpeg",
    description: "Warm greetings and smooth patient onboarding.",
  },
  "our-team": {
    title: "Our Team",
    src: "/ourteam.jpeg",
    description: "Experienced and compassionate professionals.",
  },
};

export default function GalleryDetail({ params }) {
  const item = galleryData[params.slug];

  if (!item) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">{item.title}</h1>
      <img
        src={item.src}
        alt={item.title}
        className="rounded-xl shadow-lg w-full h-auto mb-6"
      />
      <p className="text-lg text-gray-700 mb-6">{item.description}</p>

      <Link
        href="/#gallery"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        ← Back to Gallery
      </Link>
    </div>
  );
}
