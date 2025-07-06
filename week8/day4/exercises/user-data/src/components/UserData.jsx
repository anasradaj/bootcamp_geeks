import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserById, resetUserData } from '../features/users/usersSlice';

function UserData() {
  const userData = useSelector((state) => state.users.userData);
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);
  const dispatch = useDispatch();

  // État local pour le champ de saisie de l'ID utilisateur
  const [userIdInput, setUserIdInput] = useState('1'); // ID 1 par défaut

  // Utiliser useEffect pour déclencher l'appel API au montage initial du composant
  useEffect(() => {
    // Optionnel: Dispatch le Thunk pour charger un utilisateur au démarrage, si userIdInput n'est pas vide
    if (userIdInput) {
        dispatch(fetchUserById(userIdInput));
    }
  }, [dispatch]);

  const handleLoadUser = () => {
    if (userIdInput) {
        dispatch(fetchUserById(userIdInput));
        setError(null);
    }
  };


  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '30px', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', backgroundColor: '#fff', textAlign: 'center' }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>User Data</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="number"
          value={userIdInput}
          onChange={(e) => setUserIdInput(e.target.value)}
          placeholder="Enter User ID (1-10)"
          min="1"
          max="10"
          style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button
          onClick={handleLoadUser}
          disabled={status === 'loading'} // Désactiver le bouton pendant le chargement
          style={{ padding: '8px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          {status === 'loading' ? 'Loading...' : 'Load User'}
        </button>
        {/* Bouton pour réinitialiser les données (action synchrone) */}
        <button
            onClick={() => dispatch(resetUserData())}
            style={{ marginLeft: '10px', padding: '8px 15px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
            Reset user data
        </button>
      </div>

      {status === 'loading' && (
        <div style={{ color: '#007bff', marginTop: '20px' }}>Loading user data...</div>
      )}

      {status === 'failed' && (
        <div style={{ color: '#dc3545', marginTop: '20px' }}>
          Error loading user data: {error || 'An unknown error occurred.'}
        </div>
      )}

      {status === 'succeeded' && userData && (
        <div style={{ marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
          <h3>User Data :</h3>
          <p><strong>ID:</strong> {userData.id}</p>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Username:</strong> {userData.username}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
          <p><strong>Website:</strong> {userData.website}</p>
          <p><strong>City:</strong> {userData.address?.city}</p>
        </div>
      )}

      {status === 'idle' && !userData && (
        <p style={{ color: '#666', marginTop: '20px' }}>Please enter an ID and click "Load User".</p>
      )}
    </div>
  );
}

export default UserData;