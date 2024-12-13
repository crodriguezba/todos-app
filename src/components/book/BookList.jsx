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
    ]);

    const addBook = (bookData) => {
        const newBook = {
            id: Date.now(),
            ...bookData,
            isLoaned: false
        };
        setBooks([...books, newBook]);
    };

    const toogleLoan = (bookId) => {
        setBooks(books.map(book => 
            book.id === bookId ? {...book, isLoaned: !book.isLoaned} : book
        ))
    };

    const deleteBook = (bookId) => {
        setBooks(books.filter(book => book.id !== bookId) )
    };

    const availableBooks = books.filter(book => !book.isLoaned).length;
    
    //render (jsx)
    return (
        <div>
            <div className='mb-6 p-4 bg-blue-50 rounded'>
                <p className='text-blue-800'>
                    Total de libros: {books.length} | Disponibles: {availableBooks}
                </p>
            </div>
            <BookForm onAddBook={addBook} />

            <div className='space-y-2'>
                {
                    books.map(book => (
                        <BookItem 
                            key={book.id}
                            book={book}
                            onDelete={deleteBook}
                            onLoan={toogleLoan}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default BookList;