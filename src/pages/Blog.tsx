import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { BlogList } from '../components/blog/BlogList';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className={`py-24 bg-gray-50 min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('blog.landing.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('blog.landing.subtitle')}
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['gettingStarted', 'setupGuides', 'visaImmigration', 'operations'].map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-white text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200 shadow-sm"
            >
              {t(`blog.categories.${category}`)}
            </button>
          ))}
        </div>

        {/* Blog Posts */}
        <BlogList />
      </div>
    </div>
  );
};

export default Blog;