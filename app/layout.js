'use client';

import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { AuthProvider } from './context/AuthContext';

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MobileNavLink = ({ href, children }) => (
    <Link href={href} className="block hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
      {children}
    </Link>
  );

  return (
    <html lang="en">
      <body
        className="min-h-screen overflow-x-hidden font-sans text-gray-800"
        style={{
          backgroundImage: 'url("/logo.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <AuthProvider>
          {/* Header */}
          <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 py-3 flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo.jpeg"
                  alt="Heal Hearing Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                  priority
                />
                <span className="text-xl sm:text-2xl font-semibold tracking-wide text-blue-700 whitespace-nowrap">
                  Heal Hearing
                </span>
              </div>

              {/* Desktop Nav */}
              <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                <Link href="/services" className="hover:text-blue-600">Services</Link>
                <Link href="/contact" className="hover:text-blue-600">Contact</Link>
                <Link href="/appointment" className="hover:text-blue-600">Appointment</Link>
                <Link href="/about" className="hover:text-blue-600">About Us</Link>
              </nav>

              {/* Hamburger Icon */}
              <button
                className="md:hidden flex items-center justify-center text-gray-700 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
              <div className="md:hidden px-4 pb-4 space-y-2 text-base font-medium text-gray-700 bg-white shadow">
                <MobileNavLink href="/">Home</MobileNavLink>
                <MobileNavLink href="/services">Services</MobileNavLink>
                <MobileNavLink href="/contact">Contact</MobileNavLink>
                <MobileNavLink href="/appointment">Appointment</MobileNavLink>
                <MobileNavLink href="/about">About Us</MobileNavLink>
              </div>
            )}
          </header>

          {/* Main Content */}
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow px-4 py-6 max-w-6xl mx-auto w-full" style={{ wordBreak: 'break-word' }}>
              {children}
            </main>

            {/* Footer */}
            <footer className="bg-blue-900 text-white px-4 py-10 text-sm sm:text-base">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                  <p>Heal Hearing Clinic</p>
                  <p>123 Main Street, Mumbai, MH 400001</p>
                  <p>Audiologist: Mr. Saurav Kumar</p>
                  <p>Phone: +91-7254064733</p>
                  <p>Email: support@healhearing.in</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><Link href="/services" className="hover:underline">Our Services</Link></li>
                    <li><Link href="/about" className="hover:underline">About Us</Link></li>
                    <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                    <li><Link href="/appointment" className="hover:underline">Book Appointment</Link></li>
                    <li><Link href="/admin" className="hover:underline">Admin Portal</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Legal & Connect</h3>
                  <ul className="space-y-2">
                    <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                    <li><Link href="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
                    <li className="flex space-x-4 mt-3">
                      <a href="#" aria-label="Facebook" className="hover:text-blue-400">Facebook</a>
                      <a href="#" aria-label="Instagram" className="hover:text-pink-400">Instagram</a>
                      <a href="#" aria-label="LinkedIn" className="hover:text-blue-300">LinkedIn</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-6 border-t border-blue-700 pt-4 text-gray-300 text-xs sm:text-sm">
                <p>&copy; {new Date().getFullYear()} Heal Hearing. All rights reserved.</p>
                <p>Designed with ❤️ in India</p>
              </div>
            </footer>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}