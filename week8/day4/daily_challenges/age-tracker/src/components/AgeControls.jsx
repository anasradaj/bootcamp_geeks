import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ageUpAsync, ageDownAsync } from '../features/age/ageSlice';

function AgeControls() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.age.loading);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
      <button
        onClick={() => dispatch(ageUpAsync())}
        disabled={loading}
        style={{
          padding: '12px 25px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontSize: '1.2rem',
          fontWeight: 'bold',
        }}
      >
        Age Up
      </button>
      <button
        onClick={() => dispatch(ageDownAsync())}
        disabled={loading}
        style={{
          padding: '12px 25px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontSize: '1.2rem',
          fontWeight: 'bold',
        }}
      >
        Age Down
      </button>
    </div>
  );
}

export default AgeControls;