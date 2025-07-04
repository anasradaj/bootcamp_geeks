import React from 'react';
import DatePicker from './components/DatePicker';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
// import './App.css'; 

function App() {
  return (
    <div style={{
      maxWidth: '700px',
      margin: '50px auto',
      padding: '30px',
      border: '1px solid #ddd', 
      borderRadius: '10px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      fontFamily: 'Arial, sans-serif',
      transition: 'all 0.5s ease',
    }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px', fontSize: '2.5rem' }}>Daily Planner</h1>
      
      <DatePicker />
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;