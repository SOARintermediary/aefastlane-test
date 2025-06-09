import { type FC } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { blogSections } from './navData';

interface BlogDropdownProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const BlogDropdown: FC<BlogDropdownProps> = ({ isOpen, setIsOpen }) => {
  const { t } = useLanguage();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-primary hover:text-primary-light"
      >
        {t('nav.blog')}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200">
          <a
            href="/blog"
            className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-gray-100 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            📚 {t('common.viewAll')}
          </a>
          
          {blogSections.map((section, index) => (
            <div key={index} className={`px-4 py-2 ${index > 0 ? 'border-t border-gray-100' : ''}`}>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                {t(section.titleKey)}
              </h4>
              {section.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.href}
                  className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon} {t(link.textKey)}
                </a>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogDropdown; 