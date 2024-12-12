import { useState } from "react";

const BookForm =({onAddBook}) => {
    const [bookData, setBookData] = useState({
        title: '',
        author: '',
        year: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (bookData.title.trim() && bookData.author.trim()) {
            onAddBook(bookData);
            setBookData({
                title: '',
                author: '',
                year: ''
            })
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setBookData(prevData => ({
            ...prevData,
            [name]: value,

        }))
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    name="title"
                    value={bookData.title}
                    onChange={handleChange}
                    placeholder="Titulo del libro"
                />
                <input
                    type="text"
                    name="author"
                    value={bookData.author}
                    onChange={handleChange}
                    placeholder="Author"
                />
                <input
                    type="number"
                    name="year"
                    value={bookData.year}
                    onChange={handleChange}
                    placeholder="Año edición"
                />
            </div>
            <button type="submit">Añadir Libro</button>
        </form>
    )
}

export default BookForm;