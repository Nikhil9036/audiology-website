'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, query, orderBy, startAfter, limit } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function AppointmentsAdminPage() {
  const { user, isAudiologist, loading } = useAuth();
  const router = useRouter();
  const [appointments, setAppointments] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    if (!loading && (!user || !isAudiologist)) {
      router.push('/');
    }
  }, [user, isAudiologist, loading]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const appointmentsRef = collection(db, 'appointments');
      const q = query(appointmentsRef, orderBy('createdAt', 'desc'), limit(100));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAppointments(data);
      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
    };

    if (user && isAudiologist) {
      fetchAppointments();
    }
  }, [user, isAudiologist]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'appointments', id));
    setAppointments(appointments.filter(item => item.id !== id));
  };

  const loadMore = async () => {
    if (!lastDoc) return;
    setLoadingMore(true);
    const appointmentsRef = collection(db, 'appointments');
    const q = query(appointmentsRef, orderBy('createdAt', 'desc'), startAfter(lastDoc), limit(100));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setAppointments(appointments => [...appointments, ...data]);
    setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
    setLoadingMore(false);
  };

  if (loading) return <p>Loading...</p>;
  if (!user || !isAudiologist) return null;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-black">Manage Appointments</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search appointments..."
              className="pl-10 p-2 text-black border border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => router.push('/admin')}
          >
            Go Back
          </button>
        </div>
      </div>
      <ul className="space-y-4">
        {(searchTerm ? appointments.filter((item) => {
          const search = searchTerm.toLowerCase().trim();
          return (
            item.name?.toLowerCase().includes(search) ||
            item.number?.includes(search) ||
            item.email?.toLowerCase().includes(search) ||
            item.date?.includes(search) ||
            new Date(item.createdAt?.seconds * 1000).toLocaleString().toLowerCase().includes(search)
          );
        }) : appointments).map((item) => (
          <li key={item.id} className="border p-4 text-black bg-white rounded shadow">
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Number:</strong> {item.number}</p>
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Appointment Date:</strong> {item.date}</p>
            <p><strong>Appointment Time:</strong> {item.time}</p>
            <p><strong>Reason:</strong> {item.reason}</p>
            <p><strong>Booking Date:</strong> {new Date(item.createdAt?.seconds * 1000).toLocaleString()}</p>
            <button
              className="mt-2 text-red-600 underline"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {lastDoc && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={loadMore}
          disabled={loadingMore}
        >
          {loadingMore ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
}