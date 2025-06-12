const express = require('express');
const path = require('path');
const app = express();
const postsRouter = require('./server/routes/posts');

app.use(express.json());
app.use('/posts', postsRouter);
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

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Blog API server running at http://localhost:${PORT}`); 
});