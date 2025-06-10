import { FC } from 'react';
import Link from 'next/link';
import { Clock, Calendar } from 'lucide-react';
import { BlogPost } from '@/data/blogPosts';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export const BlogCard: FC<BlogCardProps> = ({ post, className }) => {
  const Icon = post.icon;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md',
        className
      )}
    >
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-primary/10 p-2">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <span className="text-sm font-medium text-muted-foreground">
          {post.category.split('-').map((word: string) => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ')}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground group-hover:text-primary">
        {post.title}
      </h3>

      <p className="mt-2 line-clamp-2 text-muted-foreground">
        {post.description}
      </p>

      <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>{post.readTime} min read</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>{new Date(post.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })}</span>
        </div>
      </div>
    </Link>
  );
}; 