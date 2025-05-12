import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Banner Section */}
      <section className="bg-blue-500 text-white w-full p-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to Audiology Clinic</h1>
        <p className="mt-2 text-lg">Your hearing health is our priority</p>
      </section>
    </div>
  )
}