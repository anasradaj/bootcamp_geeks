import RecipeItem from './RecipeItem';

export default class RecipeCollection {
  private recipes: RecipeItem[] = [];

  constructor() {
    this.load(); 
  }

 
  addRecipe(recipe: RecipeItem): void {
    this.recipes.push(recipe);
    this.save();
  }

 
  removeRecipe(id: string): void {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
    this.save();
  }


  toggleFavorite(id: string): void {
    const recipe = this.recipes.find(recipe => recipe.id === id);
    if (recipe) {
      recipe.isFavorite = !recipe.isFavorite;
      this.save();
    }
  }
  

  getRecipes(): RecipeItem[] {
      return this.recipes;
  }
  

  clearAll(): void {
      this.recipes = [];
      this.save();
  }


  private save(): void {
    localStorage.setItem('recipeBookApp_recipes', JSON.stringify(this.recipes));
  }


  private load(): void {
    const recipesJSON = localStorage.getItem('recipeBookApp_recipes');
    if (recipesJSON) {
      const parsedRecipes = JSON.parse(recipesJSON);

      this.recipes = parsedRecipes.map((r: any) => {
        const recipe = new RecipeItem(r.title, r.ingredients, r.instructions);
        recipe.id = r.id;
        recipe.isFavorite = r.isFavorite;
        return recipe;
      });
    }
  }
}