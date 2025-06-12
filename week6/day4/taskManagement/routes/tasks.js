const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const tasksFile = path.join(__dirname, '../tasks.json');

function readTasks() {
  try {
    const data = fs.readFileSync(tasksFile, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function writeTasks(tasks) {
  fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
}

// GET /tasks
router.get('/', (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// GET /tasks/:id
router.get('/:id', (req, res) => {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});

// POST /tasks
router.post('/', (req, res) => {
  const { title, description, completed } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });
  const tasks = readTasks();
  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    description: description || '',
    completed: !!completed
  };
  tasks.push(newTask);
  try {
    writeTasks(tasks);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save task' });
  }
});

// PUT /tasks/:id
router.put('/:id', (req, res) => {
  const { title, description, completed } = req.body;
  const tasks = readTasks();
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: 'Task not found' });
  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (completed !== undefined) task.completed = completed;
  try {
    writeTasks(tasks);
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

// DELETE /tasks/:id
router.delete('/:id', (req, res) => {
  let tasks = readTasks();
  const idx = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Task not found' });
  const deleted = tasks.splice(idx, 1)[0];
  try {
    writeTasks(tasks);
    res.json(deleted);
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

module.exports = router;
