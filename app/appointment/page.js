'use client';
import { useState } from 'react';
import { CalendarIcon, ClockIcon, UserIcon, MailIcon, PhoneIcon, FileTextIcon } from 'lucide-react';

export default function AppointmentPage() {
  const [form, setForm] = useState({ name: '', email: '', number: '', date: '', time: '', reason: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/appointment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setMessage('✅ Appointment booked successfully!');
      setForm({ name: '', email: '', number: '', date: '', time: '', reason: '' });
    } else {
      setMessage('❌ Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-cover p-6 flex flex-col items-center justify-center gap-8 text-black">
      <div className="bg-white/10 backdrop-blur-md p-10 rounded shadow-md w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Book an Appointment</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center border border-gray-300 rounded px-3 py-2">
              <UserIcon className="w-5 h-5 text-gray-500" />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full outline-none bg-transparent text-black placeholder-gray-500"
                required
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded px-3 py-2">
              <MailIcon className="w-5 h-5 text-gray-500" />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full outline-none bg-transparent text-black placeholder-gray-500"
                required
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded px-3 py-2">
              <PhoneIcon className="w-5 h-5 text-gray-500" />
              <input
                name="number"
                value={form.number}
                onChange={handleChange}
                placeholder="Your Number"
                className="w-full outline-none bg-transparent text-black placeholder-gray-500"
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded px-3 py-2">
              <CalendarIcon className="w-5 h-5 text-gray-500" />
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder-gray-500"
                required
              />
            </div>

            <div className="flex items-center border border-gray-300 rounded px-3 py-2">
              <ClockIcon className="w-5 h-5 text-gray-500" />
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-black placeholder-gray-500"
                required
              />
            </div>

            <div className="flex items-start border border-gray-300 rounded px-3 py-2">
              <FileTextIcon className="w-5 h-5 text-gray-500" />
              <textarea
                name="reason"
                value={form.reason}
                onChange={handleChange}
                placeholder="Reason for Visit"
                className="w-full outline-none resize-none bg-transparent text-black placeholder-gray-500"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
            >
              Confirm Appointment
            </button>
          </div>
        </form>

        {message && <p className="mt-6 text-center text-green-600 font-semibold">{message}</p>}
      </div>
    </div>
  );
}
