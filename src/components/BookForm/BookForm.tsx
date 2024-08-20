import { useForm } from 'react-hook-form';
import { Book } from '../../datamodel';
import { useNavigate } from 'react-router-dom';
import './BookForm.scss'

interface AddBook {
  onAddBook: (book: Book) => void;
}

const BookForm = ({ onAddBook } : AddBook) => {
  const { register, handleSubmit } = useForm<Book>();
  const navigate = useNavigate();

  const onSubmit = (data: Book) => {
    const newBook = { ...data, id: Date.now() };
    onAddBook(newBook);
    navigate('/');
  };
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <h3>Add New Book</h3> */}
      <input {...register('title')} placeholder="Title" required />
      <input {...register('author')} placeholder="Author" required />
      <textarea {...register('description')} placeholder="Description" required />
      <input {...register('cover')} placeholder="Cover URL" required />
      <input {...register('publicationDate')} type="date" required />
      <button type="submit" className='btn-addbook'>Add Book</button>
    </form>
    </>
  );
};

export default BookForm;
