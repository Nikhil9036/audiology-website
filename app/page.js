export default function Home() {
  return (
    <div>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1588776814546-ec8c7bcb8c99"
          alt="Audiology Center"
          className="w-full h-64 object-cover rounded-md shadow"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold">Hear Better, Live Better</h2>
        </div>
      </div>

      <section className="mt-8">
        <h3 className="text-2xl font-semibold mb-2">Welcome to the Audiology Center</h3>
        <p>
          We specialize in hearing health care including tests, aids, and treatment.
          Our certified professionals are here to support your hearing journey.
        </p>
      </section>
    </div>
  );
}
