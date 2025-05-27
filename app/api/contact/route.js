import { db } from '../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, number, message } = await request.json();

    const newEntry = {
      name,
      email,
      number,
      message,
      date: new Date().toISOString(),
    };

    await addDoc(collection(db, 'contacts'), newEntry);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving contact message:', error);
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
  }
}
