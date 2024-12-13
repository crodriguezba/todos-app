import { useState } from 'react'

import BookForm from './BookForm'
import BookItem from './BookItem'

const BookList = () => {
    //logica
    const [books, setBooks] = useState([
        {
            id: 1,
            title: 'El Quijote',
            author: 'Cervantes',
            year: '1590',
            isLoaned: false
        }
    ])

    const addBook = (bookData) => {
        const newBook = {
            id: Date.now(),
            ...bookData,
            isLoaned: false
        };
        setBooks([...books, newBook]);
    }

    const deleteBook = (bookId) => {
        setBooks(books.filter(book => book.id !== bookId) )
    };

    const availableBooks = books.filter(book => !book.isLoaned).length;
    
    //render (jsx)
    return (
        <div>
            <div>
                <p>
                    Total de libros: {books.length} | Disponibles: {availableBooks}
                </p>
            </div>
            <BookForm onAddBook={addBook} />

            <div>
                {
                    books.map(book => (
                        <BookItem 
                            key={book.id}
                            book={book}
                            onDelete={deleteBook}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default BookList;