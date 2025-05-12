export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Hearing Tests",
            description: "Comprehensive hearing evaluations for all age groups."
          },
          {
            title: "Hearing Aids",
            description: "Latest technology devices, personalized for your needs."
          },
          {
            title: "Ear Wax Removal",
            description: "Safe and effective methods to keep your ears clean."
          },
          {
            title: "Speech Therapy",
            description: "Expert care for speech and communication disorders."
          },
          {
            title: "Tinnitus Management",
            description: "Strategies to help reduce and cope with ringing ears."
          },
          {
            title: "Balance Assessment",
            description: "Testing and treatment for balance and dizziness issues."
          },
        ].map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
