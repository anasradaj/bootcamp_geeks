import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';
import { selectAllCategories } from '../features/categories/categoriesSlice';

function TaskInput() {
  const [taskText, setTaskText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = useSelector(selectAllCategories);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;

    const categoryIdToAssign = selectedCategory === 'all' ? (categories[0] ? categories[0].id : '') : selectedCategory;

    dispatch(addTask({ text: taskText, categoryId: categoryIdToAssign }));
    setTaskText('');
    setSelectedCategory('all');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px', padding: '15px', border: '1px solid #eee', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add new task..."
        style={{ padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
        required
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{ padding: '10px', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem' }}
      >
        <option value="all">Assign to a category (optional)</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem' }}
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskInput;