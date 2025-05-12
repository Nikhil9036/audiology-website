import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Heal Hearing',
  description: 'Professional hearing care services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="flex flex-col min-h-screen"
        style={{
          backgroundImage: 'url("/Image1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <header className="bg-blue-600 bg-opacity-90 text-white p-4">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <div className="flex items-center space-x-2">
              {/* Ensure the image path is correct */}
              <Image src="/logo.jpeg" alt="Heal Hearing Logo" width={40} height={40} />
              <span className="text-2xl font-bold">Heal Hearing</span>
            </div>
            <nav className="space-x-4">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/services" className="hover:underline">Services</Link>
              <a href="contact" className="hover:underline">Contact</a>
              <Link href="/appointment" className="hover:underline">Get Appointment</Link>
              <a href="about" className="hover:underline">About Us</a>
            </nav>
          </div>
        </header>

        <main className="flex-grow p-6 max-w-6xl mx-auto">{children}</main>

        <footer className="bg-gray-800 bg-opacity-90 text-white p-4 text-center">
          <p>&copy; 2025 Heal Hearing | All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
