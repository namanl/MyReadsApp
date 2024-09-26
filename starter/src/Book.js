import cover from './icons/cover.jpg';

function Book({ book, changeShelf }) {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks ? book.imageLinks.thumbnail : cover
              })`,
            }}
          ></div>
          <div className="book-shelf-changer">
            {/* {console.log(book)} */}
            <select
              onChange={(e) => changeShelf(book, e.target.value)}
              value={book.shelf ? book.shelf : 'none'}
            >
              <option disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book?.title}</div>
        <div className="book-authors">{book?.authors?.join(', ')}</div>
      </div>
    </li>
  );
}

export default Book;
