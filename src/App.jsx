import './App.css'
import BookList from './components/book/BookList'

function App() {
  return (
    <div className='max-w-3xl mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-8 text-center'>Biblioteca municipal</h1>
      
        <BookList />
      
    </div>
  )
}

export default App
