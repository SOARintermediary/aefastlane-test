import { notFound } from 'next/navigation';
import { blogPosts } from '../../../data/blogPosts';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
      />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <span>{post.category}</span>
          <span>•</span>
          <time>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
        <div className="prose prose-lg max-w-none">
          {post.content}
        </div>
      </div>
    </article>
  );
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: post.title,
    description: post.excerpt
  };
} 