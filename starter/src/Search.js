import { Link } from 'react-router-dom';
import { useState } from 'react';
import { search } from './BooksAPI';
import Book from './Book';

function Search({ books, changeShelf }) {
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState(false);

  function handleQuery(e) {
    const query = e.target.value;
    if (query) {
      search(query).then((res) => {
        if (!res || res.hasOwnProperty('error')) {
          setSearchResult([]);
          setError(true);
        } else {
          setSearchResult(res);
          syncBookShelf(books, res);
        }
      });
    } else {
      setSearchResult([]);
      setError(false);
    }
  }

  const syncBookShelf = (books, searchResult) => {
    if (books && searchResult) {
      books?.forEach((book) => {
        searchResult?.forEach((searchResultBook) => {
          if (book.id === searchResultBook.id) {
            searchResultBook.shelf = book.shelf;
          }
        });
      });
      setSearchResult([...searchResult]);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => handleQuery(e)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResult?.map((book) => (
            <Book key={book.id} book={book} changeShelf={changeShelf} />
          ))}
        </ol>
      </div>

      {error && <div style={{ textAlign: 'center' }}>No results found</div>}
    </div>
  );
}

export default Search;
