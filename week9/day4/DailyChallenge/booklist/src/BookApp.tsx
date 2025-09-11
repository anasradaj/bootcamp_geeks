import React, { useState } from 'react';
import List from './List';

interface Book {
  id: number;
  title: string;
  author: string;
}

const initialBooks: Book[] = [
  { id: 1, title: 'L\'Étranger', author: 'Albert Camus' },
  { id: 2, title: 'Dune', author: 'Frank Herbert' },
];

const BookApp: React.FC = () => {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  
  const [newTitle, setNewTitle] = useState<string>('');
  const [newAuthor, setNewAuthor] = useState<string>('');

  const addBook = () => {
    if (!newTitle || !newAuthor) {
      alert('Please enter both title and author.');
      return;
    }

    const newBook: Book = {
      id: Date.now(),
      title: newTitle, 
      author: newAuthor, 
    };
    
    setBooks(currentBooks => [...currentBooks, newBook]);

    setNewTitle('');
    setNewAuthor('');
  };

  return (
    <div>
      <h2>My Book List</h2>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Book Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Book Author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />
      </div>

      <button onClick={addBook}>Add Book</button>
      
      <List<Book>
        items={books}
        renderItem={(book) => (
          <>
            <strong>{book.title}</strong> by {book.author}
          </>
        )}
      />
    </div>
  );
};

export default BookApp;