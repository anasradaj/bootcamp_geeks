import React, { useState } from 'react';
import { useTasks } from '../TaskContext';

function TaskItem({ task }) {
  const { dispatch } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleToggleComplete = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: { id: task.id } });
  };

  const handleRemoveTask = () => {
    dispatch({ type: 'REMOVE_TASK', payload: { id: task.id } });
  };

  const handleEditTask = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (editedText.trim() === '') return;

    dispatch({ type: 'EDIT_TASK', payload: { id: task.id, newText: editedText } });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedText(task.text);
    setIsEditing(false);
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
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleSaveEdit();
          }}
          style={{ flexGrow: 1, padding: '5px', border: '1px solid #007bff', borderRadius: '4px' }}
        />
      ) : (
        <span onClick={handleToggleComplete} style={{ cursor: 'pointer', flexGrow: 1 }}>
          {task.text}
        </span>
      )}

      <div style={{ marginLeft: '10px' }}>
        {isEditing ? (
          <>
            <button
              onClick={handleSaveEdit}
              style={{ padding: '5px 10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '5px' }}
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              style={{ padding: '5px 10px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEditTask}
              style={{ padding: '5px 10px', backgroundColor: '#ffc107', color: 'black', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '5px' }}
            >
              Edit
            </button>
            <button
              onClick={handleRemoveTask}
              style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default TaskItem;