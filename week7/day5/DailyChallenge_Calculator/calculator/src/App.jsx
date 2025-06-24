import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);


  const handleNum1Change = (e) => {
    setNum1(Number(e.target.value));
  };


  const handleNum2Change = (e) => {
    setNum2(Number(e.target.value));
  };


  const handleAddThem = () => {
    setResult(num1 + num2);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#8a2be2' }}>
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', textAlign: 'center' }}>
        <h1 style={{ color: '#6a0dad', marginBottom: '30px' }}>Adding Two Numbers</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
          <input
            type="number"
            value={num1}
            onChange={handleNum1Change}
            style={{ padding: '10px', fontSize: '1.5rem', width: '100px', border: '2px solid #6a0dad', borderRadius: '5px', textAlign: 'center' }}
          />
          <input
            type="number"
            value={num2}
            onChange={handleNum2Change}
            style={{ padding: '10px', fontSize: '1.5rem', width: '100px', border: '2px solid #6a0dad', borderRadius: '5px', textAlign: 'center' }}
          />
        </div>
        <button
          onClick={handleAddThem}
          style={{ backgroundColor: '#6a0dad', color: 'white', padding: '12px 25px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1.2rem', fontWeight: 'bold' }}
        >
          Add Them!
        </button>
        <h2 style={{ color: '#6a0dad', marginTop: '30px', fontSize: '3rem' }}>{result}</h2>
      </div>
    </div>
  );
}

export default App;