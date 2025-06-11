const express = require('express');
const router = express.Router();

// Sample in-memory database for storing to-do items
const todos = [];
let nextId = 1;

// Get all to-do items
router.get('/todos', (req, res) => {
    res.json(todos);
})

// Get a specific to-do item by ID
router.get('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todo = todos.find(t => t.id === todoId);
    if (!todo) {
        return res.status(404).json({ error: 'To-do item not found' });
    }
    res.json(todo);
})

// Add a new to-do item
router.post('/todos', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    const newTodo = { id: nextId++, title, description };
    todos.push(newTodo);
    res.status(201).json(newTodo);
})

// Update a to-do item by ID
router.put('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const { title, description } = req.body;
    const todo = todos.find(t => t.id === todoId);
    if (!todo) {
        return res.status(404).json({ error: 'To-do item not found' });
    }
    todo.title = title;
    todo.description = description;
    res.json(todo);
})
// Delete a to-do item by ID
router.delete('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todoIndex = todos.findIndex(t => t.id === todoId);
    if (todoIndex === -1) {
        return res.status(404).json({ error: 'To-do item not found' });
    }
    todos.splice(todoIndex, 1);
    res.status(204).send();
});

module.exports = router;