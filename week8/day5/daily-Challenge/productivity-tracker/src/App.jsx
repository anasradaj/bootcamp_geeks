import React from 'react';
import { useSelector } from 'react-redux';
import CategorySelector from './components/CategorySelector';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { selectCompletedTasksCount } from './features/tasks/tasksSlice';
// import './App.css';

function App() {
  const completedCount = useSelector(selectCompletedTasksCount);
  return (
    <div style={{
      maxWidth: '800px',
      margin: '50px auto',
      padding: '30px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px', fontSize: '2.5rem' }}>Productivity Tracker</h1>
      <div style={{ textAlign: 'center', color: '#28a745', fontWeight: 'bold', marginBottom: '20px' }}>
        Completed tasks: {completedCount}
      </div>
      <CategorySelector />
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;