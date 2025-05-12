import './globals.css';
 import Link from 'next/link';

export const metadata = {
  title: 'Heal Hearing',
  description: 'Professional hearing care services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="bg-blue-600 text-white p-4">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold">Heal Hearing and Speech Therapy!</h1>
            <nav className="space-x-4">
            <Link href="/"className="hover:underline">Home</Link>
              <a href="/services" className="hover:underline">Services</a>
              <a href="/contact" className="hover:underline">Contact</a>
              <a href="/appointment" className="hover:underline">Get Appointment</a>
            </nav>
          </div>
        </header>

        <main className="flex-grow p-6 max-w-6xl mx-auto">{children}</main>

        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2025 Heal Hearing | All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}