import React from 'react';
import { Briefcase } from 'lucide-react';
import BlogArticle from '../../components/blog/BlogArticle';
import BlogSection from '../../components/blog/BlogSection';
import { useLanguage } from '../../contexts/LanguageContext';

const BusinessSetup: React.FC = () => {
  const { t } = useLanguage();

  return (
    <BlogArticle
      icon={Briefcase}
      category="blog.categories.gettingStarted"
      titleKey="blog.businessSetup.title"
      descriptionKey="blog.businessSetup.description"
    >
      {/* Requirements */}
      <BlogSection
        titleKey="blog.businessSetup.requirements.title"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">
              {t('blog.businessSetup.requirements.legal')}
            </h3>
            <p className="text-gray-700">
              {t('blog.businessSetup.requirements.legalDescription')}
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">
              {t('blog.businessSetup.requirements.documents')}
            </h3>
            <p className="text-gray-700">
              {t('blog.businessSetup.requirements.documentsDescription')}
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">
              {t('blog.businessSetup.requirements.capital')}
            </h3>
            <p className="text-gray-700">
              {t('blog.businessSetup.requirements.capitalDescription')}
            </p>
          </div>
        </div>
      </BlogSection>

      {/* Business Activities */}
      <BlogSection
        titleKey="blog.businessActivities.popular.title"
        listKey="blog.businessActivities.popular.items"
        className="mt-8"
      />

      {/* Call to Action */}
      <div className="mt-12 bg-primary/5 p-8 rounded-lg">
        <h3 className="text-xl font-bold text-primary mb-4">
          {t('blog.common.consultation')}
        </h3>
        <p className="text-gray-700 mb-6">
          {t('blog.businessSetup.needHelp.description')}
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors duration-200">
          {t('blog.common.getStarted')}
        </button>
      </div>
    </BlogArticle>
  );
};

export default BusinessSetup; 