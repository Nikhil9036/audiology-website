import { Resend } from 'resend';

// WARNING: This is for testing only. Do NOT hardcode in production.
const resend = new Resend('re_5nHcraNb_J5vwa9rykTK9hCi4yc61gbop');

export async function POST(req) {
  try {
    const { name, email, number, date, time } = await req.json();

    // Send confirmation email
    const response = await resend.emails.send({
      from: 'Your Clinic <onboarding@resend.dev>',
      to: email,
      subject: 'Appointment Confirmation',
      html: `
        <h2>Appointment Confirmed</h2>
        <p>Hi ${name},</p>
        <p>Your appointment is confirmed for:</p>
        <ul>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Time:</strong> ${time}</li>
        </ul>
        <p>Thank you for choosing our clinic.</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Email send failed' }), { status: 500 });
  }
}
