import { Link } from 'react-router-dom';
import Shelf from './Shelf';

function Shelves({ books, changeShelf }) {
  const currentlyReading = books?.filter(
    (book) => book?.shelf === 'currentlyReading'
  );
  const wantToRead = books?.filter((book) => book?.shelf === 'wantToRead');
  const read = books?.filter((book) => book?.shelf === 'read');
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            bookCategory={currentlyReading}
            category="Currently Reading"
            changeShelf={changeShelf}
          />
          <Shelf
            bookCategory={wantToRead}
            category="Want to Read"
            changeShelf={changeShelf}
          />
          <Shelf
            bookCategory={read}
            category="Read"
            changeShelf={changeShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default Shelves;
