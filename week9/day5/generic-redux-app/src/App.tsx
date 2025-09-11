import { useState } from 'react';
import DataFetcher from './components/DataFetcher';
import type { Recipe } from './types/types';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('pasta');
  const [searchTerm, setSearchTerm] = useState('pasta');
  
  // 1. Nouvel état pour gérer la recette sélectionnée (et donc la modale)
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleSearch = () => {
    setSearchTerm(inputValue);
  };

  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      <div className="search-bar">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => { if (e.key === 'Enter') handleSearch(); }}
          placeholder="Search for a recipe..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <DataFetcher<Recipe>
        searchTerm={searchTerm}
        renderItem={(recipe) => (
          // 2. On rend la carte cliquable
          <div className="recipe-card" onClick={() => setSelectedRecipe(recipe)}>
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
          </div>
        )}
      />

      {/* 3. On affiche la modale SEULEMENT si une recette est sélectionnée */}
      {selectedRecipe && (
        <div className="modal-overlay" onClick={() => setSelectedRecipe(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedRecipe.title}</h2>
            {/* Le résumé de Spoonacular contient du HTML, on doit l'afficher comme ça */}
            <p dangerouslySetInnerHTML={{ __html: selectedRecipe.summary }}></p>
            <button onClick={() => setSelectedRecipe(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;