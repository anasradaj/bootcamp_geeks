// app.js
const express = require('express');
const { fetchPosts } = require('./data/dataService');
const app = express();

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log('Fetched posts from JSONPlaceholder and sent as response.');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`CRUD API server running on http://localhost:${PORT}`);
});
