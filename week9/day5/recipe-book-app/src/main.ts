import './style.css';
import RecipeItem from './model/RecipeItem';
import RecipeCollection from './model/RecipeCollection';
import RecipeTemplate from './templates/RecipeTemplate';

// Initialisation de l'application
const app = () => {
  const recipeCollection = new RecipeCollection();
  const recipeTemplate = RecipeTemplate.instance;

  // Récupération des éléments du formulaire
  const form = document.getElementById('recipeEntryForm') as HTMLFormElement;
  const titleInput = document.getElementById('recipeTitle') as HTMLInputElement;
  const ingredientsInput = document.getElementById('ingredients') as HTMLTextAreaElement;
  const instructionsInput = document.getElementById('instructions') as HTMLTextAreaElement;
  const clearButton = document.getElementById('clearRecipesButton') as HTMLButtonElement;

  // Gérer la soumission du formulaire
  form.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault();

    const title = titleInput.value;
    const ingredients = ingredientsInput.value.split('\n').filter(ing => ing.trim() !== '');
    const instructions = instructionsInput.value;

    const newRecipe = new RecipeItem(title, ingredients, instructions);
    recipeCollection.addRecipe(newRecipe);

    // Ré-afficher la liste et vider le formulaire
    recipeTemplate.render(recipeCollection);
    form.reset();
  });
  
  // Gérer le bouton pour tout effacer
  clearButton.addEventListener('click', () => {
    recipeCollection.clearAll();
    recipeTemplate.render(recipeCollection);
  });

  // Affichage initial au chargement de la page
  recipeTemplate.render(recipeCollection);
};

// Lancer l'application
app();