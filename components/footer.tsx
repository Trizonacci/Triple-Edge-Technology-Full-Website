import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = 2025;

  return (
    <footer className="bg-[#111111] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.png"
                  alt="Triple Edge Technology Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold">Triple Edge Technology</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Helping businesses work smarter through practical automation and digital operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#1F6FD6] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#1F6FD6] transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#1F6FD6] transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#1F6FD6] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                Email:{' '}
                <a
                  href="mailto:tristan@tripleedgetechnology.com"
                  className="text-[#1F6FD6] hover:text-[#0E3F8A] transition-colors"
                >
                  tristan@tripleedgetechnology.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Triple Edge Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
