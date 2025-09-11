import RecipeItem from '../model/RecipeItem';
import RecipeCollection from '../model/RecipeCollection';

export default class RecipeTemplate {
  private container: HTMLDivElement;
  static instance: RecipeTemplate = new RecipeTemplate();

  private constructor() {
    this.container = document.getElementById('recipeContainer') as HTMLDivElement;
  }


  render(recipeCollection: RecipeCollection): void {
    this.container.innerHTML = ''; 

    recipeCollection.getRecipes().forEach(recipe => {
      const card = this.createRecipeCard(recipe);
      this.container.append(card);

    
      card.querySelector('.delete-btn')?.addEventListener('click', () => {
        recipeCollection.removeRecipe(recipe.id);
        this.render(recipeCollection); 
      });

      card.querySelector('.favorite-btn')?.addEventListener('click', () => {
        recipeCollection.toggleFavorite(recipe.id);
        this.render(recipeCollection);
      });
    });
  }


  private createRecipeCard(recipe: RecipeItem): HTMLDivElement {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    if (recipe.isFavorite) {
      card.classList.add('favorite');
    }

    const ingredientsHTML = `<ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>`;

    card.innerHTML = `
      <h3>${recipe.title}</h3>
      <div><h4>Ingredients:</h4>${ingredientsHTML}</div>
      <div><h4>Instructions:</h4><p>${recipe.instructions}</p></div>
      <div class="card-buttons">
        <button class="favorite-btn">${recipe.isFavorite ? 'Unfavorite' : 'Favorite'}</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;
    return card;
  }
}