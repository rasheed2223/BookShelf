import React from 'react';
import { BookOpen } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">BookShelf</span>
          </div>
          <div className="flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/add">Add Book</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
    >
      {children}
    </a>
  );
}