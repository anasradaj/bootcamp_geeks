import React, { useState, useEffect } from 'react';

function Color() {
  const [favoriteColor, setFavoriteColor] = useState('red');

  useEffect(() => {
    alert('useEffect reached');
  }, [favoriteColor]);

  return (
    <div>
      <h2>My favorite color is {favoriteColor}</h2>
      <button onClick={() => setFavoriteColor('blue')}>Change color to blue</button>
    </div>
  );
}

export default Color;
