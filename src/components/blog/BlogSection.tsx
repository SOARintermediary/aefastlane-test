import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface BlogSectionProps {
  titleKey: string;
  contentKey?: string;
  listKey?: string;
  className?: string;
  children?: React.ReactNode;
}

const BlogSection: React.FC<BlogSectionProps> = ({
  titleKey,
  contentKey,
  listKey,
  className = '',
  children
}) => {
  const { t } = useLanguage();

  const renderList = () => {
    if (!listKey) return null;
    const items = t(listKey).split('|');
    
    return (
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="leading-relaxed">
            {item.trim()}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section className={`mb-8 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {t(titleKey)}
      </h2>
      
      {contentKey && (
        <p className="text-gray-700 leading-relaxed mb-4">
          {t(contentKey)}
        </p>
      )}
      
      {listKey && renderList()}
      
      {children}
    </section>
  );
};

export default BlogSection; 