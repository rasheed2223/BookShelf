import React, { useState } from 'react';
import { Search } from 'lucide-react';
import type { SearchFilters } from '../types';

interface SearchBarProps {
  onSearch: (filters: SearchFilters) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    genre: '',
    author: '',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(filters);
  };

  return (
    <form onSubmit={handleSearch} className="space-y-4 md:space-y-0 md:flex md:space-x-4 p-6 bg-white rounded-lg shadow-sm">
      <input
        type="text"
        placeholder="Search books..."
        className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        value={filters.query}
        onChange={(e) => setFilters({ ...filters, query: e.target.value })}
      />
      <select
        className="w-full md:w-48 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        value={filters.genre}
        onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
      >
        <option value="">All Genres</option>
        <option value="fiction">Fiction</option>
        <option value="non-fiction">Non-Fiction</option>
        <option value="science">Science</option>
        <option value="fantasy">Fantasy</option>
      </select>
      <button
        type="submit"
        className="w-full md:w-auto px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center"
      >
        <Search className="w-4 h-4 mr-2" />
        Search
      </button>
    </form>
  );
}