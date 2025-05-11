import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Banner Section */}
      <section className="bg-blue-500 text-white w-full p-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to Audiology Clinic</h1>
        <p className="mt-2 text-lg">Your hearing health is our priority</p>
      </section>

      {/* Call to Action Section */}
      <section className="flex flex-col items-center justify-center mt-10">
        <h2 className="text-2xl font-semibold">Book Your Appointment Now</h2>
        <p className="mt-2">Take the first step to better hearing.</p>
        <Link href="/appointment">
          <button className="mt-4 py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Book Appointment
          </button>
        </Link>
      </section>
    </div>
  )
}
