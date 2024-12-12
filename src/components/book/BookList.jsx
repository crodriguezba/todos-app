import { useState } from "react";

const BooList = () => {
    //logica
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState('')
    const addBook = () => {
        const newBook = {
            id: Date.now(),
            name: newBook,
        }
        setBooks ([...books, addBook]);
        setNewBook ('')
    }

    const deleteBook = (bookId) => {
        setBooks(books.filter(book => book.id !== bookId))
    }

    const availableBooks = books.filter(book => !book.isLoaned).length;
    
    //render (jsx)
    return (
        <div className="wrapper">
            <h2>Book List</h2> 
            <div>
                <input
                    type="text"
                    value={newBook}
                    onChange={(e) => setNewBook(e.target.value)}
                    placeholder="Add a new book"
                />
                <button onClick={addBook}>Add</button>  
            </div>
        </div>
    );
}