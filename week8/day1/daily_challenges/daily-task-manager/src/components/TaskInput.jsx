import React, { useState } from 'react';
import { useTasks } from '../TaskContext';

function TaskInput() {
  const [taskText, setTaskText] = useState('');
  const { dispatch } = useTasks();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;

    dispatch({ type: 'ADD_TASK', payload: { text: taskText } });
    setTaskText('');
  };

  return (
    <form onSubmit={handleAddTask} style={{ display: 'flex', marginBottom: '20px' }}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add new task..."
        style={{ flexGrow: 1, padding: '10px', border: '1px solid #ddd', borderRadius: '4px 0 0 4px' }}
      />
      <button
        type="submit"
        style={{ padding: '10px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '0 4px 4px 0', cursor: 'pointer' }}
      >
        Add
      </button>
    </form>
  );
}

export default TaskInput;