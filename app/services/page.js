export default function Services() {
  const services = [
    {
      title: 'Hearing Tests',
      description: 'Comprehensive audiological evaluations for all ages.',
    },
    {
      title: 'Hearing Aids',
      description: 'Latest digital hearing aids with fitting and tuning services.',
    },
    {
      title: 'Tinnitus Therapy',
      description: 'Relief programs and counseling for ringing in the ears.',
    },
    {
      title: 'Balance Testing',
      description: 'Diagnosis and management of dizziness and balance disorders.',
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded p-4 shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
