import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Banner Section */}
      <section className="bg-blue-500 text-white w-full p-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to Heal Hearing and Speech Therapy!</h1>
        <p className="mt-2 text-lg">Your hearing health is our priority</p>
      </section>
    </div>
  )
};
<section id="about" className="mt-20 px-4 max-w-4xl mx-auto">
  <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">About Us</h2>
  <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
    Welcome to our Audiology Clinic! We are dedicated to providing exceptional hearing care.
    Our experienced audiologists use state-of-the-art equipment to assess and treat hearing-related issues.
  </p>
  <p className="text-lg text-gray-700 leading-relaxed text-center">
    Whether you're experiencing hearing loss, tinnitus, or just need a check-up, our team is here to help.
  </p>
</section>

