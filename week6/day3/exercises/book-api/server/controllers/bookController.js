const Book = require('../models/book');

exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.getAll();
    res.json(books);
  } catch (err) {
    next(err);
  }
};

exports.getBookById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.bookId);
    const book = await Book.getById(id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    next(err);
  }
};

exports.createBook = async (req, res, next) => {
  try {
    const { title, author, publishedYear } = req.body;
    if (!title || !author || !publishedYear) {
      return res.status(400).json({ error: 'Title, author, and publishedYear are required' });
    }
    const book = await Book.create({ title, author, published_year: publishedYear });
    res.status(201).json(book);
  } catch (err) {
    next(err);
  }
};

exports.updateBook = async (req, res, next) => {
  try {
    const id = parseInt(req.params.bookId);
    const { title, author, publishedYear } = req.body;
    const book = await Book.update(id, { title, author, published_year: publishedYear });
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    next(err);
  }
};

exports.deleteBook = async (req, res, next) => {
  try {
    const id = parseInt(req.params.bookId);
    const book = await Book.delete(id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    next(err);
  }
};
