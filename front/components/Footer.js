import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-600 sm:text-center dark:text-gray-400">© 2023 <Link href="#" className="hover:underline">My First SaaS™</Link>. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-600 dark:text-gray-400 sm:mt-0">
        <li>
          <Link href="#" className="hover:underline me-4 md:me-6">About</Link>
        </li>
        <li>
          <Link href="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/faqSection" className="hover:underline me-4 md:me-6">FAQ</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer