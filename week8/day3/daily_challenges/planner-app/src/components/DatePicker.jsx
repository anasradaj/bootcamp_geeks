import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { selectDay } from '../features/planner/plannerSlice'; 

function DatePicker() {

  const selectedDay = useSelector((state) => state.planner.selectedDay);
  const dispatch = useDispatch(); 
  const handleDateChange = (e) => {
    dispatch(selectDay(e.target.value)); 
  };

  return (
    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
      <label htmlFor="date-input" style={{ marginRight: '10px', fontSize: '1.2rem', color: '#333' }}>Select a date:</label>
      <input
        type="date"
        id="date-input"
        value={selectedDay}
        onChange={handleDateChange}
        style={{ padding: '8px', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc' }}
      />
    </div>
  );
}

export default DatePicker;