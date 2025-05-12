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
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-semibold text-center text-blue-700 mb-6">
          Book an Appointment
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center border rounded px-3">
              <UserIcon className="w-5 h-5 text-blue-500" />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-2 outline-none"
                required
              />
            </div>

            <div className="flex items-center border rounded px-3">
              <MailIcon className="w-5 h-5 text-blue-500" />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-2 outline-none"
                required
              />
            </div>

            <div className="flex items-center border rounded px-3">
              <PhoneIcon className="w-5 h-5 text-blue-500" />
              <input
                name="number"
                value={form.number}
                onChange={handleChange}
                placeholder="Your Number"
                className="w-full p-2 outline-none"
              />
            </div>

            <div className="flex items-center border rounded px-3">
              <CalendarIcon className="w-5 h-5 text-blue-500" />
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full p-2 outline-none"
                required
              />
            </div>

            <div className="flex items-center border rounded px-3">
              <ClockIcon className="w-5 h-5 text-blue-500" />
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full p-2 outline-none"
                required
              />
            </div>
          </div>

          <div className="flex items-start border rounded px-3">
            <FileTextIcon className="w-5 h-5 mt-3 text-blue-500" />
            <textarea
              name="reason"
              value={form.reason}
              onChange={handleChange}
              placeholder="Reason for Visit"
              className="w-full p-2 outline-none resize-none"
              rows={4}
              required
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition">
            Confirm Appointment
          </button>
        </form>

        {message && <p className="mt-6 text-center text-green-600 font-semibold">{message}</p>}
      </div>
    </div>
  );
}
