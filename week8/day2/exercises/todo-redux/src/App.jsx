import React from 'react';
import AddTodo from './components/AddTodo'; 
import TodoList from './components/TodoList'; 
// import './App.css'; 

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>Tasks Manager</h1>
      <AddTodo /> 
      <TodoList /> 
    </div>
  );
}

export default App;