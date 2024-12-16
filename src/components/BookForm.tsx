import React from 'react';
import type { Book } from '../types';

interface BookFormProps {
  book?: Book;
  onSubmit: (book: Partial<Book>) => void;
}

export function BookForm({ book, onSubmit }: BookFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const bookData = {
      title: formData.get('title') as string,
      author: formData.get('author') as string,
      genre: formData.get('genre') as string,
      pages: Number(formData.get('pages')),
      publishedDate: formData.get('publishedDate') as string,
      coverUrl: formData.get('coverUrl') as string,
    };
    onSubmit(bookData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={book?.title}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700">
          Author
        </label>
        <input
          type="text"
          name="author"
          id="author"
          defaultValue={book?.author}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
          Genre
        </label>
        <select
          name="genre"
          id="genre"
          defaultValue={book?.genre}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="science">Science</option>
          <option value="fantasy">Fantasy</option>
        </select>
      </div>

      <div>
        <label htmlFor="pages" className="block text-sm font-medium text-gray-700">
          Pages
        </label>
        <input
          type="number"
          name="pages"
          id="pages"
          defaultValue={book?.pages}
          required
          min="1"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="publishedDate" className="block text-sm font-medium text-gray-700">
          Published Date
        </label>
        <input
          type="date"
          name="publishedDate"
          id="publishedDate"
          defaultValue={book?.publishedDate}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="coverUrl" className="block text-sm font-medium text-gray-700">
          Cover URL
        </label>
        <input
          type="url"
          name="coverUrl"
          id="coverUrl"
          defaultValue={book?.coverUrl}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {book ? 'Update Book' : 'Add Book'}
        </button>
      </div>
    </form>
  );
}