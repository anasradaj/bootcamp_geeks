const express = require('express');
const app = express();
const path = require('path');
const booksRouter = require('./server/routes/books');

app.use(express.json());
app.use('/api/books', booksRouter);
app.use(express.static(path.join(__dirname, 'server', 'public')));

// 404 handler for invalid routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Book API server running at http://localhost:${PORT}`);
});
