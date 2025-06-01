'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically load EarScene (which contains Canvas and EarModel) with SSR disabled
const EarScene = dynamic(() => import('./component/EarScene'), { ssr: false });

export default function Home() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const paragraph = `Welcome to Heal Hearing — your trusted destination for professional audiology care.`;

  // Automatically play speech on page load
  useEffect(() => {
    const utterance = new SpeechSynthesisUtterance(paragraph);
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    speechSynthesis.speak(utterance);
  }, []);

  const galleryItems = [
    { slug: "testing-room", src: "/testroom.jpg", title: "Testing Room", description: "Modern equipment for precise hearing tests." },
    { slug: "waiting-lounge", src: "/waiting.jpeg", title: "Waiting Lounge", description: "Comfortable seating with calming ambiance." },
    { slug: "therapy-room", src: "/therapy.jpeg", title: "Therapy Room", description: "Dedicated room for speech and audio therapy." },
    { slug: "certified-audiologist", src: "/certi.jpeg", title: "Certified Audiologist", description: "Personalized hearing care from specialists." },
    { slug: "hearing-aid-display", src: "/hearingaid.jpeg", title: "Hearing Aid Display", description: "Explore latest hearing devices in our display zone." },
    { slug: "consultation-cabin", src: "/consult.jpeg", title: "Consultation Cabin", description: "Private consultation area for client comfort." },
    { slug: "pediatric-care", src: "/padiatric.jpeg", title: "Pediatric Care", description: "Specialized services for children with hearing needs." },
    { slug: "sound-proof-room", src: "/soundroom.jpeg", title: "Sound-Proof Room", description: "Best acoustic design for accurate diagnosis." },
    { slug: "reception-desk", src: "/reception.jpeg", title: "Reception Desk", description: "Warm greetings and smooth patient onboarding." },
    { slug: "our-team", src: "/ourteam.jpeg", title: "Our Team", description: "Experienced and compassionate professionals." },
  ];

  return (
    <div className="text-black">
      {/* HERO SECTION */}
      <div className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center">
        <div className="text-center px-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Welcome to Heal Hearing
          </h1>
          <p className="mt-3 text-lg md:text-xl text-black/90 drop-shadow-md">
            Your hearing health is our priority
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl px-4 w-full">
          {/* 3D Model Container replaced by EarScene */}
          <div className="touch-pan-y pointer-events-none" style={{ width: '100%', height: '500px' }}>
            <EarScene />
          </div>

          {/* Hidden paragraph, still used for speech */}
          <div className="hidden">
            <p>{paragraph}</p>
          </div>
        </div>
      </div>

      {/* GALLERY SECTION */}
      <section className="py-12 bg-cover text-gray-800">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Clinic Gallery</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-6 px-4 pb-4 snap-x snap-mandatory">
            {galleryItems.map((item, index) => (
              <Link
                key={index}
                href={`/gallery/${item.slug}`}
                className="min-w-[280px] sm:min-w-[320px] bg-white rounded-xl shadow-md snap-center shrink-0 hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="rounded-t-xl w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-blue-600 text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}