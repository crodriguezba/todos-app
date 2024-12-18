import React from "react";

const BookItem = ({ book, onDelete, onLoan }) => {
    //logica ??

    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 p-4 border rounded mb-2 bg-white">
            <div className="flex-1">
                <h3 className="font-bold">{ book.title }</h3>
                <p className="text-gray-600">Author: { book.author }</p>
                <p className="text-gray-500 text-sm">Año: { book.year }</p>
            </div>
            <div className="flex gap-2">
                <button onClick={() => onLoan(book.id)} className={`px-3 py-1 rounded ${
                    book.isLoaned 
                    ? 'bg-yellow-100 text-yellow-700' 
                    : 'bg-green-100 text-green-700'
                }`}>
                    {book.isLoaned ? 'Devolver' : 'Prestar'}
                </button>
                <button
                    onClick={() => onDelete(book.id)}
                    className="px-3 py-1 bg-red-100 text-red-700 rounded"
                >
                    Eliminar
                </button>
            </div>
        </div>

        
    );

};

export default BookItem;