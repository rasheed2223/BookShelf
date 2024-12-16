export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  pages: number;
  publishedDate: string;
  coverUrl?: string;
}

export interface SearchFilters {
  genre?: string;
  author?: string;
  query: string;
}