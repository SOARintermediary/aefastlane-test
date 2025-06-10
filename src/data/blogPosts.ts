import { Building2, Shield, Briefcase, Globe, Settings, Users } from 'lucide-react';

export type BlogCategory = 'getting-started' | 'setup-guides' | 'visa-immigration' | 'operations';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  tags?: string[];
}

export const categories = [
  'Business Setup',
  'Company Formation',
  'Legal Updates',
  'Market Insights',
  'UAE Economy'
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'guide-to-business-setup-in-uae',
    title: 'Complete Guide to Business Setup in UAE',
    excerpt: 'Everything you need to know about setting up your business in the UAE, from licensing to location selection.',
    content: 'Full article content here...',
    date: '2024-03-10',
    category: 'Business Setup',
    image: '/images/blog/business-setup.jpg',
    tags: ['business setup', 'uae', 'guide']
  },
  {
    id: '2',
    slug: 'free-zone-vs-mainland',
    title: 'Free Zone vs Mainland: Making the Right Choice',
    excerpt: 'Compare the benefits and considerations of setting up in UAE Free Zones versus Mainland.',
    content: 'Full article content here...',
    date: '2024-03-08',
    category: 'Company Formation',
    image: '/images/blog/free-zone.jpg',
    tags: ['free zone', 'mainland', 'comparison']
  },
  {
    id: '3',
    slug: 'uae-corporate-tax-2024',
    title: 'UAE Corporate Tax 2024: What You Need to Know',
    excerpt: 'Understanding the new corporate tax framework and its implications for businesses.',
    content: 'Full article content here...',
    date: '2024-03-05',
    category: 'Legal Updates',
    image: '/images/blog/corporate-tax.jpg',
    tags: ['tax', 'corporate', 'legal']
  }
];

export const getRelatedPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       (post.tags && currentPost.tags && 
        post.tags.some(tag => currentPost.tags?.includes(tag))))
    )
    .slice(0, limit);
};

export const getPostsByCategory = (category: BlogCategory): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getAllCategories = () => categories;

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
}; 