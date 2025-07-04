import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../features/planner/plannerSlice';

function TaskInput() {
  const [taskText, setTaskText] = useState('');
  const selectedDay = useSelector((state) => state.planner.selectedDay);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;

    dispatch(addTask({ day: selectedDay, text: taskText }));
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '20px' }}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder={`Add a task for ${selectedDay}...`}
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