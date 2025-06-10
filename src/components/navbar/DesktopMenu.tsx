import { type FC } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Link from 'next/link';
import LanguageSwitch from '../LanguageSwitch';
import BlogDropdown from './BlogDropdown';

interface DesktopMenuProps {
  isBlogOpen: boolean;
  setIsBlogOpen: (isOpen: boolean) => void;
}

const DesktopMenu: FC<DesktopMenuProps> = ({ isBlogOpen, setIsBlogOpen }) => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
      <Link
        href="/"
        className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
      >
        Home
      </Link>
      <Link
        href="/services"
        className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
      >
        Services
      </Link>
      <Link
        href="/blog"
        className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
      >
        Blog
      </Link>
      <Link
        href="/contact"
        className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
      >
        Contact
      </Link>
      
      <BlogDropdown isOpen={isBlogOpen} setIsOpen={setIsBlogOpen} />
      
      <LanguageSwitch />
    </div>
  );
};

export default DesktopMenu; 