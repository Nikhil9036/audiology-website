import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, date, time } = await req.json();

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
