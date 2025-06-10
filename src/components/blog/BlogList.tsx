'use client'

import { useState } from 'react'
import Link from 'next/link'
import { blogPosts, categories } from '../../data/blogPosts'

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div>
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-105">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">
                  {post.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                  {post.title}
                </h3>
                <p className="mt-2 text-gray-600 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center">
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BlogList 