import React from 'react';
import { useTheme } from '../ThemeContext'; 

function ThemeSwitcherButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '10px 20px',
        fontSize: '1rem',
        cursor: 'pointer',
        backgroundColor: theme === 'light' ? '#333' : '#eee', 
        color: theme === 'light' ? 'white' : 'black',        
        border: 'none',
        borderRadius: '5px',
        marginTop: '20px',
      }}
    >
     Change theme to : {theme === 'light' ? 'dark' : 'light'}
    </button>
  );
}

export default ThemeSwitcherButton;