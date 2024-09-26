import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Shelves from './Shelves';
import Search from './Search';
import { getAll, update } from './BooksAPI';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  function changeShelf(book, newShelf) {
    update(book, newShelf);
    book.shelf = newShelf;
    setBooks((prevBooks) =>
      prevBooks.filter((b) => b.id !== book.id).concat([book])
    );
  }

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={<Shelves books={books} changeShelf={changeShelf} />}
        />
        <Route
          path="/search"
          element={<Search books={books} changeShelf={changeShelf} />}
        />
      </Routes>
    </div>
  );
}

export default App;
