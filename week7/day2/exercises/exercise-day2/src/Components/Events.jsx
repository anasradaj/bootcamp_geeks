import React, { useState } from 'react';

const Events = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      alert(e.target.value);
    }
  };

  const toggle = () => {
    setIsToggleOn((prev) => !prev);
  };

  return (
    <div>
      <button onClick={clickMe}>Click me</button>
      <br /><br />
      <input type="text" onKeyDown={handleKeyDown} placeholder="Type and press Enter" />
      <br /><br />
      <button onClick={toggle}>{isToggleOn ? 'ON' : 'OFF'}</button>
    </div>
  );
};

export default Events;
