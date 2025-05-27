'use client'; // Add this only if you use React state/hooks here

import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="h-screen overflow-hidden font-sans text-gray-800"
        style={{
          backgroundImage: 'url("/logo.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Professional Header with solid white navbar */}
        <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.jpeg"
                alt="Heal Hearing Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-2xl font-semibold tracking-wide text-blue-700">
                Heal Hearing
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
              <Link href="/" className="hover:text-blue-600 transition">
                Home
              </Link>
              <Link href="/services" className="hover:text-blue-600 transition">
                Services
              </Link>
              <Link href="/contact" className="hover:text-blue-600 transition">
                Contact
              </Link>
              <Link href="/appointment" className="hover:text-blue-600 transition">
                Appointment
              </Link>
              <Link href="/about" className="hover:text-blue-600 transition">
                About Us
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-col h-[calc(100vh-80px)] overflow-y-auto">
          <main className="flex-grow p-6 max-w-6xl mx-auto">{children}</main>

          {/* Footer */}
          <footer className="bg-blue-900 text-white px-6 py-10 text-sm mt-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                <p>Heal Hearing Clinic</p>
                <p>123 Main Street, Mumbai, MH 400001</p>
                <p>Audiologist: Mr. Saurav Kumar</p>
                <p>Phone: +91-7254064733</p>
                <p>Email: support@healhearing.in</p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services" className="hover:underline">
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:underline">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/appointment" className="hover:underline">
                      Book Appointment
                    </Link>
                  </li>
                  <li>
                    <Link href="/audiologist/login" className="hover:underline">
                      Audiologist Portal
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal & Connect */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Legal & Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy-policy" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service" className="hover:underline">
                      Terms of Service
                    </Link>
                  </li>
                  <li className="flex space-x-4 mt-3">
                    <a href="#" aria-label="Facebook" className="hover:text-blue-400">
                      Facebook
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-pink-400">
                      Instagram
                    </a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-blue-300">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-6 border-t border-blue-700 pt-4 text-gray-300 text-xs">
              <p>&copy; {new Date().getFullYear()} Heal Hearing. All rights reserved.</p>
              <p>Designed with ❤️ in India</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
