import React from 'react';
import DatePicker from './components/DatePicker';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import { setAccentColor } from './redux/actions';
// import './App.css';

const accentColors = ['#4A90E2', '#50E3C2', '#9013FE', '#F8E71C', '#BD10E0', '#FF2D55', '#4CD964'];

function App({ currentAccentColor, setAccentColor }) {
  const handleChangeColor = () => {
    const newColor = accentColors[Math.floor(Math.random() * accentColors.length)];
    setAccentColor(newColor);
  };
  return (
    <>
    <div style={{ textAlign: 'right', marginTop: '30px' }}>
      <button
        onClick={handleChangeColor}
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          backgroundColor: currentAccentColor,
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.5s ease',
        }}
      >
        Change Color Theme
      </button>
    </div>
    <div style={{
      maxWidth: '700px',
      margin: '50px auto',
      padding: '30px',
      border: `1px solid ${currentAccentColor}`,
      borderRadius: '10px',
      boxShadow: `0 4px 15px ${currentAccentColor}33`,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      fontFamily: 'Arial, sans-serif',
      transition: 'border-color 0.5s ease, box-shadow 0.5s ease, background-color 0.5s ease',
    }}>
      <h1 style={{ textAlign: 'center', color: currentAccentColor, marginBottom: '30px', fontSize: '2.5rem', transition: 'color 0.5s ease' }}>Daily Planner</h1>
      <DatePicker />
      <TaskInput />
      <TaskList />
    </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  currentAccentColor: state.currentAccentColor,
});

const mapDispatchToProps = (dispatch) => ({
  setAccentColor: (color) => dispatch(setAccentColor(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);