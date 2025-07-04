import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todos/todosSlice';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <li style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      borderBottom: '1px solid #eee',
      backgroundColor: todo.completed ? '#f0f8ff' : 'white',
      textDecoration: todo.completed ? 'line-through' : 'none',
      color: todo.completed ? '#888' : '#333',
      cursor: 'pointer'
    }}>
      <span onClick={handleToggle} style={{ flexGrow: 1 }}>
        {todo.text}
      </span>
      <button
        onClick={handleRemove}
        style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;