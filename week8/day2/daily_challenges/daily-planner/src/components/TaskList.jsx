import React from 'react';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';

function TaskList({ tasks, selectedDay }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2 style={{ textAlign: 'center', color: '#555', marginBottom: '15px' }}>Task for {selectedDay}</h2>
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

// mapStateToProps : Mappe les tâches du jour sélectionné et le jour sélectionné
const mapStateToProps = (state) => ({
  tasks: state.tasksByDay[state.selectedDay] || [], // Retourne le tableau de tâches pour le jour sélectionné, ou un tableau vide si aucun
  selectedDay: state.selectedDay,
});

// Pas de mapDispatchToProps car ce composant ne dispatch pas directement (ses enfants le font)
export default connect(mapStateToProps, null)(TaskList);