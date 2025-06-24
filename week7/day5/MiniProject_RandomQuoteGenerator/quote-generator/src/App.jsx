import React, { useState, useEffect } from 'react';
import quotesData from './data/quotes'; 


const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857'];


function App() { 
  const [currentQuote, setCurrentQuote] = useState({});
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [usedQuoteIndices, setUsedQuoteIndices] = useState([]);


  const generateRandomQuote = () => {
    let randomIndex;
    let newUsedQuoteIndices = [...usedQuoteIndices];

    // reset quotes if all used
    if (newUsedQuoteIndices.length === quotesData.length) {
        newUsedQuoteIndices = [];
    }

    // Find new index not used before
    do {
      randomIndex = Math.floor(Math.random() * quotesData.length);
    } while (newUsedQuoteIndices.includes(randomIndex));

    newUsedQuoteIndices.push(randomIndex);
    setUsedQuoteIndices(newUsedQuoteIndices);
    setCurrentQuote(quotesData[randomIndex]);

    // Choose a random color
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    setCurrentColor(colors[randomColorIndex]);
  };

  useEffect(() => {
    generateRandomQuote();
  }, []); // call function only once (equivalent to componentDidMount)


  return (
    <div style={{ backgroundColor: currentColor, minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'background-color 1s ease' }}>
      <div id="quote-box" style={{ backgroundColor: 'white', padding: '40px', borderRadius: '8px', maxWidth: '600px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.5)' }}>
        <h2 id="text" style={{ color: currentColor, transition: 'color 2s ease' }}>"{currentQuote.quote}"</h2>
        <p id="author" style={{ color: currentColor, transition: 'color 2s ease' }}>- {currentQuote.author}</p>
        <button
          id="new-quote"
          onClick={generateRandomQuote}
          style={{ backgroundColor: currentColor, color: 'white', padding: '10px 20px', border: 'none', borderRadius: '20px', cursor: 'pointer', fontSize: '1rem', transition: 'background-color 1s ease' }}
        >
          New quote
        </button>
      </div>
    </div>
  );
}

export default App;