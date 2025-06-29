import React from 'react';
import { connect } from 'react-redux';
import { selectDay } from '../redux/actions';

function DatePicker({ selectedDay, selectDay }) {
  const handleDateChange = (e) => {
    selectDay(e.target.value); 
  };

  return (
    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
      <label htmlFor="date-input" style={{ marginRight: '10px', fontSize: '1.2rem', color: '#333' }}>Select a Date:</label>
      <input
        type="date"
        id="date-input"
        value={selectedDay} // La date actuelle est contrôlée par Redux
        onChange={handleDateChange}
        style={{ padding: '8px', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
      />
    </div>
  );
}

// mapStateToProps : Mappe l'état 'selectedDay' du store aux props du composant
const mapStateToProps = (state) => ({
  selectedDay: state.selectedDay,
});

// mapDispatchToProps : Mappe l'action creator 'selectDay' aux props du composant
const mapDispatchToProps = (dispatch) => ({
  selectDay: (day) => dispatch(selectDay(day)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);