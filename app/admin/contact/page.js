'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function ContactsAdminPage() {
  const { user, isAudiologist, loading } = useAuth();
  const router = useRouter();
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!loading && (!user || !isAudiologist)) {
      router.push('/');
    }
  }, [user, isAudiologist, loading]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contactsRef = collection(db, 'contacts');
        const q = query(contactsRef, orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log('Fetched data:', data);
        setContacts(data);
      } catch (error) {
        setError('Error fetching contacts');
        console.error(error);
      }
    };

    if (user && isAudiologist) {
      fetchContacts();
    }
  }, [user, isAudiologist]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'contacts', id));
      setContacts(contacts.filter(item => item.id !== id));
    } catch (error) {
      setError('Error deleting contact');
      console.error(error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!user || !isAudiologist) return null;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl text-black font-bold">Manage Contact Messages</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search contacts..."
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
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul className="space-y-4">
          {(searchTerm ? contacts.filter((item) => {
            const search = searchTerm.toLowerCase().trim();
            return (
              item.name?.toLowerCase().includes(search) ||
              item.number?.includes(search) ||
              item.email?.toLowerCase().includes(search) ||
              item.message?.toLowerCase().includes(search)
            );
          }) : contacts).map((item) => (
            <li key={item.id} className="border p-4 rounded text-black bg-white shadow">
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Number:</strong> {item.number}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Message:</strong> {item.message}</p>
              <button
                className="mt-2 text-red-600 underline"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}