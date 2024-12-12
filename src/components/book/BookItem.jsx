import React from "react";

const BookItem = ({ book, onDeleteBook, onToggleLoaned }) => {
    return (
        <li>
            <div onClick={() => onToggleLoaned(book.id)} style={{ cursor: 'pointer' }}>
                <span style={{ textDecoration: book.isLoaned ? 'line-through' : 'none' }}>
                    <p>Titulo: {book.title} by {book.author}, year: ({book.year}) {book.isLoaned ? "(Loaned)" : "(Available)"}</p>
                </span>
            </div>
            <button onClick={() => onDeleteBook(book.id)}>Delete</button>
        </li>
    );
};

export default BookItem;