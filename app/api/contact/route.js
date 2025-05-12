import { NextResponse } from 'next/server';
import { writeFile, readFile } from 'fs/promises';
import path from 'path';

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

    const filePath = path.join(process.cwd(), 'messages.json');

    let existing = [];

    try {
      const fileData = await readFile(filePath, 'utf-8');
      existing = JSON.parse(fileData);
    } catch (err) {
      // File might not exist yet — ignore
    }

    existing.push(newEntry);

    await writeFile(filePath, JSON.stringify(existing, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
  }
}
