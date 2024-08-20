export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  cover: string;
  publicationDate: string;
}

export interface BookInfo {
  book: Book;
  isFavourite: boolean;
  markBookAsFavourite: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => void;
  removeBook: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => void;
}

export interface BookList {
  books: Book[];
  markBookAsFavourite: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => void;
  favouriteBooks: number[];
  removeBook: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (currPage: number) => void;
}

export interface Paginator {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNo: number) => void
}

export interface AddBook {
  onAddBooks: (book: Book) => void;
}

export interface BookModal {
    id: number;
    title: string;
    author: string;
    description: string;
    cover: string;
    publicationDate: string;
    closeModal: () => void;
}