// src/App.jsx
import React from 'react';
import AgeDisplay from './components/AgeDisplay';     
import AgeControls from './components/AgeControls';   
// import './App.css'; 
function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#8a2be2', 
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%'
      }}>
        <h1 style={{ color: '#6a0dad', marginBottom: '40px' }}>Age Tracker</h1>
        <AgeDisplay />  
        <AgeControls /> 
      </div>
    </div>
  );
}

export default App;