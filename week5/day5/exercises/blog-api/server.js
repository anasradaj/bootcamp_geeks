// server.js
const express = require('express');
const app = express();
app.use(express.json());

// Simulated database
let posts = [
  { id: 1, title: 'First Post', content: 'This is the first blog post.' },
  { id: 2, title: 'Second Post', content: 'This is the second blog post.' }
];
let nextId = 3;

// GET /posts - List all posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

// GET /posts/:id - Get a specific post
app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
});

// POST /posts - Create a new post
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).json({ error: 'Title and content are required' });
  const newPost = { id: nextId++, title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT /posts/:id - Update a post
app.put('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: 'Post not found' });
  const { title, content } = req.body;
  if (title) post.title = title;
  if (content) post.content = content;
  res.json(post);
});

// DELETE /posts/:id - Delete a post
app.delete('/posts/:id', (req, res) => {
  const index = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Post not found' });
  const deleted = posts.splice(index, 1);
  res.json(deleted[0]);
});

// Handle 404 for invalid routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Blog API server running on http://localhost:${PORT}`);
});
