import Book from './Book';

function Shelf({ bookCategory, category, changeShelf }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{category}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookCategory?.map((book) => (
            <Book key={book?.id} book={book} changeShelf={changeShelf} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Shelf;
