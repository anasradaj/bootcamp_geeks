import React from 'react';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './exercise3';


function App() {
  const myelement = <h1>I love jsx!</h1>;
  const sum = 5 + 5;
  const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};
  return (
    <div>
      <p>Hello World! </p>
      {myelement}
      <p>React is {sum} times better with JSX</p>
      <h3>{user.firstName} {user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
      <Exercise />
    </div>
  );

}


export default App;

