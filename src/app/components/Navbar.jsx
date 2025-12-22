// src/components/Navbar.jsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="p-4 bg-white shadow-md flex gap-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`font-medium ${
            pathname === item.href
              ? 'text-blue-700 border-b-2 border-blue-700'
              : 'text-gray-600 hover:text-blue-500'
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}