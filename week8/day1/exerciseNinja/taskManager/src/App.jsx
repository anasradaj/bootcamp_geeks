import React from 'react';
import TaskInput from './components/TaskInput'; 
import TaskList from './components/TaskList';   
import './App.css'; 

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>Task Manager</h1>
      <TaskInput />  
      <TaskList />  
    </div>
  );
}

export default App;