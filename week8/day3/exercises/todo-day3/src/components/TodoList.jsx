import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {

  const todos = useSelector((state) => state.todos.todos); // Le premier 'todos' est la clé du slice, le second est le tableau dans l'état du slice

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>No tasks available.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </ul>
  );
}

export default TodoList;