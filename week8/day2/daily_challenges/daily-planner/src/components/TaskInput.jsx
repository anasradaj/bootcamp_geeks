import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../redux/actions';

function TaskInput({ selectedDay, addTask, currentAccentColor }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;

    addTask(selectedDay, taskText); // Dispatch l'action ADD_TASK pour le jour sélectionné
    setTaskText(''); 
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '20px' }}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder={`Add a task for ${selectedDay}...`}
        style={{ flexGrow: 1, padding: '10px', border: `1px solid ${currentAccentColor}`, borderRadius: '4px 0 0 4px', transition: 'border-color 0.5s ease' }}
      />
      <button
        type="submit"
        style={{ padding: '10px 15px', backgroundColor: currentAccentColor, color: 'white', border: 'none', borderRadius: '0 4px 4px 0', cursor: 'pointer', transition: 'background-color 0.5s ease' }}
      >
        Add
      </button>
    </form>
  );
}

// mapStateToProps : Nous avons besoin du jour sélectionné ici
const mapStateToProps = (state) => ({
  selectedDay: state.selectedDay,
  currentAccentColor: state.currentAccentColor,
});

// mapDispatchToProps : Mappe l'action creator 'addTask'
const mapDispatchToProps = (dispatch) => ({
  addTask: (day, text) => dispatch(addTask(day, text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskInput);