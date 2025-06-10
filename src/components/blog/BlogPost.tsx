import { FC } from 'react';
import { BlogPost as BlogPostType } from '@/data/blogPosts';
import { Calendar, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlogPostProps {
  post: BlogPostType;
  className?: string;
}

export const BlogPost: FC<BlogPostProps> = ({ post, className }) => {
  const shareUrl = typeof window !== 'undefined' 
    ? window.location.href 
    : '';

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`
  };

  return (
    <article className={cn('max-w-3xl mx-auto', className)}>
      <div className="space-y-4">
        <span className="text-sm font-medium text-blue-600 mb-2">
          {post.category}
        </span>
        <h1 className="text-4xl font-bold tracking-tight">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-sm text-gray-500">
            <Share2 className="h-4 w-4" />
            Share
          </span>
          <div className="flex gap-2">
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-muted p-2 hover:bg-muted/80 transition-colors"
              aria-label="Share on Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-muted p-2 hover:bg-muted/80 transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-muted p-2 hover:bg-muted/80 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 prose prose-slate max-w-none">
        {post.content.split('\n').map((paragraph: string, index: number) => (
          <p key={index}>{paragraph.trim()}</p>
        ))}
      </div>
    </article>
  );
}; 