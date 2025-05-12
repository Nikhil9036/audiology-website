'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Contact Us</h1>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Your Number"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
