import { useState } from 'react'
import './App.css'
const carinfo = { name: "Ford", model: "Mustang" };
import Car from './Components/Car.jsx';
import Events from './Components/Events.jsx';
import Phone from './Components/Phone.jsx';
import Color from './Components/Color.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Car carinfo={carinfo} />
      <Events />
      <Phone />
      <Color />
    </>
  )
}

export default App
