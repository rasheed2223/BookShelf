import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { SearchBar } from './components/SearchBar';
import { BookGrid } from './components/BookGrid';
import { BookForm } from './components/BookForm';
import type { Book, SearchFilters } from './types';

// Mock data for demonstration
const initialBooks: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'fiction',
    pages: 180,
    publishedDate: '1925-04-10',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3',
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'fiction',
    pages: 281,
    publishedDate: '1960-07-11',
    coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3',
  },
];

function App() {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleSearch = (filters: SearchFilters) => {
    // Implement search logic here
    console.log('Searching with filters:', filters);
  };

  const handleAddBook = (bookData: Partial<Book>) => {
    const newBook = {
      ...bookData,
      id: Date.now().toString(),
    } as Book;
    setBooks([...books, newBook]);
    setShowAddForm(false);
  };

  const handleEditBook = (book: Book) => {
    setSelectedBook(book);
  };

  const handleUpdateBook = (bookData: Partial<Book>) => {
    if (!selectedBook) return;
    const updatedBooks = books.map((book) =>
      book.id === selectedBook.id ? { ...book, ...bookData } : book
    );
    setBooks(updatedBooks);
    setSelectedBook(null);
  };

  const handleDeleteBook = (book: Book) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      setBooks(books.filter((b) => b.id !== book.id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {!showAddForm && !selectedBook && (
          <div className="mb-6">
            <button
              onClick={() => setShowAddForm(true)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Add New Book
            </button>
          </div>
        )}

        {showAddForm && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Add New Book</h2>
            <BookForm onSubmit={handleAddBook} />
          </div>
        )}

        {selectedBook && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Edit Book</h2>
            <BookForm book={selectedBook} onSubmit={handleUpdateBook} />
          </div>
        )}

        {!showAddForm && !selectedBook && (
          <BookGrid
            books={books}
            onView={(book) => console.log('Viewing book:', book)}
            onEdit={handleEditBook}
            onDelete={handleDeleteBook}
          />
        )}
      </main>
    </div>
  );
}

export default App;