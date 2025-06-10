import { FC, useState } from 'react';
import { BlogCard } from './BlogCard';
import { BlogPost, BlogCategory, categories, getPostsByCategory, blogPosts } from '@/data/blogPosts';
import { cn } from '@/lib/utils';

interface BlogListProps {
  className?: string;
}

export const BlogList: FC<BlogListProps> = ({ className }) => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | null>(null);

  const displayedPosts = selectedCategory 
    ? getPostsByCategory(selectedCategory)
    : blogPosts;

  return (
    <div className={cn('space-y-8', className)}>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setSelectedCategory(null)}
          className={cn(
            'rounded-full px-4 py-2 text-sm font-medium transition-colors',
            !selectedCategory
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted hover:bg-muted/80'
          )}
        >
          All Posts
        </button>
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                'flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors',
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80'
              )}
            >
              <Icon className="h-4 w-4" />
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedPosts.map((post: BlogPost) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {displayedPosts.length === 0 && (
        <div className="text-center text-muted-foreground">
          No posts found in this category.
        </div>
      )}
    </div>
  );
}; 