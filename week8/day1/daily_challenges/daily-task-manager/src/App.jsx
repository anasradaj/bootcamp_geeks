import React from 'react';
import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css'; 

function App() {
  const [filter, setFilter] = useState('all');

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>Task Manager</h1>
      <TaskInput />
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button
          onClick={() => setFilter('all')}
          style={{
            padding: '8px 15px',
            margin: '0 5px',
            border: '1px solid #007bff',
            borderRadius: '4px',
            backgroundColor: filter === 'all' ? '#007bff' : 'white',
            color: filter === 'all' ? 'white' : '#007bff',
            cursor: 'pointer',
          }}
        >
          All
        </button>
        <button
          onClick={() => setFilter('active')}
          style={{
            padding: '8px 15px',
            margin: '0 5px',
            border: '1px solid #ffc107',
            borderRadius: '4px',
            backgroundColor: filter === 'active' ? '#ffc107' : 'white',
            color: filter === 'active' ? 'white' : '#ffc107',
            cursor: 'pointer',
          }}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('completed')}
          style={{
            padding: '8px 15px',
            margin: '0 5px',
            border: '1px solid #28a745',
            borderRadius: '4px',
            backgroundColor: filter === 'completed' ? '#28a745' : 'white',
            color: filter === 'completed' ? 'white' : '#28a745',
            cursor: 'pointer',
          }}
        >
          Completed
        </button>
      </div>
      <TaskList currentFilter={filter} />
    </div>
  );
}

export default App;