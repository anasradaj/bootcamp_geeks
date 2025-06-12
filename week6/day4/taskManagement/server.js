const express = require('express');
const tasksRouter = require('./routes/tasks');
const path = require('path');

const app = express();
app.use(express.json());
app.use('/tasks', tasksRouter);

// 404 handler
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
  console.log(`Task Management API running at http://localhost:${PORT}`);
});
