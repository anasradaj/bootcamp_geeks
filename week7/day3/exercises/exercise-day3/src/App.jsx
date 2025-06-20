import { useState } from 'react'
import ErrorBoundary from './ErrorBoundary.jsx';
import BuggyCounter from './BuggyCounter.jsx';
import LifecycleDemo from './LifecycleDemo.jsx';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '2em' }}>
      <h1>React Error Boundary Simulation</h1>
      <h2>Simulation 1: Two BuggyCounters in one ErrorBoundary</h2>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <h2>Simulation 2: Each BuggyCounter in its own ErrorBoundary</h2>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <h2>Simulation 3: BuggyCounter without ErrorBoundary</h2>
      <BuggyCounter />
      <hr />
      <h1>Lifecycle Demo</h1>
      <LifecycleDemo />
    </div>
  )
}

export default App
