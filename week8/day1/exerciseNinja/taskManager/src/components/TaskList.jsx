import React from 'react';
import TaskItem from './TaskItem'; 
import { useTasks } from '../TaskContext'; 

function TaskList() {
  const { state } = useTasks(); 

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {state.tasks.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>No tasks found.</p>
      ) : (
        state.tasks.map((task) => (
          <TaskItem key={task.id} task={task} /> 
        ))
      )}
    </ul>
  );
}

export default TaskList;