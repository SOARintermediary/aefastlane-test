import { Building2, Shield, Briefcase, Globe, Settings, Users } from 'lucide-react';

export type BlogCategory = 'getting-started' | 'setup-guides' | 'visa-immigration' | 'operations';

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  category: BlogCategory;
  icon: any; // Lucide icon type
  readTime: number;
  date: string;
  author: string;
  tags: string[];
  slug: string;
}

export const categories: { id: BlogCategory; label: string; icon: any }[] = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    icon: Globe
  },
  {
    id: 'setup-guides',
    label: 'Setup Guides',
    icon: Building2
  },
  {
    id: 'visa-immigration',
    label: 'Visa & Immigration',
    icon: Users
  },
  {
    id: 'operations',
    label: 'Operations & Compliance',
    icon: Settings
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Free Zone vs Mainland: Which is Right for Your UAE Business?',
    description: 'Discover the key differences between free zone and mainland business setup in the UAE, and learn which option best suits your business goals and requirements.',
    content: `
      Understanding the basics of UAE business setup is crucial for entrepreneurs looking to establish their presence in the region. The UAE offers two main business setup options: Free Zones and Mainland.

      Free Zone Benefits:
      • 100% foreign ownership
      • No corporate taxes (in most zones)
      • No personal income tax
      • Full profit repatriation
      • Simplified setup process
      • No currency restrictions

      Mainland Benefits:
      • Access to UAE local market
      • Ability to deal with government entities
      • Wide range of business activities
      • Can open offices anywhere in UAE
      • Direct import/export capabilities
      • No location restrictions

      Making the right choice depends on your specific business model, target market, and long-term goals. Our experts can help you analyze your requirements and make the right choice.
    `,
    category: 'getting-started',
    icon: Building2,
    readTime: 8,
    date: '2024-03-20',
    author: 'AE Fastlane Team',
    tags: ['free zone', 'mainland', 'business setup', 'UAE'],
    slug: 'free-zone-vs-mainland'
  },
  {
    id: '2',
    title: 'Golden Visa Eligibility & Application Process',
    description: 'The UAE\'s Golden Visa offers long-term residency to investors, entrepreneurs, and professionals. Find out if you qualify and how to apply.',
    content: `
      The UAE Golden Visa program offers long-term residency options for qualified individuals, providing stability and opportunities for business growth.

      Key Benefits:
      • Long-term residency (5-10 years)
      • 100% business ownership
      • Family sponsorship
      • No sponsor required
      • Multiple entry/exit
      • Automatic renewal

      Eligibility Categories:
      • Investors
      • Entrepreneurs
      • Specialized talents
      • Outstanding students
      • Humanitarian pioneers
      • Frontline heroes

      Our team can guide you through the entire Golden Visa application process, ensuring you meet all requirements and submit a successful application.
    `,
    category: 'visa-immigration',
    icon: Shield,
    readTime: 10,
    date: '2024-03-19',
    author: 'AE Fastlane Team',
    tags: ['golden visa', 'residency', 'UAE visa', 'immigration'],
    slug: 'golden-visa-guide'
  },
  {
    id: '3',
    title: 'Starting a Business in the UAE as a Foreigner',
    description: 'Everything foreign entrepreneurs need to know about starting a business in the UAE, from legal requirements to practical considerations.',
    content: `
      Starting a business in the UAE offers incredible opportunities for foreign entrepreneurs. This guide covers everything you need to know to get started.

      Key Requirements:
      • Choose your business activity
      • Select your company structure
      • Obtain necessary approvals
      • Complete documentation
      • Secure your location
      • Open a bank account

      Business Activities:
      • General Trading
      • Professional Services
      • Industrial
      • Commercial
      • Tourism
      • Technology

      Let our experts guide you through the entire process, ensuring compliance and a smooth setup experience.
    `,
    category: 'getting-started',
    icon: Briefcase,
    readTime: 12,
    date: '2024-03-18',
    author: 'AE Fastlane Team',
    tags: ['business setup', 'entrepreneurship', 'UAE business', 'foreign investment'],
    slug: 'business-setup'
  }
];

export const getRelatedPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] => {
  // First, try to find posts in the same category
  const sameCategoryPosts = blogPosts.filter(
    post => post.category === currentPost.category && post.id !== currentPost.id
  );

  // Then, find posts with matching tags
  const relatedByTags = blogPosts.filter(
    post => 
      post.id !== currentPost.id &&
      post.category !== currentPost.category &&
      post.tags.some(tag => currentPost.tags.includes(tag))
  );

  // Combine and limit the results
  return [...sameCategoryPosts, ...relatedByTags].slice(0, limit);
};

export const getPostsByCategory = (category: BlogCategory): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getAllCategories = () => categories;

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
}; 