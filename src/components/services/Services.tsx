'use client';

import { type FC } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import ServiceCard from './ServiceCard';
import { services } from './serviceData';

const Services: FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            {t('services.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.key}
              title={t(`services.${service.key}.title`)}
              description={t(`services.${service.key}.description`)}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 