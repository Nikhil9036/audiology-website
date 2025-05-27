'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';

const AuthContext = createContext();

// List of audiologist emails (modify as needed)
const audiologistEmails = [
  'nja8766@gmail.com',
];

const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const isAudiologist = audiologistEmails.includes(user.email);
    return { user, isAudiologist };
  } catch (error) {
    throw error;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAudiologist, setIsAudiologist] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsAudiologist(
        user?.email && audiologistEmails.includes(user.email)
      );
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, isAudiologist, login, setUser, setIsAudiologist }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);