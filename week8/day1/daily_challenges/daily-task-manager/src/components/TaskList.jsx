
import React from 'react';
import TaskItem from './TaskItem';
import { useTasks } from '../TaskContext';

function TaskList({ currentFilter }) {
  const { state } = useTasks();

  const filteredTasks = state.tasks.filter(task => {
    if (currentFilter === 'all') {
      return true; // 
    }
    if (currentFilter === 'active') {
      return !task.completed; 
    }
    if (currentFilter === 'completed') {
      return task.completed; 
    }
    return true; 
  });

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {filteredTasks.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>
          {currentFilter === 'all' && "No tasks found."}
          {currentFilter === 'active' && "No active tasks at the moment."}
          {currentFilter === 'completed' && "No completed tasks at the moment."}
        </p>
      ) : (
        filteredTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))
      )}
    </ul>
  );
}

export default TaskList;