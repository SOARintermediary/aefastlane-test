'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { blogTranslations } from '../translations/blog';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

type TranslationRecord = Record<string, string>;

interface TranslationsType {
  en: TranslationRecord;
  ar: TranslationRecord;
}

const translations: TranslationsType = {
  en: {
    ...blogTranslations.en,
    // Features Section
    'features.title': 'AEFastLane – Your Trusted UAE Business Setup Partner',
    'features.subtitle': 'Empowering Enterprises to Thrive in the Emirates',
    'features.service.title': 'All-in-One Business Services',
    'features.service.description': 'Complete support from company formation to bank account opening',
    'features.plans.title': 'Tailored & Affordable Plans',
    'features.plans.description': 'Budget-friendly solutions designed around your business needs',
    'features.track.title': 'Global Track Record',
    'features.track.description': 'Trusted by clients worldwide',
    'features.client.title': 'Client-First Approach',
    'features.client.description': 'Personalized service focused on your success and peace of mind',
    'features.onboarding.title': 'Effortless Onboarding',
    'features.onboarding.description': 'Easy adaptation to UAE\'s legal and operational landscape',
    'features.network.title': 'Extensive Network Advantage',
    'features.network.description': 'Accelerated setup through deep regional and international ties',

    // Navigation
    'nav.services': 'Services',
    'nav.pricing': 'Pricing',
    'nav.hrServices': 'HR Services',
    'nav.contactUs': 'Contact Us',
    'nav.blog': 'Blog',
    
    // Hero
    'hero.title1': 'Your One-Stop Partner for',
    'hero.title2': 'Business Setup in UAE',
    'hero.description': 'Fast, reliable, and tailored solutions for company formation, Golden Visa assistance, and complete PRO services.',
    'hero.cta': 'Book a Free Consultation',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive business setup and support services in UAE',
    'services.companyFormation.title': 'UAE Company Formation',
    'services.companyFormation.description': 'Setup Mainland LLC, Free Zone Companies (RAKEZ, DMCC, IFZA), and Offshore Entities.',
    'services.companyFormation.comingSoon': 'Service coming soon',
    'services.visa.title': 'Visa Services',
    'services.visa.description': 'Comprehensive visa solutions including Golden Visa, Family Visa, and Work Permits.',
    'services.visa.comingSoon': 'Service coming soon',
    'services.pro.title': 'PRO Services',
    'services.pro.description': 'Handle all government-related procedures with full pricing transparency.',
    'services.pro.comingSoon': 'Service coming soon',
    'services.hr.title': 'HR Solutions',
    'services.hr.description': 'Complete HR support including recruitment, payroll, and employee management.',
    'services.hr.comingSoon': 'Service coming soon',
    
    // Pricing
    'pricing.title': 'Transparent Pricing',
    'pricing.subtitle': 'Clear pricing for all your business setup needs',
    'pricing.note': '* All fees are in AED and subject to change based on government regulations',
    'pricing.getStarted': 'Get Started Today',
    'pricing.table.service': 'Service',
    'pricing.table.fee': 'Fee (AED)',
    'pricing.table.total': 'Total',
    'pricing.categories.employment': 'New Employment Visa (Inside Country)',
    'pricing.categories.renewal': 'Visa Renewal',
    'pricing.categories.cancellation': 'Visa Cancellation',
    'pricing.categories.translation': 'Translation Services',
    'pricing.categories.attestation': 'Certificate Attestation',
    
    // Contact Form
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch for a free consultation',
    'contact.name': 'Full Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone Number',
    'contact.company': 'Company Name (if applicable)',
    'contact.service': 'Service Interested In',
    'contact.message': 'Message',
    'contact.submit': 'Send Message',
    'contact.required': 'is required',
    'contact.invalidEmail': 'Invalid email address',
    
    // Footer
    'footer.description': 'Your One-Stop Partner for Business Setup in UAE',
    'footer.contactUs': 'Contact Us',
    'footer.followUs': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    
    // Blog
    'blog.title': 'UAE Business Insights & Guides',
    'blog.subtitle': 'Expert insights, practical guides, and answers to your most important questions about doing business in the UAE.',
    'blog.readMore': 'Read Article',
    'blog.backToBlog': 'Back to Blog',
    'blog.categories.gettingStarted': 'Getting Started',
    'blog.categories.setupGuides': 'Setup Guides',
    'blog.categories.visaImmigration': 'Visa & Immigration',
    'blog.categories.operations': 'Operations & Compliance',
    'blog.readTime': 'min read',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.viewAll': 'View All',
    'common.readMore': 'Read More',
    'common.contactUs': 'Contact Us',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    
    // Blog Posts
    'blog.posts.freeZoneVsMainland.title': 'Free Zone vs Mainland: Which is Right for Your UAE Business?',
    'blog.posts.freeZoneVsMainland.excerpt': 'Discover the key differences between free zone and mainland business setup in the UAE, and learn which option best suits your business goals and requirements.',
    
    'blog.posts.startingBusiness.title': 'Starting a Business in the UAE as a Foreigner',
    'blog.posts.startingBusiness.excerpt': 'Everything foreign entrepreneurs need to know about starting a business in the UAE, from legal requirements to practical considerations.',
    
    'blog.posts.businessActivities.title': 'Business Activities & Licensing Categories Explained',
    'blog.posts.businessActivities.excerpt': 'Navigate the complex world of UAE business activities and licensing categories. Learn how to choose the right classification for your venture.',
    
    'blog.posts.mainlandLicense.title': 'How to Open a Mainland Business License in Dubai',
    'blog.posts.mainlandLicense.excerpt': 'A comprehensive step-by-step guide to obtaining your mainland business license in Dubai, including requirements, procedures, and expert tips.',
    
    'blog.posts.freeZoneSetup.title': 'Step-by-Step Guide to Setting Up a Free Zone Company',
    'blog.posts.freeZoneSetup.excerpt': 'Complete walkthrough of the free zone company setup process, from choosing the right zone to final license approval.',
    
    'blog.posts.visaTypes.title': 'Visa Types and Their Benefits for Business Owners',
    'blog.posts.visaTypes.excerpt': 'Understanding the different visa options available to business owners in the UAE, from investor visas to Golden Visa opportunities.',
    
    'blog.posts.residenceVisa.title': 'How to Apply for UAE Residence Visa Through Your Company',
    'blog.posts.residenceVisa.excerpt': 'Once your business license is issued, learn how to apply for UAE residence visa through your company with AEFastLane\'s expert guidance.',
    
    'blog.posts.goldenVisa.title': 'Golden Visa Eligibility & Application Process Explained',
    'blog.posts.goldenVisa.excerpt': 'The UAE\'s Golden Visa offers long-term residency to investors, entrepreneurs, and professionals. Find out if you qualify and how to apply.',
    
    'blog.posts.familyVisa.title': 'Family and Dependents Visa Sponsorship Made Easy',
    'blog.posts.familyVisa.excerpt': 'Want to bring your family to the UAE? Learn how AEFastLane can help you sponsor dependents smoothly and efficiently.',
    
    'blog.posts.govApprovals.title': 'How AEFastLane Streamlines Government Approvals & Documentation',
    'blog.posts.govApprovals.excerpt': 'Learn how our expert team simplifies complex government procedures and ensures your business stays compliant with UAE regulations.',
    
    'blog.posts.renewals.title': 'Understanding UAE Company Renewals, Modifications & Closures',
    'blog.posts.renewals.excerpt': 'Essential guide to maintaining your UAE business license, making modifications, and understanding closure procedures when needed.',
    
    // Blog Coming Soon
    'blog.comingSoon.title': 'More Expert Content Coming Soon',
    'blog.comingSoon.description': 'We\'re constantly expanding our knowledge base with new insights and guides to help you navigate the UAE business landscape. Stay tuned for more expert content covering advanced topics and industry-specific guidance.',
    
    'blog.comingSoon.advanced.title': 'Advanced Topics',
    'blog.comingSoon.advanced.vat': 'VAT Registration & Compliance',
    'blog.comingSoon.advanced.banking': 'Banking Setup & Requirements',
    'blog.comingSoon.advanced.ip': 'Intellectual Property Protection',
    'blog.comingSoon.advanced.tax': 'Corporate Tax Implications',
    
    'blog.comingSoon.industry.title': 'Industry Insights',
    'blog.comingSoon.industry.tech': 'Tech Startups in UAE',
    'blog.comingSoon.industry.ecommerce': 'E-commerce Licensing Guide',
    'blog.comingSoon.industry.professional': 'Professional Services Setup',
    'blog.comingSoon.industry.healthcare': 'Healthcare Business Licensing',
    
    'blog.comingSoon.strategy.title': 'Strategic Guidance',
    'blog.comingSoon.strategy.entry': 'Market Entry Strategies',
    'blog.comingSoon.strategy.cost': 'Cost Optimization Tips',
    'blog.comingSoon.strategy.scaling': 'Scaling Your UAE Business',
    'blog.comingSoon.strategy.exit': 'Exit Strategies & Procedures',
    
    // Blog CTA
    'blog.cta.title': 'Need Personalized Guidance?',
    'blog.cta.description': 'While our articles provide comprehensive information, every business situation is unique. Get personalized advice from our UAE business setup experts who have helped hundreds of companies succeed.',
    'blog.cta.button': 'Schedule Free Consultation',

    // Blog Posts - Free Zone vs Mainland
    'blog.freeZoneVsMainland.basics.title': 'فهم الأساسيات',
    'blog.freeZoneVsMainland.basics.description': 'توفر دولة الإمارات خيارين رئيسيين لتأسيس الأعمال: المناطق الحرة والبر الرئيسي. لكل منهما مزايا وقيود مميزة يمكن أن تؤثر على استراتيجية عملك.',
    
    'blog.freeZoneVsMainland.freeZone.title': 'شركات المناطق الحرة',
    'blog.freeZoneVsMainland.freeZone.benefits': 'ملكية أجنبية 100%|لا ضرائب على الشركات (في معظم المناطق)|لا ضريبة دخل شخصية|إعادة الأرباح بالكامل|عملية تأسيس مبسطة|لا قيود على العملات',
    
    'blog.freeZoneVsMainland.mainland.title': 'شركات البر الرئيسي',
    'blog.freeZoneVsMainland.mainland.benefits': 'الوصول إلى السوق المحلي الإماراتي|إمكانية التعامل مع الجهات الحكومية|مجموعة واسعة من الأنشطة التجارية|إمكانية فتح مكاتب في أي مكان بالإمارات|قدرات استيراد/تصدير مباشرة|لا قيود على موقع العمل',
    
    'blog.freeZoneVsMainland.differences.title': 'تحليل الفروق الرئيسية',
    'blog.freeZoneVsMainland.differences.aspect': 'الجانب',
    'blog.freeZoneVsMainland.differences.freeZone': 'المنطقة الحرة',
    'blog.freeZoneVsMainland.differences.mainland': 'البر الرئيسي',
    
    'blog.freeZoneVsMainland.differences.ownership': 'الملكية',
    'blog.freeZoneVsMainland.differences.ownershipFreeZone': 'ملكية أجنبية 100%',
    'blog.freeZoneVsMainland.differences.ownershipMainland': 'ملكية أجنبية 100% (منذ 2021)',
    
    'blog.freeZoneVsMainland.differences.marketAccess': 'الوصول للسوق',
    'blog.freeZoneVsMainland.differences.marketAccessFreeZone': 'محدود للمنطقة الحرة والتصدير',
    'blog.freeZoneVsMainland.differences.marketAccessMainland': 'وصول كامل للسوق الإماراتي',
    
    'blog.freeZoneVsMainland.differences.location': 'موقع المكتب',
    'blog.freeZoneVsMainland.differences.locationFreeZone': 'يجب أن يكون داخل المنطقة الحرة',
    'blog.freeZoneVsMainland.differences.locationMainland': 'في أي مكان بالإمارة',
    
    'blog.freeZoneVsMainland.differences.visa': 'حصة التأشيرات',
    'blog.freeZoneVsMainland.differences.visaFreeZone': 'حسب حجم المكتب/الرخصة',
    'blog.freeZoneVsMainland.differences.visaMainland': 'حسب النشاط التجاري',
    
    'blog.freeZoneVsMainland.consideration.title': 'اعتبار مهم',
    'blog.freeZoneVsMainland.consideration.description': 'التغييرات الأخيرة في قانون الإمارات تسمح الآن بملكية أجنبية 100% للشركات في البر الرئيسي في معظم القطاعات، مما يجعل هذا الخيار أكثر جاذبية من أي وقت مضى. ومع ذلك، لا تزال بعض القطاعات الاستراتيجية تتطلب شراكة محلية.',
    
    'blog.freeZoneVsMainland.choose.title': 'أي خيار يجب أن تختار؟',
    'blog.freeZoneVsMainland.chooseFreeZone.title': 'اختر المنطقة الحرة إذا:',
    'blog.freeZoneVsMainland.chooseFreeZone.points': 'عملك موجه بشكل رئيسي للتصدير|تريد تقليل تعقيد وزمن التأسيس|تحسين الضرائب هو أولوية|أنت في مجال التكنولوجيا أو الإعلام أو الصناعات المتخصصة|لا تحتاج للوصول إلى السوق المحلي الإماراتي فوراً',
    
    'blog.freeZoneVsMainland.chooseMainland.title': 'اختر البر الرئيسي إذا:',
    'blog.freeZoneVsMainland.chooseMainland.points': 'تريد خدمة السوق المحلي الإماراتي|تخطط للعمل مع الجهات الحكومية|تحتاج إلى مرونة في موقع المكتب|عملك يتطلب شراكات محلية واسعة|أنت في مجال التجزئة أو الضيافة أو الخدمات',
    
    'blog.freeZoneVsMainland.freeZones.title': 'مناطق حرة شهيرة للنظر فيها',
    'blog.freeZoneVsMainland.freeZones.dmcc': 'مركز دبي للسلع المتعددة',
    'blog.freeZoneVsMainland.freeZones.dmccDesc': 'المنطقة الحرة الرائدة في دبي للسلع والتجارة',
    'blog.freeZoneVsMainland.freeZones.difc': 'مركز دبي المالي العالمي',
    'blog.freeZoneVsMainland.freeZones.difcDesc': 'مركز للخدمات المالية والتكنولوجيا المالية',
    'blog.freeZoneVsMainland.freeZones.rakez': 'راكز',
    'blog.freeZoneVsMainland.freeZones.rakezDesc': 'خيار فعال من حيث التكلفة مع باقات مرنة',
    
    'blog.freeZoneVsMainland.needHelp.title': 'تحتاج إلى توجيه متخصص؟',
    'blog.freeZoneVsMainland.needHelp.description': 'الاختيار بين تأسيس المنطقة الحرة والبر الرئيسي قرار حاسم يعتمد على نموذج عملك المحدد والسوق المستهدف وأهدافك طويلة المدى. يمكن لخبرائنا مساعدتك في تحليل متطلباتك واتخاذ الخيار الصحيح.',
    'blog.freeZoneVsMainland.needHelp.cta': 'احصل على استشارة مجانية',

    // Golden Visa Article
    'blog.goldenVisa.overview.title': 'نظرة عامة على التأشيرة الذهبية',
    'blog.goldenVisa.overview.duration': 'المدة',
    'blog.goldenVisa.overview.durationValue': '5-10 سنوات',
    'blog.goldenVisa.overview.family': 'شمول العائلة',
    'blog.goldenVisa.overview.familyValue': 'الزوج/الزوجة والأطفال',
    'blog.goldenVisa.overview.renewable': 'قابلة للتجديد',
    'blog.goldenVisa.overview.renewableValue': 'نعم',

    'blog.goldenVisa.categories.investors.title': 'المستثمرون',
    'blog.goldenVisa.categories.investors.duration': '10 سنوات',
    'blog.goldenVisa.categories.investors.requirements': 'استثمار 10 ملايين درهم في صندوق استثمار عام|استثمار 10 ملايين درهم في شركة إماراتية (51% ملكية إماراتية)|تأسيس شركة برأس مال 10 ملايين درهم|شريك في شركة قائمة بقيمة 10 ملايين درهم',
    'blog.goldenVisa.categories.investors.benefits': 'لا يحتاج إلى كفيل|تأشيرة دخول متعددة|كفالة أفراد العائلة|تصريح عمل مشمول',

    'blog.goldenVisa.categories.entrepreneurs.title': 'رواد الأعمال',
    'blog.goldenVisa.categories.entrepreneurs.duration': '5 سنوات',
    'blog.goldenVisa.categories.entrepreneurs.requirements': 'امتلاك مشروع بقيمة 500,000 درهم كحد أدنى|موافقة من حاضنة أو مسرع أعمال إماراتي|بيع مشروع سابق بقيمة 7 ملايين درهم كحد أدنى|مؤسس شركة ناشئة بتمويل 500,000 درهم',
    'blog.goldenVisa.categories.entrepreneurs.benefits': 'حقوق تشغيل الأعمال|كفالة العائلة|تأشيرة قابلة للتجديد|فرص استثمارية',

    'blog.goldenVisa.categories.talents.title': 'المواهب المتخصصة',
    'blog.goldenVisa.categories.talents.duration': '10 سنوات',
    'blog.goldenVisa.categories.talents.requirements': 'الأطباء والمتخصصون في المجالات ذات الأولوية|العلماء والباحثون|المبدعون في الثقافة والفنون|المخترعون بحقوق براءات اختراع قيمة',
    'blog.goldenVisa.categories.talents.benefits': 'حقوق الممارسة المهنية|فرص البحث|المساهمات الثقافية|دعم الابتكار',

    'blog.goldenVisa.categories.students.title': 'الطلاب المتفوقون',
    'blog.goldenVisa.categories.students.duration': '5 سنوات',
    'blog.goldenVisa.categories.students.requirements': 'خريجو الجامعات الإماراتية المتفوقون (معدل 3.75+)|خريجو أفضل 100 جامعة عالمياً|الطلاب المتفوقون في المدارس الثانوية|الطلاب ذوو الإنجازات الاستثنائية',
    'blog.goldenVisa.categories.students.benefits': 'حقوق الدراسة والعمل|فرص وظيفية|كفالة العائلة|دعم أكاديمي',

    'blog.goldenVisa.process.title': 'خطوات التقديم',
    'blog.goldenVisa.process.step1.title': 'تقييم الأهلية',
    'blog.goldenVisa.process.step1.description': 'تحديد فئة التأشيرة الذهبية التي تتأهل لها',
    'blog.goldenVisa.process.step1.duration': '1-2 يوم',
    'blog.goldenVisa.process.step1.documents': 'شهادات المؤهلات|إثباتات الاستثمار|الوثائق المهنية',

    'blog.goldenVisa.process.step2.title': 'تحضير المستندات',
    'blog.goldenVisa.process.step2.description': 'جمع وتصديق جميع المستندات المطلوبة',
    'blog.goldenVisa.process.step2.duration': '1-2 أسبوع',
    'blog.goldenVisa.process.step2.documents': 'نسخ جواز السفر|الشهادات التعليمية|البيانات المالية|الشهادات الطبية',

    'blog.goldenVisa.process.step3.title': 'تقديم الطلب',
    'blog.goldenVisa.process.step3.description': 'تقديم الطلب عبر القنوات الرسمية',
    'blog.goldenVisa.process.step3.duration': 'يوم واحد',
    'blog.goldenVisa.process.step3.documents': 'نموذج الطلب المكتمل|المستندات الداعمة|دفع الرسوم|البيانات البيومترية',

    'blog.goldenVisa.process.step4.title': 'المراجعة والتحقق',
    'blog.goldenVisa.process.step4.description': 'مراجعة السلطات للطلب والتحقق من الوثائق',
    'blog.goldenVisa.process.step4.duration': '30-60 يوم',
    'blog.goldenVisa.process.step4.documents': 'التحقق من الخلفية|التحقق من الوثائق|التحقق من الاستثمار',

    'blog.goldenVisa.process.step5.title': 'الموافقة والإصدار',
    'blog.goldenVisa.process.step5.description': 'استلام الموافقة وختم التأشيرة',
    'blog.goldenVisa.process.step5.duration': '5-10 أيام',
    'blog.goldenVisa.process.step5.documents': 'خطاب الموافقة|ختم التأشيرة|طلب الهوية الإماراتية',

    'blog.goldenVisa.investment.title': 'خيارات الاستثمار',
    'blog.goldenVisa.investment.realEstate.title': 'الاستثمار العقاري',
    'blog.goldenVisa.investment.realEstate.amount': '2 مليون درهم',
    'blog.goldenVisa.investment.realEstate.duration': '5 سنوات',
    'blog.goldenVisa.investment.realEstate.conditions': 'قيمة العقار 2 مليون درهم كحد أدنى|القرض 70% كحد أقصى|الاحتفاظ بالعقار لمدة 3 سنوات',
    'blog.goldenVisa.investment.realEstate.benefits': 'دخل الإيجار|ارتفاع قيمة العقار|إقامة للعائلة',

    'blog.goldenVisa.investment.business.title': 'الاستثمار في الأعمال',
    'blog.goldenVisa.investment.business.amount': '10 ملايين درهم',
    'blog.goldenVisa.investment.business.duration': '10 سنوات',
    'blog.goldenVisa.investment.business.conditions': 'تأسيس شركة جديدة|51% ملكية إماراتية|خلق فرص عمل',
    'blog.goldenVisa.investment.business.benefits': 'ملكية الأعمال|إقامة طويلة الأمد|مساهمة اقتصادية',

    'blog.goldenVisa.investment.fund.title': 'صندوق الاستثمار',
    'blog.goldenVisa.investment.fund.amount': '10 ملايين درهم',
    'blog.goldenVisa.investment.fund.duration': '10 سنوات',
    'blog.goldenVisa.investment.fund.conditions': 'الاستثمار في صندوق معتمد|التزام 3 سنوات كحد أدنى|صندوق يركز على الاقتصاد الإماراتي',
    'blog.goldenVisa.investment.fund.benefits': 'إدارة محترفة|محفظة متنوعة|مشاركة اقتصادية',

    'blog.goldenVisa.family.title': 'كفالة العائلة',
    'blog.goldenVisa.family.spouse.title': 'الزوج/الزوجة',
    'blog.goldenVisa.family.spouse.eligibility': 'متزوج قانونياً',
    'blog.goldenVisa.family.spouse.duration': 'نفس مدة مقدم الطلب الرئيسي',
    'blog.goldenVisa.family.spouse.requirements': 'شهادة الزواج|نسخة جواز السفر|شهادة طبية',

    'blog.goldenVisa.family.children.title': 'الأطفال',
    'blog.goldenVisa.family.children.eligibility': 'تحت 18 سنة أو يدرسون',
    'blog.goldenVisa.family.children.duration': 'حتى 18 سنة أو التخرج',
    'blog.goldenVisa.family.children.requirements': 'شهادة الميلاد|التسجيل المدرسي|شهادة طبية',

    'blog.goldenVisa.family.parents.title': 'الوالدين',
    'blog.goldenVisa.family.parents.eligibility': 'فوق 60 سنة',
    'blog.goldenVisa.family.parents.duration': 'سنة قابلة للتجديد',
    'blog.goldenVisa.family.parents.requirements': 'شهادة الميلاد|نسخة جواز السفر|تأمين صحي',

    'blog.goldenVisa.family.workers.title': 'العمال المنزليون',
    'blog.goldenVisa.family.workers.eligibility': 'موظفو المنزل',
    'blog.goldenVisa.family.workers.duration': 'حسب العقد',
    'blog.goldenVisa.family.workers.requirements': 'عقد العمل|شهادة الراتب|شهادة طبية',
  },
  ar: {
    ...blogTranslations.ar,
    // Features Section
    'features.title': 'AEFastLane - شريكك الموثوق في تأسيس الأعمال في الإمارات',
    'features.subtitle': 'تمكين المؤسسات من الازدهار في الإمارات',
    'features.service.title': 'خدمات الأعمال الشاملة',
    'features.service.description': 'دعم كامل من تأسيس الشركة إلى فتح الحساب المصرفي',
    'features.plans.title': 'خطط مخصصة وبأسعار معقولة',
    'features.plans.description': 'حلول اقتصادية مصممة حسب احتياجات عملك',
    'features.track.title': 'سجل عالمي',
    'features.track.description': 'موثوق به من قبل العملاء في جميع أنحاء العالم',
    'features.client.title': 'نهج العميل أولاً',
    'features.client.description': 'خدمة شخصية تركز على نجاحك وراحة بالك',
    'features.onboarding.title': 'انضمام سهل',
    'features.onboarding.description': 'تكيف سهل مع المشهد القانوني والتشغيلي في الإمارات',
    'features.network.title': 'ميزة الشبكة الواسعة',
    'features.network.description': 'إعداد سريع من خلال علاقات إقليمية ودولية عميقة',

    // Navigation
    'nav.services': 'الخدمات',
    'nav.pricing': 'الأسعار',
    'nav.hrServices': 'خدمات الموارد البشرية',
    'nav.contactUs': 'اتصل بنا',
    'nav.blog': 'المدونة',
    
    // Hero
    'hero.title1': 'شريكك الشامل في',
    'hero.title2': 'تأسيس الأعمال في الإمارات',
    'hero.description': 'حلول سريعة وموثوقة ومخصصة لتأسيس الشركات، والمساعدة في الإقامة الذهبية، وخدمات العلاقات الحكومية الكاملة.',
    'hero.cta': 'احجز استشارة مجانية',
    
    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'خدمات شاملة لتأسيس وإدارة الأعمال في الإمارات',
    'services.companyFormation.title': 'تأسيس الشركات في الإمارات',
    'services.companyFormation.description': 'تأسيس شركات البر الرئيسي والمناطق الحرة (راكز، دي إم سي سي، إفزا) والشركات الخارجية.',
    'services.companyFormation.comingSoon': 'الخدمة قريباً',
    'services.visa.title': 'خدمات التأشيرات',
    'services.visa.description': 'حلول شاملة للتأشيرات تشمل الإقامة الذهبية وتأشيرات العائلة وتصاريح العمل.',
    'services.visa.comingSoon': 'الخدمة قريباً',
    'services.pro.title': 'خدمات العلاقات الحكومية',
    'services.pro.description': 'إدارة جميع الإجراءات الحكومية بشفافية تامة في الأسعار.',
    'services.pro.comingSoon': 'الخدمة قريباً',
    'services.hr.title': 'حلول الموارد البشرية',
    'services.hr.description': 'دعم كامل للموارد البشرية يشمل التوظيف والرواتب وإدارة الموظفين.',
    'services.hr.comingSoon': 'الخدمة قريباً',
    
    // Pricing
    'pricing.title': 'أسعار شفافة',
    'pricing.subtitle': 'أسعار واضحة لجميع احتياجات تأسيس أعمالك',
    'pricing.note': '* جميع الرسوم بالدرهم الإماراتي وقابلة للتغيير حسب اللوائح الحكومية',
    'pricing.getStarted': 'ابدأ اليوم',
    'pricing.table.service': 'الخدمة',
    'pricing.table.fee': 'الرسوم (درهم)',
    'pricing.table.total': 'المجموع',
    'pricing.categories.employment': 'تأشيرة عمل جديدة (داخل الدولة)',
    'pricing.categories.renewal': 'تجديد التأشيرة',
    'pricing.categories.cancellation': 'إلغاء التأشيرة',
    'pricing.categories.translation': 'خدمات الترجمة',
    'pricing.categories.attestation': 'تصديق الشهادات',
    
    // Contact Form
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'تواصل معنا للحصول على استشارة مجانية',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.company': 'اسم الشركة (إن وجد)',
    'contact.service': 'الخدمة المطلوبة',
    'contact.message': 'الرسالة',
    'contact.submit': 'إرسال الرسالة',
    'contact.required': 'مطلوب',
    'contact.invalidEmail': 'بريد إلكتروني غير صالح',
    
    // Footer
    'footer.description': 'شريكك الشامل في تأسيس الأعمال في الإمارات',
    'footer.contactUs': 'اتصل بنا',
    'footer.followUs': 'تابعنا',
    'footer.rights': 'جميع الحقوق محفوظة.',
    
    // Blog
    'blog.title': 'رؤى وأدلة الأعمال في الإمارات',
    'blog.subtitle': 'رؤى الخبراء والأدلة العملية وإجابات لأهم أسئلتك حول ممارسة الأعمال في الإمارات.',
    'blog.readMore': 'اقرأ المقال',
    'blog.backToBlog': 'العودة إلى المدونة',
    'blog.categories.gettingStarted': 'البداية',
    'blog.categories.setupGuides': 'أدلة التأسيس',
    'blog.categories.visaImmigration': 'التأشيرات والهجرة',
    'blog.categories.operations': 'العمليات والامتثال',
    'blog.readTime': 'دقائق للقراءة',
    
    // Common
    'common.learnMore': 'اعرف المزيد',
    'common.getStarted': 'ابدأ الآن',
    'common.viewAll': 'عرض الكل',
    'common.readMore': 'اقرأ المزيد',
    'common.contactUs': 'اتصل بنا',
    'common.loading': 'جاري التحميل...',
    'common.error': 'خطأ',
    'common.success': 'تم بنجاح',
    'common.submit': 'إرسال',
    'common.cancel': 'إلغاء',
    
    // Blog Posts
    'blog.posts.freeZoneVsMainland.title': 'المنطقة الحرة مقابل البر الرئيسي: أيهما أنسب لشركتك في الإمارات؟',
    'blog.posts.freeZoneVsMainland.excerpt': 'اكتشف الفروق الرئيسية بين تأسيس الشركات في المناطق الحرة والبر الرئيسي في الإمارات، وتعرف على الخيار الأنسب لأهداف ومتطلبات عملك.',
    
    'blog.posts.startingBusiness.title': 'تأسيس شركة في الإمارات كأجنبي',
    'blog.posts.startingBusiness.excerpt': 'كل ما يحتاج رواد الأعمال الأجانب معرفته عن تأسيس شركة في الإمارات، من المتطلبات القانونية إلى الاعتبارات العملية.',
    
    'blog.posts.businessActivities.title': 'شرح أنشطة الأعمال وفئات الترخيص',
    'blog.posts.businessActivities.excerpt': 'تنقل في عالم أنشطة الأعمال وفئات الترخيص في الإمارات. تعلم كيفية اختيار التصنيف المناسب لمشروعك.',
    
    'blog.posts.mainlandLicense.title': 'كيفية الحصول على رخصة تجارية في البر الرئيسي بدبي',
    'blog.posts.mainlandLicense.excerpt': 'دليل شامل خطوة بخطوة للحصول على رخصة تجارية في البر الرئيسي بدبي، يشمل المتطلبات والإجراءات ونصائح الخبراء.',
    
    'blog.posts.freeZoneSetup.title': 'دليل خطوة بخطوة لتأسيس شركة في المنطقة الحرة',
    'blog.posts.freeZoneSetup.excerpt': 'شرح كامل لعملية تأسيس شركة في المنطقة الحرة، من اختيار المنطقة المناسبة إلى الموافقة النهائية على الترخيص.',
    
    'blog.posts.visaTypes.title': 'أنواع التأشيرات ومزاياها لأصحاب الأعمال',
    'blog.posts.visaTypes.excerpt': 'فهم خيارات التأشيرات المختلفة المتاحة لأصحاب الأعمال في الإمارات، من تأشيرات المستثمرين إلى فرص الإقامة الذهبية.',
    
    'blog.posts.residenceVisa.title': 'كيفية التقدم للحصول على تأشيرة إقامة في الإمارات من خلال شركتك',
    'blog.posts.residenceVisa.excerpt': 'بمجرد إصدار رخصة عملك، تعرف على كيفية التقدم للحصول على تأشيرة إقامة في الإمارات من خلال شركتك بتوجيه خبراء AEFastLane.',
    
    'blog.posts.goldenVisa.title': 'شرح أهلية وإجراءات التقدم للإقامة الذهبية',
    'blog.posts.goldenVisa.excerpt': 'تقدم الإقامة الذهبية في الإمارات إقامة طويلة الأمد للمستثمرين ورواد الأعمال والمهنيين. اكتشف ما إذا كنت مؤهلاً وكيفية التقديم.',
    
    'blog.posts.familyVisa.title': 'كفالة تأشيرات العائلة والمعالين بسهولة',
    'blog.posts.familyVisa.excerpt': 'هل تريد إحضار عائلتك إلى الإمارات؟ تعرف على كيف يمكن لـ AEFastLane مساعدتك في كفالة المعالين بسلاسة وكفاءة.',
    
    'blog.posts.govApprovals.title': 'كيف تسهل AEFastLane الموافقات والوثائق الحكومية',
    'blog.posts.govApprovals.excerpt': 'تعرف على كيف يقوم فريق خبرائنا بتبسيط الإجراءات الحكومية المعقدة ويضمن امتثال شركتك للوائح الإماراتية.',
    
    'blog.posts.renewals.title': 'فهم تجديدات وتعديلات وإغلاق الشركات في الإمارات',
    'blog.posts.renewals.excerpt': 'دليل أساسي للحفاظ على رخصة عملك في الإمارات، وإجراء التعديلات، وفهم إجراءات الإغلاق عند الحاجة.',
    
    // Blog Coming Soon
    'blog.comingSoon.title': 'المزيد من المحتوى المتخصص قريباً',
    'blog.comingSoon.description': 'نحن نوسع باستمرار قاعدة معرفتنا برؤى وأدلة جديدة لمساعدتك في التنقل في بيئة الأعمال الإماراتية. ترقب المزيد من المحتوى المتخصص الذي يغطي مواضيع متقدمة وتوجيهات خاصة بالصناعة.',
    
    'blog.comingSoon.advanced.title': 'مواضيع متقدمة',
    'blog.comingSoon.advanced.vat': 'تسجيل وامتثال ضريبة القيمة المضافة',
    'blog.comingSoon.advanced.banking': 'إعداد ومتطلبات البنوك',
    'blog.comingSoon.advanced.ip': 'حماية الملكية الفكرية',
    'blog.comingSoon.advanced.tax': 'آثار الضريبة على الشركات',
    
    'blog.comingSoon.industry.title': 'رؤى الصناعة',
    'blog.comingSoon.industry.tech': 'الشركات الناشئة التقنية في الإمارات',
    'blog.comingSoon.industry.ecommerce': 'دليل ترخيص التجارة الإلكترونية',
    'blog.comingSoon.industry.professional': 'إعداد الخدمات المهنية',
    'blog.comingSoon.industry.healthcare': 'ترخيص الأعمال الصحية',
    
    'blog.comingSoon.strategy.title': 'التوجيه الاستراتيجي',
    'blog.comingSoon.strategy.entry': 'استراتيجيات دخول السوق',
    'blog.comingSoon.strategy.cost': 'نصائح تحسين التكلفة',
    'blog.comingSoon.strategy.scaling': 'توسيع عملك في الإمارات',
    'blog.comingSoon.strategy.exit': 'استراتيجيات وإجراءات الخروج',
    
    // Blog CTA
    'blog.cta.title': 'هل تحتاج إلى توجيه شخصي؟',
    'blog.cta.description': 'بينما توفر مقالاتنا معلومات شاملة، كل حالة عمل فريدة من نوعها. احصل على نصائح شخصية من خبراء تأسيس الأعمال في الإمارات الذين ساعدوا مئات الشركات على النجاح.',
    'blog.cta.button': 'جدول استشارة مجانية',

    // Blog Posts - Free Zone vs Mainland
    'blog.freeZoneVsMainland.basics.title': 'فهم الأساسيات',
    'blog.freeZoneVsMainland.basics.description': 'توفر دولة الإمارات خيارين رئيسيين لتأسيس الأعمال: المناطق الحرة والبر الرئيسي. لكل منهما مزايا وقيود مميزة يمكن أن تؤثر على استراتيجية عملك.',
    
    'blog.freeZoneVsMainland.freeZone.title': 'شركات المناطق الحرة',
    'blog.freeZoneVsMainland.freeZone.benefits': 'ملكية أجنبية 100%|لا ضرائب على الشركات (في معظم المناطق)|لا ضريبة دخل شخصية|إعادة الأرباح بالكامل|عملية تأسيس مبسطة|لا قيود على العملات',
    
    'blog.freeZoneVsMainland.mainland.title': 'شركات البر الرئيسي',
    'blog.freeZoneVsMainland.mainland.benefits': 'الوصول إلى السوق المحلي الإماراتي|إمكانية التعامل مع الجهات الحكومية|مجموعة واسعة من الأنشطة التجارية|إمكانية فتح مكاتب في أي مكان بالإمارات|قدرات استيراد/تصدير مباشرة|لا قيود على موقع العمل',
    
    'blog.freeZoneVsMainland.differences.title': 'تحليل الفروق الرئيسية',
    'blog.freeZoneVsMainland.differences.aspect': 'الجانب',
    'blog.freeZoneVsMainland.differences.freeZone': 'المنطقة الحرة',
    'blog.freeZoneVsMainland.differences.mainland': 'البر الرئيسي',
    
    'blog.freeZoneVsMainland.differences.ownership': 'الملكية',
    'blog.freeZoneVsMainland.differences.ownershipFreeZone': 'ملكية أجنبية 100%',
    'blog.freeZoneVsMainland.differences.ownershipMainland': 'ملكية أجنبية 100% (منذ 2021)',
    
    'blog.freeZoneVsMainland.differences.marketAccess': 'الوصول للسوق',
    'blog.freeZoneVsMainland.differences.marketAccessFreeZone': 'محدود للمنطقة الحرة والتصدير',
    'blog.freeZoneVsMainland.differences.marketAccessMainland': 'وصول كامل للسوق الإماراتي',
    
    'blog.freeZoneVsMainland.differences.location': 'موقع المكتب',
    'blog.freeZoneVsMainland.differences.locationFreeZone': 'يجب أن يكون داخل المنطقة الحرة',
    'blog.freeZoneVsMainland.differences.locationMainland': 'في أي مكان بالإمارة',
    
    'blog.freeZoneVsMainland.differences.visa': 'حصة التأشيرات',
    'blog.freeZoneVsMainland.differences.visaFreeZone': 'حسب حجم المكتب/الرخصة',
    'blog.freeZoneVsMainland.differences.visaMainland': 'حسب النشاط التجاري',
    
    'blog.freeZoneVsMainland.consideration.title': 'اعتبار مهم',
    'blog.freeZoneVsMainland.consideration.description': 'التغييرات الأخيرة في قانون الإمارات تسمح الآن بملكية أجنبية 100% للشركات في البر الرئيسي في معظم القطاعات، مما يجعل هذا الخيار أكثر جاذبية من أي وقت مضى. ومع ذلك، لا تزال بعض القطاعات الاستراتيجية تتطلب شراكة محلية.',
    
    'blog.freeZoneVsMainland.choose.title': 'أي خيار يجب أن تختار؟',
    'blog.freeZoneVsMainland.chooseFreeZone.title': 'اختر المنطقة الحرة إذا:',
    'blog.freeZoneVsMainland.chooseFreeZone.points': 'عملك موجه بشكل رئيسي للتصدير|تريد تقليل تعقيد وزمن التأسيس|تحسين الضرائب هو أولوية|أنت في مجال التكنولوجيا أو الإعلام أو الصناعات المتخصصة|لا تحتاج للوصول إلى السوق المحلي الإماراتي فوراً',
    
    'blog.freeZoneVsMainland.chooseMainland.title': 'اختر البر الرئيسي إذا:',
    'blog.freeZoneVsMainland.chooseMainland.points': 'تريد خدمة السوق المحلي الإماراتي|تخطط للعمل مع الجهات الحكومية|تحتاج إلى مرونة في موقع المكتب|عملك يتطلب شراكات محلية واسعة|أنت في مجال التجزئة أو الضيافة أو الخدمات',
    
    'blog.freeZoneVsMainland.freeZones.title': 'مناطق حرة شهيرة للنظر فيها',
    'blog.freeZoneVsMainland.freeZones.dmcc': 'مركز دبي للسلع المتعددة',
    'blog.freeZoneVsMainland.freeZones.dmccDesc': 'المنطقة الحرة الرائدة في دبي للسلع والتجارة',
    'blog.freeZoneVsMainland.freeZones.difc': 'مركز دبي المالي العالمي',
    'blog.freeZoneVsMainland.freeZones.difcDesc': 'مركز للخدمات المالية والتكنولوجيا المالية',
    'blog.freeZoneVsMainland.freeZones.rakez': 'راكز',
    'blog.freeZoneVsMainland.freeZones.rakezDesc': 'خيار فعال من حيث التكلفة مع باقات مرنة',
    
    'blog.freeZoneVsMainland.needHelp.title': 'تحتاج إلى توجيه متخصص؟',
    'blog.freeZoneVsMainland.needHelp.description': 'الاختيار بين تأسيس المنطقة الحرة والبر الرئيسي قرار حاسم يعتمد على نموذج عملك المحدد والسوق المستهدف وأهدافك طويلة المدى. يمكن لخبرائنا مساعدتك في تحليل متطلباتك واتخاذ الخيار الصحيح.',
    'blog.freeZoneVsMainland.needHelp.cta': 'احصل على استشارة مجانية',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage) {
        setLanguageState(savedLanguage);
        setIsRTL(savedLanguage === 'ar');
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setIsRTL(lang === 'ar');
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string): string => {
    const translation = translations[language][key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;