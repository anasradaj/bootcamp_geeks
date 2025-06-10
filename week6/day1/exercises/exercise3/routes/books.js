const express = require('express');
const router = express.Router();

// Sample in-memory database for storing books
let books = [];
let nextId = 1;

// Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// Add a new book
router.post('/', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required.' });
  }
  const newBook = { id: nextId++, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const book = books.find(b => b.id === parseInt(id));
  if (!book) {
    return res.status(404).json({ error: 'Book not found.' });
  }
  if (title) book.title = title;
  if (author) book.author = author;
  res.json(book);
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = books.findIndex(b => b.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: 'Book not found.' });
  }
  const deleted = books.splice(index, 1);
  res.json(deleted[0]);
});

module.exports = router;
