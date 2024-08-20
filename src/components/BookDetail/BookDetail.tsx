import { SyntheticEvent, useState } from "react";
import { BookInfo, Book, BookModal } from "../../datamodel";
import { getBookByID } from "../../services/book";
import "./BookDetail.scss";
import ModalBox from "../ModalBox/ModalBox";
import { formatDate } from "../../utils";

//Component to show the Book details
const BookDetail = ({
  book,
  markBookAsFavourite,
  isFavourite,
  removeBook,
}: BookInfo) => {
  const bookObj: BookModal = {
    id: 0,
    title: "",
    author: "",
    description: "",
    cover: "",
    publicationDate: "",
    closeModal: () => {},
  };
  const [showBookDetail, setShowBookDetail] = useState(false);
  const [bookDetail, setBookDetail] = useState<BookModal>(bookObj);
  const [cachedBookData, setCachedBookData] = useState<Map<number, BookModal>>(
    new Map()
  );
  const getSelectedBookDetail = async (id: number) => {
    setShowBookDetail(true);
    // Check if the book details are already cached
    if (cachedBookData.has(id)) {
      const cachedBook = cachedBookData.get(id);
      if (cachedBook) {
        setBookDetail(cachedBook);
        return;
      }
    }

    // if not cached then trigger the api request
    const bookDetailResponse = await getBookByID(id);
    if (bookDetailResponse) {
      setBookDetail(bookDetailResponse);
      // Cache the fetched book detail
      setCachedBookData((prevCache) =>
        new Map(prevCache).set(id, bookDetailResponse)
      );
    } else {
      setShowBookDetail(false);
      setBookDetail(bookObj);
    }
  };

  return (
    <>
      {showBookDetail && (
        <ModalBox
          id={bookDetail.id}
          title={bookDetail.title}
          author={bookDetail.author}
          cover={bookDetail.cover}
          description={bookDetail.description}
          publicationDate={formatDate(bookDetail.publicationDate)}
          closeModal={() => setShowBookDetail(false)}
        />
      )}
      <div className="card" onClick={() => getSelectedBookDetail(book.id)}>
        <img src={book.cover} alt={book.title} className="card-img" />
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <button
          className="btn-favourites"
          onClick={(e) =>
            markBookAsFavourite(e, book.id)
          }
        >
          {isFavourite ? "♥" : "♡"}
        </button>
        <button
          className="btn-remove"
          onClick={(e) => removeBook(e, book.id)}
        >
          X
        </button>
      </div>
    </>
  );
};

export default BookDetail;
