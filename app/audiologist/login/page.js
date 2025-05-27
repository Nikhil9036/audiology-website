'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';

export default function AudiologistLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, setUser, setIsAudiologist } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, isAudiologist } = await login(email, password);
      setUser(user);
      setIsAudiologist(isAudiologist);
      if (isAudiologist) {
        router.push('/admin');
      } else {
        alert('You are not authorized to access this page');
      }
    } catch (error) {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-cover p-6 flex flex-col items-center justify-center gap-8 text-black">
      <h1 className="text-2xl font-bold mb-4">Audiologist Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full p-2 mb-4"
            placeholder="Enter your email"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full p-2 mb-4"
            placeholder="Enter your password"
          />
        </label>
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}