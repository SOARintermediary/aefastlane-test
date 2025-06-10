'use client'

import Link from 'next/link'
import { type FC } from 'react';
import LanguageSwitch from '../LanguageSwitch';
import { useLanguage } from '../../contexts/LanguageContext';

interface MobileMenuProps {
  setIsOpen: (isOpen: boolean) => void
}

const MobileMenu = ({ setIsOpen }: MobileMenuProps) => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link
          href="/"
          className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/services"
          className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
        <Link
          href="/blog"
          className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          onClick={() => setIsOpen(false)}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
        <div className="px-3 py-2">
          <LanguageSwitch />
        </div>
      </div>
    </div>
  )
}

export default MobileMenu 