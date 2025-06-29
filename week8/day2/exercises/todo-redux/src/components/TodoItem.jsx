import React from 'react';
import { connect } from 'react-redux'; 
import { toggleTodo, removeTodo } from '../redux/actions'; 

function TodoItem({ todo, toggleTodo, removeTodo }) { 
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
      <span onClick={() => toggleTodo(todo.id)} style={{ flexGrow: 1 }}>
        {todo.text}
      </span>
      <button
        onClick={() => removeTodo(todo.id)}
        style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Supprimer
      </button>
    </li>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  removeTodo: (id) => dispatch(removeTodo(id)),
});

export default connect(null, mapDispatchToProps)(TodoItem);