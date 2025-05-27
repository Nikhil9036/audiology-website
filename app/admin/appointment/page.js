'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function AppointmentsAdminPage() {
  const { user, isAudiologist, loading } = useAuth();
  const router = useRouter();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (!loading && (!user || !isAudiologist)) {
      router.push('/');
    }
  }, [user, isAudiologist, loading]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const querySnapshot = await getDocs(collection(db, 'appointments'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAppointments(data);
    };

    if (user && isAudiologist) {
      fetchAppointments();
    }
  }, [user, isAudiologist]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'appointments', id));
    setAppointments(appointments.filter(item => item.id !== id));
  };

  if (loading) return <p>Loading...</p>;
  if (!user || !isAudiologist) return null;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-black">Manage Appointments</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push('/admin')}
        >
          Go Back to Admin
        </button>
      </div>
      <ul className="space-y-4">
        {appointments.map((item) => (
          <li key={item.id} className="border p-4 text-black bg-white rounded shadow">
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Date:</strong> {item.date}</p>
            <p><strong>Time:</strong> {item.time}</p>
            <button
              className="mt-2 text-red-600 underline"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}