// app/api/appointment/route.js
import { NextResponse } from 'next/server';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export async function POST(request) {
  try {
    const data = await request.json();
    await addDoc(collection(db, 'appointments'), data);
    return NextResponse.json({ message: 'Appointment booked successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error saving appointment:', error);
    return NextResponse.json({ error: 'Failed to book appointment' }, { status: 500 });
  }
}
