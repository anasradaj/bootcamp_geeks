import { useState } from 'react'
import './App.css'

function App() {
  const [languages, setLanguages] = useState([
    { name: 'Php', votes: 0 },
    { name: 'Python', votes: 0 },
    { name: 'JavaScript', votes: 0 },
    { name: 'Java', votes: 0 }
  ]);

  const vote = (index) => {
    setLanguages(languages =>
      languages.map((lang, i) =>
        i === index ? { ...lang, votes: lang.votes + 1 } : lang
      )
    );
  };

  return (
    <div>
      <h1>Vote for your favorite language!</h1>
      {languages.map((lang, idx) => (
        <div key={lang.name} style={{ margin: '10px 0' }}>
          <span>{lang.name}: {lang.votes} votes </span>
          <button onClick={() => vote(idx)}>Vote</button>
        </div>
      ))}
    </div>
  );
}

export default App;
