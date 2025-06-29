
import React from 'react';
import { connect } from 'react-redux'; 
import TodoItem from './TodoItem'; 

function TodoList({ todos }) { 
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

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, null)(TodoList);