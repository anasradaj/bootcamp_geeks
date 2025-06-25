import { useRef, useState } from 'react'
// import './App.css'
import { useTheme } from './ThemeContext.jsx';
import ThemeSwitcherButton from './components/ThemeSwitcherButton';

function App() {
  const { theme } = useTheme();
  const inputRef = useRef(null);
  const [charCount, setCharCount] = useState(0);
  const handleChange = () => {
    if (inputRef.current) {
      setCharCount(inputRef.current.value.length);
    };
  };
  const appStyles = {
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#333333', 
    color: theme === 'light' ? '#333333' : '#f0f0f0',          
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 0.5s ease, color 0.5s ease', 
  };
  const cardStyles = {
    backgroundColor: theme === 'light' ? 'white' : '#555555',
    color: theme === 'light' ? '#333333' : '#f0f0f0',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
  };

  return (
    <>
      <div className='App' style={appStyles}>
        <div style={cardStyles}>
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
        <ThemeSwitcherButton />
      </div>
    </>
  );
}

export default App
