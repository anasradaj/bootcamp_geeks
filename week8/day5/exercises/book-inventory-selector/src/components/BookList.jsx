import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredBooks, selectSelectedGenre, setGenreFilter,
         selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks } from '../features/books/booksSlice';

function BookList() {
  const booksToDisplay = useSelector(selectFilteredBooks);
  const currentGenreFilter = useSelector(selectSelectedGenre);
  const dispatch = useDispatch();

  const handleGenreChange = (genre) => {
    dispatch(setGenreFilter(genre));
  };

  const filterButtonStyle = (genre) => ({
    padding: '8px 15px',
    margin: '0 5px',
    border: '1px solid #007bff',
    borderRadius: '4px',
    backgroundColor: currentGenreFilter === genre ? '#007bff' : 'white',
    color: currentGenreFilter === genre ? 'white' : '#007bff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  });

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '30px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>Books List</h1>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <button style={filterButtonStyle('All')} onClick={() => handleGenreChange('All')}>
          All Genre
        </button>
        <button style={filterButtonStyle('Fantasy')} onClick={() => handleGenreChange('Fantasy')}>
          Fantasy
        </button>
        <button style={filterButtonStyle('Science Fiction')} onClick={() => handleGenreChange('Science Fiction')}>
          Science Fiction
        </button>
        <button style={filterButtonStyle('Horror')} onClick={() => handleGenreChange('Horror')}>
          Horror
        </button>
      </div>

      {booksToDisplay.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>No books found for this genre.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {booksToDisplay.map(book => (
            <li key={book.id} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 0',
              borderBottom: '1px solid #eee'
            }}>
              <div>
                <strong>{book.title}</strong> by {book.author}
                <br />
                <small style={{ color: '#888' }}>Genre: {book.genre}</small>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;