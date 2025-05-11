export default function Appointment() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Book an Appointment</h1>

      <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="Email-ID" className="block text-lg font-semibold text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="Contact Number" className="block text-lg font-semibold text-gray-700">Contact Number</label>
          <input
            type="number"
            id="number"
            name="number"
            placeholder="Your Contact Nubmer"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="appointmentDate" className="block text-lg font-semibold text-gray-700">Date</label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Book Appointment
        </button>
      </form>
    </div>
  )
}
