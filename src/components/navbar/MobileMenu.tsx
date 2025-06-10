import Link from 'next/link'
import { type FC } from 'react';
import LanguageSwitch from '../LanguageSwitch';
import { useLanguage } from '../../contexts/LanguageContext';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
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

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white shadow-lg">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link
          href="/"
          className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          onClick={() => setIsOpen(false)}
        >
          {t('nav.home')}
        </Link>
        <Link
          href="/services"
          className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          onClick={() => setIsOpen(false)}
        >
          {t('nav.services')}
        </Link>
        <Link
          href="/blog"
          className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          onClick={() => setIsOpen(false)}
        >
          {t('nav.blog')}
        </Link>
        <Link
          href="/contact"
          className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          onClick={() => setIsOpen(false)}
        >
          {t('nav.contactUs')}
        </Link>
        <div className="px-3 py-2">
          <LanguageSwitch />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu; 