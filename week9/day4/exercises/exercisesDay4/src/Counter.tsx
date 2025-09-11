import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  
  const [lastAction, setLastAction] = useState<'increment' | 'decrement' | 'none'>('none');

  const handleIncrement = () => {
    setCount(currentCount => currentCount + 1);
    setLastAction('increment');
  };

  const handleDecrement = () => {
    setCount(currentCount => currentCount - 1);
    setLastAction('decrement');
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <p>Last Action: {lastAction}</p>
    </div>
  );
};

export default Counter;