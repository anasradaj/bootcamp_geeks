import React from 'react';
import { useSelector } from 'react-redux';

function AgeDisplay() {
  const age = useSelector((state) => state.age.age);
  const loading = useSelector((state) => state.age.loading);

  return (
    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
      <h2 style={{ fontSize: '3rem', color: '#6a0dad' }}>
        Age: {age}
      </h2>
      {loading && (
        <p style={{ color: '#007bff', fontSize: '1.2rem', marginTop: '10px' }}>
          Updating age... {/* Simple loading text */}
          <span style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>⚙️</span>
        </p>
      )}
      <style>
        {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        `}
      </style>
    </div>
  );
}

export default AgeDisplay;