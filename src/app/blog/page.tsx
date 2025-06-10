import { BlogList } from '@/components/blog/BlogList';

export const metadata = {
  title: 'Blog - AE Fastlane',
  description: 'Stay updated with the latest insights, guides, and news about business setup and operations in the UAE.',
};

export default function BlogPage() {
  return (
    <div className="container py-12">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Our Blog
        </h1>
        <p className="text-xl text-muted-foreground">
          Stay updated with the latest insights, guides, and news about business setup and operations in the UAE.
        </p>
      </div>

      <div className="mt-12">
        <BlogList />
      </div>
    </div>
  );
} 