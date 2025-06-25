import { useRef, useState } from 'react'
import './App.css'

function App() {
  const inputRef = useRef(null);
  const [charCount, setCharCount] = useState(0);
  const handleChange = () => {
    if (inputRef.current) {
      setCharCount(inputRef.current.value.length);
    };
  };

  return (
    <>
      <div className='App'>
        <h1>Character Counter</h1>
        <textarea
          ref={inputRef}
          onChange={handleChange}
          placeholder='Type something...'
          rows={10}
          cols={50}
          style={{ fontSize: '1.2rem', padding: '10px', marginBottom: '10px' }}
        ></textarea>
        <p>Character count: {charCount}</p>
      </div>
    </>
  )
}

export default App
