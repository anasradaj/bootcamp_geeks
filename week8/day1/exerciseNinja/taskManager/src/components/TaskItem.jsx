import React from 'react';
import { useTasks } from '../TaskContext'; 

function TaskItem({ task }) {
  const { dispatch } = useTasks(); 

  const handleToggleComplete = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: { id: task.id } }); 
  };

  const handleRemoveTask = () => {
    dispatch({ type: 'REMOVE_TASK', payload: { id: task.id } }); 
  };

  const handleEditTask = (newText) => {
    if (newText.trim() === '') return;
    dispatch({ type: 'EDIT_TASK', payload: { id: task.id, text: newText } }); 
  };

  return (
    <li style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      borderBottom: '1px solid #eee',
      backgroundColor: task.completed ? '#e6ffe6' : 'white', 
      textDecoration: task.completed ? 'line-through' : 'none', 
      color: task.completed ? '#888' : '#333'
    }}>
      <span onClick={handleToggleComplete} style={{ cursor: 'pointer', flexGrow: 1 }}>
        {task.text}
      </span>
      <button
        onClick={() => {
          const newText = prompt('Edit task:', task.text);
          if (newText !== null) {
            handleEditTask(newText);
          }
        }}
        style={{ padding: '5px 10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}
      >
        Edit
      </button>
      <button
        onClick={handleRemoveTask}
        style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: 'red', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;