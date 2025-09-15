import axios from 'axios';
import type { Recipe } from '../types/types';

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const API_URL = 'https://api.spoonacular.com/recipes/complexSearch';

export const fetchRecipesAPI = async (searchTerm: string): Promise<Recipe[]> => {
  const response = await axios.get(API_URL, {
    params: {
      query: searchTerm,
      apiKey: API_KEY,
      addRecipeInformation: true,
    }
  });
  return response.data.results || [];
};