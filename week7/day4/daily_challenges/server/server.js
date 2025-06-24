// import express from 'express';
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log('Received from client:', req.body);
  res.json({ message: `I received your POST request. This is what you sent me: ${req.body.data}` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
