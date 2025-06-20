import React, { useState } from 'react';

function Phone() {
  const [phone, setPhone] = useState({
    brand: 'Samsung',
    model: 'Galaxy S20',
    color: 'black',
    year: 2020
  });

  const changeColor = () => {
    setPhone((prev) => ({ ...prev, color: 'blue' }));
  };

  return (
    <div>
      <h2>My phone:</h2>
      <ul>
        <li>Brand: {phone.brand}</li>
        <li>Model: {phone.model}</li>
        <li>Color: {phone.color}</li>
        <li>Year: {phone.year}</li>
      </ul>
      <button onClick={changeColor}>Change color to blue</button>
    </div>
  );
}

export default Phone;
