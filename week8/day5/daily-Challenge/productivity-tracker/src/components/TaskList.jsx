// src/components/TaskList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { selectAllTasks } from '../features/tasks/tasksSlice';
import { selectSelectedCategoryId, selectAllCategories } from '../features/categories/categoriesSlice';
import { createSelector } from '@reduxjs/toolkit';

const selectTasksBySelectedCategory = createSelector(
  [selectAllTasks, selectSelectedCategoryId],
  (allTasks, selectedCategoryId) => {
    if (selectedCategoryId === 'all') {
      return allTasks;
    }
    return allTasks.filter(task => task.categoryId === selectedCategoryId);
  }
);

function TaskList() {
  const tasksToDisplay = useSelector(selectTasksBySelectedCategory);
  const currentSelectedCategoryId = useSelector(selectSelectedCategoryId);
  const categories = useSelector(selectAllCategories);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#555', marginBottom: '15px' }}>Tasks</h2>
      {tasksToDisplay.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>
          {currentSelectedCategoryId === 'all' ? 'No tasks.' : 'No tasks found for this category.'}
        </p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasksToDisplay.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))
        }
        </ul>
      )}
    </div>
  );
}

export default TaskList;