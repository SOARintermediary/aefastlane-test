import BlogList from '../../components/blog/BlogList'

export const metadata = {
  title: 'Blog - AE Fastlane',
  description: 'Stay updated with the latest insights, guides, and news about business setup and operations in the UAE.',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <BlogList />
    </div>
  )
} 