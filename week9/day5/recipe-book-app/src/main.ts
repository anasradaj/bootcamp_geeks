import './style.css';
import RecipeItem from './model/RecipeItem';
import RecipeCollection from './model/RecipeCollection';
import RecipeTemplate from './templates/RecipeTemplate';

const app = () => {
  const recipeCollection = new RecipeCollection();
  const recipeTemplate = RecipeTemplate.instance;

  const form = document.getElementById('recipeEntryForm') as HTMLFormElement;
  const titleInput = document.getElementById('recipeTitle') as HTMLInputElement;
  const ingredientsInput = document.getElementById('ingredients') as HTMLTextAreaElement;
  const instructionsInput = document.getElementById('instructions') as HTMLTextAreaElement;
  const clearButton = document.getElementById('clearRecipesButton') as HTMLButtonElement;

  form.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault();

    const title = titleInput.value;
    const ingredients = ingredientsInput.value.split('\n').filter(ing => ing.trim() !== '');
    const instructions = instructionsInput.value;

    const newRecipe = new RecipeItem(title, ingredients, instructions);
    recipeCollection.addRecipe(newRecipe);

    recipeTemplate.render(recipeCollection);
    form.reset();
  });
  
  clearButton.addEventListener('click', () => {
    recipeCollection.clearAll();
    recipeTemplate.render(recipeCollection);
  });

  recipeTemplate.render(recipeCollection);
};

app();