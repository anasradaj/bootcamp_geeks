import React from 'react';
import { useSelector } from 'react-redux'; 
import TaskItem from './TaskItem';
import { selectSelectedDay, selectTasksForSelectedDay } from '../features/planner/selectors';

function TaskList() {
  const selectedDay = useSelector(selectSelectedDay);
  const tasks = useSelector(selectTasksForSelectedDay);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#555', marginBottom: '15px' }}>Tasks for {selectedDay}</h2>
      {tasks.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>No tasks for this day.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map((task) => (
            <TaskItem key={task.id} todo={task} selectedDay={selectedDay} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;