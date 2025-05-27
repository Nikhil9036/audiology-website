'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

export default function AdminPage() {
  const { user, isAudiologist, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || !isAudiologist)) {
      router.push('/audiologist/login'); // Redirect to login page if not authorized
    }
  }, [user, isAudiologist, loading, router]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6 bg-cover min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl text-black font-bold mb-2">Appointments</h2>
          <p className="text-gray-600 mb-4">Manage and view appointments.</p>
          <button
            onClick={() => router.push('/admin/appointment')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View Appointments
          </button>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl text-black font-bold mb-2">Contact Messages</h2>
          <p className="text-gray-600 mb-4">View and respond to contact messages.</p>
          <button
            onClick={() => router.push('/admin/contact')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View Messages
          </button>
        </div>
      </div>
    </div>
  );
}