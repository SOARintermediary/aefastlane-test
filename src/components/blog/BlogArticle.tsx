import React from 'react';
import { ArrowLeft, LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

interface BlogArticleProps {
  icon: LucideIcon;
  category: string;
  titleKey: string;
  descriptionKey: string;
  children?: React.ReactNode;
}

// Separate component for the back button to improve modularity
const BackToBlogs: React.FC<{ isRTL: boolean }> = ({ isRTL }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <button
      onClick={() => navigate('/blog')}
      className="flex items-center text-primary hover:text-primary-light mb-8 transition-colors duration-200"
    >
      <ArrowLeft className={`h-5 w-5 ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
      {t('blog.common.backToBlog')}
    </button>
  );
};

// Separate component for the article header to improve modularity
const ArticleHeader: React.FC<{
  icon: LucideIcon;
  category: string;
  titleKey: string;
  descriptionKey: string;
  isRTL: boolean;
}> = ({ icon: Icon, category, titleKey, descriptionKey, isRTL }) => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
      <div className="flex items-center mb-4">
        <Icon className={`h-8 w-8 text-primary ${isRTL ? 'ml-3' : 'mr-3'}`} />
        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
          {t(category)}
        </span>
      </div>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        {t(titleKey)}
      </h1>
      
      <p className="text-xl text-gray-600 leading-relaxed">
        {t(descriptionKey)}
      </p>
    </div>
  );
};

const BlogArticle: React.FC<BlogArticleProps> = ({
  icon,
  category,
  titleKey,
  descriptionKey,
  children
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div 
      className={`py-24 bg-gray-50 min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackToBlogs isRTL={isRTL} />
        <ArticleHeader
          icon={icon}
          category={category}
          titleKey={titleKey}
          descriptionKey={descriptionKey}
          isRTL={isRTL}
        />
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BlogArticle; 