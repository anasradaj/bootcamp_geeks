import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTask, deleteTask, toggleTaskCompletion, updateTaskProgress } from '../features/tasks/tasksSlice';
import { selectAllCategories } from '../features/categories/categoriesSlice';

function TaskItem({ task }) {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const [editedCategoryId, setEditedCategoryId] = useState(task.categoryId || 'all');
  const [progressValue, setProgressValue] = useState(task.progress);

  const handleToggleComplete = useCallback(() => {
    dispatch(toggleTaskCompletion(task.id));
  }, [dispatch, task.id]);

  const handleDelete = useCallback(() => {
    if (window.confirm('Do you really want to delete this task?')) {
      dispatch(deleteTask(task.id));
    }
  }, [dispatch, task.id]);

  const handleSaveEdit = useCallback(() => {
    if (editedText.trim() === '') return;
    dispatch(editTask({ id: task.id, newText: editedText, newCategoryId: editedCategoryId === 'all' ? null : editedCategoryId }));
    setIsEditing(false);
  }, [dispatch, task.id, editedText, editedCategoryId]);

  const handleProgressChange = useCallback((e) => {
    const newProgress = Number(e.target.value);
    setProgressValue(newProgress);
    dispatch(updateTaskProgress({ id: task.id, progress: newProgress }));
  }, [dispatch, task.id]);


  return (
    <li style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '15px',
      marginBottom: '10px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: task.completed ? '#e6ffe6' : 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
    }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            style={{ padding: '8px', marginBottom: '10px', border: '1px solid #007bff', borderRadius: '4px' }}
          />
          <select
            value={editedCategoryId}
            onChange={(e) => setEditedCategoryId(e.target.value)}
            style={{ padding: '8px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
          >
            <option value="all">Without category</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <button onClick={handleSaveEdit} style={{ padding: '8px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Save</button>
            <button onClick={() => setIsEditing(false)} style={{ padding: '8px 15px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span
              onClick={handleToggleComplete}
              style={{ flexGrow: 1, cursor: 'pointer', textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? '#888' : '#333' }}
            >
              {task.text}
              {categories.find(cat => cat.id === task.categoryId) && (
                <small style={{ marginLeft: '10px', padding: '2px 8px', borderRadius: '5px', backgroundColor: '#f0f0f0', color: '#555' }}>
                  {categories.find(cat => cat.id === task.categoryId).name}
                </small>
              )}
            </span>
            <div style={{ marginLeft: '10px' }}>
              <button onClick={() => setIsEditing(true)} style={{ padding: '5px 10px', backgroundColor: '#ffc107', color: 'black', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '5px' }}>Edit</button>
              <button onClick={handleDelete} style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
            </div>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginRight: '10px' }}>Progress:</label>
            <input
              type="range"
              min="0"
              max="100"
              step="10"
              value={progressValue}
              onChange={handleProgressChange}
              style={{ width: 'calc(100% - 100px)', verticalAlign: 'middle' }}
            />
            <span style={{ marginLeft: '10px' }}>{progressValue}%</span>
          </div>
        </>
      )}
    </li>
  );
}

export default TaskItem;