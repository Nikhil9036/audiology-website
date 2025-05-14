'use client';

import { useState } from 'react';

export default function AudiologistAuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleMode = () => setIsSignUp(!isSignUp);

  return (
    <div className="min-h-screen flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white/60 p-10 rounded-xl shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          {isSignUp ? 'Sign Up as Audiologist' : 'Sign In as Audiologist'}
        </h2>

        <form className="space-y-4">
  <div>
    <label className="block text-sm font-medium text-black mb-1">Email</label>
    <input
      type="email"
      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 text-black"
      placeholder="Enter your email"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-black mb-1">Password</label>
    <input
      type="password"
      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 text-black"
      placeholder="Enter your password"
    />
  </div>

  {isSignUp && (
    <div>
      <label className="block text-sm font-medium text-black mb-1">Confirm Password</label>
      <input
        type="password"
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 text-black"
        placeholder="Confirm your password"
      />
    </div>
  )}

  <button
    type="submit"
    className="w-full py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
  >
    {isSignUp ? 'Create Account' : 'Sign In'}
  </button>

  <div className="flex items-center my-4">
    <hr className="flex-grow border-gray-400" />
    <span className="mx-4 text-gray-600">OR</span>
    <hr className="flex-grow border-gray-400" />
  </div>

  <div className="space-y-2">
    <button
      type="button"
      className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-md bg-white/80 hover:bg-gray-100 transition text-black"
    >
      <img src="/google.png" alt="Google" className="w-5 h-5" />
      Continue with Google
    </button>
    <button
      type="button"
      className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-md bg-white/80 hover:bg-gray-100 transition text-black"
    >
      <img src="/facebook.png" alt="Facebook" className="w-5 h-5" />
      Continue with Facebook
    </button>
  </div>
</form>

        <p className="mt-4 text-center text-sm text-black">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button onClick={toggleMode} className="text-blue-700 hover:underline">
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
}
