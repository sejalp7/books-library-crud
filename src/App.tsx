import { useEffect, useState } from "react";
import "./App.scss";
import BooksList from "./components/BookList/BookList";
import { Book } from "./datamodel";
import { getFavorites, paginatedList, setFavorites } from "./utils";
import { getBooksList } from "./services/book";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BookForm from "./components/BookForm/BookForm";

function App() {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [favoriteBook, setFavoriteBook] = useState<number[]>(getFavorites());
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;

  const loadBooks = async () => {
    const books = await getBooksList();
    setBookList(books);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const markBookAsFavourite = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    event.stopPropagation();
    const updatedFavorites = favoriteBook.includes(id)
      ? favoriteBook.filter((favId) => favId !== id)
      : [...favoriteBook, id];
    setFavorites(updatedFavorites);
    setFavoriteBook(updatedFavorites);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const removeBook = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
    event.stopPropagation();
    const updatedBookList = bookList.filter((book) => id !== book.id);
    setBookList(updatedBookList);
  };

  const handleAddBook = (newBook: Book) => {
    setBookList((prevList) => [...prevList, newBook]);
  };

 console.log(bookList);
  return (
    <div className="App">
      <h1>Book Library</h1>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <BooksList
                books={paginatedList(bookList, currentPage, booksPerPage)}
                markBookAsFavourite={markBookAsFavourite}
                favouriteBooks={favoriteBook}
                removeBook={removeBook}
                currentPage={currentPage}
                totalPages={bookList.length}
                onPageChange={handlePageChange}
                booksPerPage={booksPerPage}
              />
            }
          />
          <Route
            path="/add-book"
            element={<BookForm onAddBook={handleAddBook} />}
          />
          {/* Redirect any unknown paths to the Home page or any other route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
