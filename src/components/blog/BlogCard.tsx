import { FC } from 'react';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { BlogPost } from '@/data/blogPosts';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export const BlogCard: FC<BlogCardProps> = ({ post, className }) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md',
        className
      )}
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <span className="text-sm font-medium text-blue-600 mb-2">
        {post.category}
      </span>
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground group-hover:text-primary">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-gray-600">
        {post.excerpt}
      </p>
      <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
        <Calendar className="h-4 w-4" />
        <span>{new Date(post.date).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        })}</span>
      </div>
    </Link>
  );
}; 