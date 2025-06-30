import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editTask, deleteTask, toggleTask } from '../redux/actions';

function TaskItem({ todo, selectedDay, editTask, deleteTask, toggleTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleToggleComplete = () => {
    toggleTask(selectedDay, todo.id);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (editedText.trim() === '') return;
    editTask(selectedDay, todo.id, editedText); 
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedText(todo.text);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(selectedDay, todo.id);
    }
  };

  return (
    <li style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      borderBottom: '1px solid #eee',
      backgroundColor: todo.completed ? '#f0f8ff' : 'white', 
      textDecoration: todo.completed ? 'line-through' : 'none', 
      color: todo.completed ? '#888' : '#333'
    }}>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onKeyPress={(e) => { if (e.key === 'Enter') handleSaveEdit(); }}
          style={{ flexGrow: 1, padding: '5px', border: '1px solid #007bff', borderRadius: '4px' }}
        />
      ) : (
        <span onClick={handleToggleComplete} style={{ cursor: 'pointer', flexGrow: 1 }}>
          {todo.text}
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
              onClick={handleEditClick}
              style={{ padding: '5px 10px', backgroundColor: '#ffc107', color: 'black', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '5px' }}
            >
              Edit
            </button>
            <button
              onClick={handleDeleteClick}
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

const mapDispatchToProps = (dispatch) => ({
  editTask: (day, taskId, newText) => dispatch(editTask(day, taskId, newText)),
  deleteTask: (day, taskId) => dispatch(deleteTask(day, taskId)),
  toggleTask: (day, taskId) => dispatch(toggleTask(day, taskId)),
});

export default connect(null, mapDispatchToProps)(TaskItem);