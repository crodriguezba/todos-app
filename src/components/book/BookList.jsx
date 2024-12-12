import { useState } from "react";

import BookForm from "./BookForm"
import BookItem from "./BookItem"

const BookList = () => {
    //logica
    const [books, setBooks] = useState([{
        id: 1,
        title: 'Libro-titulo',
        author: 'Carlos',
        year: '1970',
        isLoaned: false
    }]);
    

    const addBook = (bookData) => {
        const newBook = {
            id: Date.now(),
            ...bookData,
            isLoaned: false,
        };
        setBooks ([...books, newBook]);
    }

    const deleteBook = (bookId) => {
        setBooks(books.filter(book => book.id !== bookId))
    };

    const toggleLoaned = (bookId) => {
        setBooks(books.map(book => 
            book.id === bookId ? { ...book, isLoaned: !book.isLoaned } : book
        ));
    };

    const availableBooks = books.filter(book => !book.isLoaned).length;
    
    //render (jsx)
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 p-4 border rounded mb-2 bg-white">
            <h2>Book List</h2> 
            <div>
                <p>Total de libros: {books.length} | Disponibles: {availableBooks}</p>
                <BookForm onAddBook={addBook} />
                <ul>
                    {books.map((book) => (
                        <BookItem 
                            key={book.id} 
                            book={book} 
                            onDeleteBook={deleteBook} 
                            onToggleLoaned={toggleLoaned} 
                        />
                    ))}
                </ul> 
            </div>
        </div>
    );
}

export default BookList;