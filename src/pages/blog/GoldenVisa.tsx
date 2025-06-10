import React from 'react';
import { Shield } from 'lucide-react';
import BlogArticle from '../../components/blog/BlogArticle';
import BlogSection from '../../components/blog/BlogSection';
import { useLanguage } from '../../contexts/LanguageContext';

const GoldenVisa: React.FC = () => {
  const { t } = useLanguage();

  return (
    <BlogArticle
      icon={Shield}
      category="blog.categories.visaImmigration"
      titleKey="blog.goldenVisa.title"
      descriptionKey="blog.goldenVisa.description"
    >
      {/* Overview */}
      <BlogSection
        titleKey="blog.goldenVisa.overview.title"
        contentKey="blog.goldenVisa.overview.description"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">
              {t('blog.goldenVisa.overview.duration')}
            </h3>
            <p>{t('blog.goldenVisa.overview.durationValue')}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">
              {t('blog.goldenVisa.overview.family')}
            </h3>
            <p>{t('blog.goldenVisa.overview.familyValue')}</p>
          </div>
        </div>
      </BlogSection>

      {/* Call to Action */}
      <div className="mt-12 bg-primary/5 p-8 rounded-lg">
        <h3 className="text-xl font-bold text-primary mb-4">
          {t('blog.common.consultation')}
        </h3>
        <p className="text-gray-700 mb-6">
          {t('blog.goldenVisa.needHelp.description')}
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-200">
          {t('blog.common.getStarted')}
        </button>
      </div>
    </BlogArticle>
  );
};

export default GoldenVisa; 