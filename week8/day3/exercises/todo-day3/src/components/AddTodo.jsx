import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice'; 

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      return;
    }
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '20px' }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new task..."
        style={{ flexGrow: 1, padding: '10px', border: '1px solid #ddd', borderRadius: '4px 0 0 4px' }}
      />
      <button
        type="submit"
        style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '0 4px 4px 0', cursor: 'pointer' }}
      >
        Add Task
      </button>
    </form>
  );
}

export default AddTodo;