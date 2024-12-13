import { useState } from 'react';

const BookForm = ({ onAddBook }) => {

    const [bookData, setBookData ] = useState({
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

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData(prevData => ({
            ...prevData,
            [name]: value 
        }))

    };

    return (
        <form onSubmit={handleSubmit} className='mb-6'>
            <div className='grid gap-4'>
                <div>
                    <input 
                        type="text"
                        name='title'
                        value={bookData.title}
                        onChange={handleChange}
                        placeholder='Titulo del libro'
                        className='w-full px-3 py-2 border rounded'
                    />
                </div>
                <div>
                    <input 
                        type="text"
                        name='author'
                        value={bookData.author}
                        onChange={handleChange}
                        placeholder='Autor' 
                        className='w-full px-3 py-2 border rounded'
                    />
                </div>
                <div>
                    <input 
                        type="number"
                        name='year'
                        value={bookData.year}
                        onChange={handleChange}
                        placeholder='Año publicacion' 
                        className='w-full px-3 py-2 border rounded'
                    />
                </div>
                <button
                    type='submit' className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
                    Añadir libro       
                </button>
            </div>
        </form>
    );
};

export default BookForm;