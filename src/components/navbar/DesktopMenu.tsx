'use client'

import Link from 'next/link'

const DesktopMenu = () => {
  return (
    <div className="hidden md:flex space-x-8">
      <Link
        href="/"
        className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
      >
        Home
      </Link>
      <Link
        href="/services"
        className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
      >
        Services
      </Link>
      <Link
        href="/blog"
        className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
      >
        Blog
      </Link>
      <Link
        href="/contact"
        className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
      >
        Contact
      </Link>
    </div>
  )
}

export default DesktopMenu 