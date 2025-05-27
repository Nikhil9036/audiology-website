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
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className="h-screen overflow-hidden"
        style={{
          backgroundImage: 'url("/logo.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Sticky Header */}
        <header className="bg-blue-600 bg-opacity-90 text-black p-4 sticky top-0 z-50 shadow-md">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <div className="flex items-center space-x-2">
              <Image src="/logo.jpeg" alt="Heal Hearing Logo" width={40} height={40} />
              <span className="text-2xl font-bold">Heal Hearing</span>
            </div>
            <nav className="space-x-4 hidden md:block">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/services" className="hover:underline">Services</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
              <Link href="/appointment" className="hover:underline">Get Appointment</Link>
              <Link href="/about" className="hover:underline">About Us</Link>
              
            </nav>
          </div>
        </header>

        {/* Scrollable content */}
        <div className="flex flex-col h-[calc(100vh-80px)] overflow-y-auto">
          <main className="flex-grow p-6 max-w-6xl mx-auto">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-900 bg-opacity-95 text-white px-6 py-8 text-sm mt-auto">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                <p>Heal Hearing Clinic</p>
                <p>123 Main Street, Mumbai, MH 400001</p>
                <p>Phone: +91-98765-43210</p>
                <p>Email: support@healhearing.in</p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                <ul className="space-y-1">
                  <li><Link href="/services" className="hover:underline">Our Services</Link></li>
                  <li><Link href="/about" className="hover:underline">About Us</Link></li>
                  <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                  <li><Link href="/appointment" className="hover:underline">Book Appointment</Link></li>
                  <li><Link href="/audiologist/login" className="hover:underline">Audiologist Portal</Link></li>
                </ul>
              </div>

              {/* Legal & Social */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Legal & Connect</h3>
                <ul className="space-y-1">
                  <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
                  <li className="flex space-x-3 mt-2">
                    <a href="#" aria-label="Facebook" className="hover:text-blue-400">Facebook</a>
                    <a href="#" aria-label="Instagram" className="hover:text-pink-400">Instagram</a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-blue-300">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-6 border-t border-gray-700 pt-4">
              <p>&copy; {new Date().getFullYear()} Heal Hearing. All rights reserved.</p>
              <p className="text-xs text-gray-400">Designed with ❤️ in India</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
