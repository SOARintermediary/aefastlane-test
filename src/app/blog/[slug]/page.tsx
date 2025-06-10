import { notFound } from 'next/navigation';
import { BlogPost } from '@/components/blog/BlogPost';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { getPostBySlug } from '@/data/blogPosts';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-12">
      <BlogPost post={post} />
      <div className="mt-16">
        <RelatedPosts currentPost={post} />
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found - AE Fastlane',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} - AE Fastlane Blog`,
    description: post.description,
  };
} 