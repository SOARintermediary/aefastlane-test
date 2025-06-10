import { FC } from 'react';
import { BlogPost, getRelatedPosts } from '@/data/blogPosts';
import { BlogCard } from './BlogCard';
import { cn } from '@/lib/utils';

interface RelatedPostsProps {
  currentPost: BlogPost;
  className?: string;
}

export const RelatedPosts: FC<RelatedPostsProps> = ({ currentPost, className }) => {
  const relatedPosts = getRelatedPosts(currentPost);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className={cn('space-y-6', className)}>
      <h2 className="text-2xl font-bold tracking-tight">Related Posts</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map((post: BlogPost) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}; 