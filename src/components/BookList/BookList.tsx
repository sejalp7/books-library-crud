import { Link } from "react-router-dom";
import { BookList, Album } from "../../datamodel";
import "./BookList.scss";
import ShimmerUI from "../ShimmerUI/ShimmerUI";
import BookDetail from "../BookDetail/BookDetail";
import Pagination from "../Pagination/Pagination";
// import { getValue } from "@testing-library/user-event/dist/utils";

// Component to show the list of books
const BooksList = ({
  books,
  markBookAsFavourite,
  favouriteBooks,
  removeBook,
  currentPage,
  totalPages,
  onPageChange,
  booksPerPage
}: BookList) => {
  if (books?.length === 0) {
    return <ShimmerUI />;
  }
  return (
    <>
      <Link to="/add-book">
        <button className="btn-addbook">Add a New Book</button>
      </Link>
      <div className="book-list flexbox" data-testid="book-list">
        {books?.map((book) => (
          <BookDetail
            key={book.id}
            isFavourite={favouriteBooks.includes(book.id)}
            book={book}
            markBookAsFavourite={(e) => markBookAsFavourite(e, book.id)}
            removeBook={(e) => removeBook(e, book.id)}
          />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={Math.ceil(totalPages/booksPerPage)} onPageChange={(number) => onPageChange(number)}/>
    </>
  );
};

export default BooksList;
