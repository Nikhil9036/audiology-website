'use client';

import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  User,
  MessageSquare,
} from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, number, message }),
    });

    const data = await res.json();
    if (data.success) {
      alert('Form submitted successfully!');
      setName('');
      setEmail('');
      setNumber('');
      setMessage('');
    } else {
      alert('Failed to submit form.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row items-center justify-center gap-8">
      {/* Contact Info */}
      <div className="bg-white p-6 rounded shadow-md w-full md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Say Hello!</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-center gap-3">
            <Mail className="text-blue-600" size={20} />
            contact@clinic.com
          </li>
          <li className="flex items-center gap-3">
            <Phone className="text-blue-600" size={20} />
            +91 98765 43210
          </li>
          <li className="flex items-center gap-3">
            <MapPin className="text-blue-600" size={20} />
            123, Audiology Lane, Mumbai
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>

        <div className="space-y-4">
          <div className="flex items-center border rounded px-3 py-2">
            <User className="text-gray-400 mr-2" size={18} />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center border rounded px-3 py-2">
            <Mail className="text-gray-400 mr-2" size={18} />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center border rounded px-3 py-2">
            <Phone className="text-gray-400 mr-2" size={18} />
            <input
              type="tel"
              placeholder="Your Number"
              className="w-full outline-none"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>

          <div className="flex items-start border rounded px-3 py-2">
            <MessageSquare className="text-gray-400 mt-1 mr-2" size={18} />
            <textarea
              placeholder="Your Message"
              className="w-full outline-none resize-none"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
