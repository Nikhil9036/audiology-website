'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const EarScene = dynamic(() => import('./component/EarScene'), { ssr: false });

export default function Home() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const paragraph = `Welcome to Heal Hearing — your trusted destination for professional audiology care.`;

  const [selectedAudioCategory, setSelectedAudioCategory] = useState(null);
  const [selectedSpeechCategory, setSelectedSpeechCategory] = useState(null);

  // Dropdown open state
  const [audioDropdownOpen, setAudioDropdownOpen] = useState(false);
  const [speechDropdownOpen, setSpeechDropdownOpen] = useState(false);

  // Store answers as { question: "Yes" | "No" | null }
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const utterance = new SpeechSynthesisUtterance(paragraph);
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    speechSynthesis.speak(utterance);
  }, []);

  const audioCategories = {
    "Hearing aid questions": [
      "Do you miss parts of conversations with friends or family?",
      "Is it hard to hear in groups or noisy places?",
      "Do you turn the TV or radio up louder than others like?",
      "Do you struggle to hear on the phone?",
      "Do you feel tired after trying to listen for a long time?"
    ],
    "Vestibular question": [
      "Do you feel dizzy or lightheaded often?",
      "Do you lose your balance when walking or turning?",
      "Do you feel like the room is spinning around you?",
      "Have you fallen or almost fallen in the past few months?",
      "Do you feel unsteady when you get up from bed or a chair?"
    ],
    "Tinnitus question": [
      "Do you hear ringing, buzzing, or hissing sounds in your ears?",
      "Do these sounds happen even when it is quiet around you?",
      "Do the sounds bother you when trying to sleep or relax?",
      "Do they make it hard to concentrate or focus?",
      "Have these sounds been bothering you for more than a few weeks?"
    ],
    "Cochlear implant question": [
      "Do you still struggle to hear clearly, even with hearing aids?",
      "Do you miss words or sentences during one-on-one conversations?",
      "Is it hard to hear people on the phone, even at full volume?",
      "Do you avoid social events because hearing is too difficult?",
      "Has your audiologist or hearing doctor suggested other options besides hearing aids?"
    ]
  };

  const speechCategories = {
    "Child Speech & Language Disorder Self-Check (for Parents)": [
      "Does your child have trouble saying words clearly?",
      "Is your child slower to learn new words than other kids their age?",
      "Does your child have trouble putting words into sentences?",
      "Is it hard for strangers to understand your child?",
      "Does your child avoid talking or get frustrated when trying to speak?"
    ],
    "Adult Language Disorder Self-Check": [
      "Do you have trouble finding the right words when speaking?",
      "Is it hard for you to understand or follow conversations?",
      "Do you mix up words or say sentences that does not make sense?",
      "Do others notice that your speech is unclear or confusing?",
      "Have you had any changes in your ability to speak or understand language recently?"
    ]
  };

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

  // Get currently displayed questions list (audio or speech)
  const currentCategory = selectedAudioCategory || selectedSpeechCategory;
  const currentQuestions = selectedAudioCategory
    ? audioCategories[selectedAudioCategory]
    : selectedSpeechCategory
      ? speechCategories[selectedSpeechCategory]
      : [];

  // Reset answers when category changes
  useEffect(() => {
    if (currentQuestions.length > 0) {
      const initialAnswers = {};
      currentQuestions.forEach(q => (initialAnswers[q] = null));
      setAnswers(initialAnswers);
    } else {
      setAnswers({});
    }
  }, [currentCategory]);

  // Handler for answer selection
  function handleAnswer(question, answer) {
    setAnswers(prev => ({ ...prev, [question]: answer }));
  }

  // Submit handler
  function handleSubmit() {
    const unanswered = Object.entries(answers).filter(([, val]) => val === null);
    if (unanswered.length > 0) {
      alert('Please answer all questions before submitting.');
      return;
    }
    console.log('User answers:', answers);
    alert('Thank you for submitting your responses!');
  }

  // Close other dropdown when one opens
  function handleAudioDropdownToggle() {
    setAudioDropdownOpen(!audioDropdownOpen);
    if (!audioDropdownOpen) setSpeechDropdownOpen(false);
  }
  function handleSpeechDropdownToggle() {
    setSpeechDropdownOpen(!speechDropdownOpen);
    if (!speechDropdownOpen) setAudioDropdownOpen(false);
  }

  return (
    <div className="text-gray-900 bg-gray-50 min-h-screen font-sans">
      {/* HERO SECTION */}
      <div className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center relative px-6 py-10">
        {/* Top row */}
        <div className="w-full max-w-7xl flex items-center justify-between mb-8">
          {/* Audio Dropdown */}
          <div className="relative">
            <button
              onClick={handleAudioDropdownToggle}
              className="bg-blue-700 text-white font-semibold px-5 py-2 rounded-md shadow hover:bg-blue-800 transition"
              aria-expanded={audioDropdownOpen}
              aria-controls="audio-dropdown"
            >
              Audio
            </button>
            {audioDropdownOpen && (
              <div
                id="audio-dropdown"
                className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-72 z-50 max-h-64 overflow-y-auto"
              >
                {Object.keys(audioCategories).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedAudioCategory(cat);
                      setSelectedSpeechCategory(null);
                      setAudioDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-blue-100 transition ${
                      selectedAudioCategory === cat ? 'bg-blue-200 font-semibold' : ''
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Welcome message */}
          <h1 className="text-5xl font-extrabold drop-shadow-md text-center flex-1 mx-6 text-gray-800">
            Welcome to Heal Hearing
          </h1>

          {/* Speech Dropdown */}
          <div className="relative">
            <button
              onClick={handleSpeechDropdownToggle}
              className="bg-green-700 text-white font-semibold px-5 py-2 rounded-md shadow hover:bg-green-800 transition"
              aria-expanded={speechDropdownOpen}
              aria-controls="speech-dropdown"
            >
              Speech
            </button>
            {speechDropdownOpen && (
              <div
                id="speech-dropdown"
                className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-80 z-50 max-h-64 overflow-y-auto"
              >
                {Object.keys(speechCategories).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedSpeechCategory(cat);
                      setSelectedAudioCategory(null);
                      setSpeechDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-green-100 transition ${
                      selectedSpeechCategory === cat ? 'bg-green-200 font-semibold' : ''
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Subtitle */}
        <p className="mb-8 text-xl text-gray-700 drop-shadow-sm text-center max-w-3xl">
          Your hearing health is our priority
        </p>

        {/* Main content: 3D model left, questions right */}
        <div className="flex flex-col md:flex-row items-start gap-12 max-w-7xl w-full px-4">
          {/* 3D Model */}
          <div className="touch-pan-y pointer-events-none w-full md:w-1/2 h-[500px] rounded-lg shadow-lg bg-white">
            <EarScene />
          </div>

          {/* Questions container */}
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8 max-h-[500px] overflow-y-auto flex flex-col">
            {currentCategory ? (
              <>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
                  {currentCategory}
                </h2>
                <ul className="space-y-4 flex-1 overflow-y-auto">
                  {currentQuestions.map((q, idx) => (
                    <li key={idx} className="flex items-center justify-between gap-4 py-3 border-b border-gray-200">
                      <span className="text-gray-700 text-base flex-1 pr-4">{q}</span>
                      <div className="flex space-x-4 min-w-[160px]">
                        <button
                          onClick={() => handleAnswer(q, "Yes")}
                          className={`flex items-center justify-center gap-2 px-6 py-2 rounded-md font-semibold transition 
                            ${
                              answers[q] === "Yes"
                                ? "bg-green-600 text-white shadow-lg ring-2 ring-green-400"
                                : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700"
                            } focus:outline-none focus:ring-4 focus:ring-green-300`}
                          aria-pressed={answers[q] === "Yes"}
                          type="button"
                        >
                          {answers[q] === "Yes" && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                          Yes
                        </button>

                        <button
                          onClick={() => handleAnswer(q, "No")}
                          className={`flex items-center justify-center gap-2 px-6 py-2 rounded-md font-semibold transition 
                            ${
                              answers[q] === "No"
                                ? "bg-red-600 text-white shadow-lg ring-2 ring-red-400"
                                : "bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-700"
                            } focus:outline-none focus:ring-4 focus:ring-red-300`}
                          aria-pressed={answers[q] === "No"}
                          type="button"
                        >
                          {answers[q] === "No" && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                          No
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleSubmit}
                  disabled={Object.values(answers).some(ans => ans === null)}
                  className={`mt-6 self-center px-8 py-3 rounded-lg font-semibold text-white transition
                    ${
                      Object.values(answers).some(ans => ans === null)
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-700 hover:bg-blue-800"
                    }
                  `}
                >
                  Submit
                </button>
              </>
            ) : (
              <p className="text-gray-500 italic text-center mt-10">
                Select a category from Audio or Speech to see questions here.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* GALLERY SECTION */}
      <section className="py-12 bg-gray-100 text-gray-900">
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