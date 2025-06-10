'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              AE FastLane
            </Link>
          </div>
          
          <div className="hidden md:flex items-center">
            <DesktopMenu />
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default Navbar; 