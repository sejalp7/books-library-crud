import { Book, BookModal } from "../datamodel";
import axios from 'axios';
const baseURL = "https://my-json-server.typicode.com";


//API call to get the list of books
export const getBooksList = async (): Promise<Book[]> => {
    const response = await fetch(`${baseURL}/cutamar/mock/books`);
    return await response.json();
};

//API call to get Book by ID passed as parameter
export const getBookByID = async (id: number): Promise<BookModal | null> => {
    try {
        const response = await axios.get(`${baseURL}/cutamar/mock/books/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data as BookModal;
    } catch(err) {
        console.log(err);
        return null;
    }
}
