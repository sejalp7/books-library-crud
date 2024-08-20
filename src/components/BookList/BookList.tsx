import { Link } from "react-router-dom";
import { BookList } from "../../datamodel";
import "./BookList.scss";
import ShimmerUI from "../ShimmerUI/ShimmerUI";
import BookDetail from "../BookDetail/BookDetail";
import Pagination from "../Pagination/Pagination";

// Component to show the list of books
const BooksList = ({
  books,
  markBookAsFavourite,
  favouriteBooks,
  removeBook,
  currentPage,
  totalPages,
  onPageChange,
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
            isFavourite={favouriteBooks.includes(book.id)}
            book={book}
            markBookAsFavourite={(e) => markBookAsFavourite(e, book.id)}
            removeBook={(e) => removeBook(e, book.id)}
          />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(number) => onPageChange(number)}/>
    </>
  );
};

export default BooksList;
