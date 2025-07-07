import { createSlice } from '@reduxjs/toolkit';

const initialCategories = [
  { id: 'cat1', name: 'Development' },
  { id: 'cat2', name: 'Administration' },
  { id: 'cat3', name: 'Learning' },
  { id: 'cat4', name: 'Personal' },
];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list: initialCategories,
    selectedCategoryId: 'all',
  },
  reducers: {
    addCategory: (state, action) => {
      state.list.push({
        id: Date.now().toString(),
        name: action.payload,
      });
    },
    editCategory: (state, action) => {
      const { id, newName } = action.payload;
      const existingCategory = state.list.find(cat => cat.id === id);
      if (existingCategory) {
        existingCategory.name = newName;
      }
    },
    deleteCategory: (state, action) => {
      state.list = state.list.filter(cat => cat.id !== action.payload);
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const { addCategory, editCategory, deleteCategory, setSelectedCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;

export const selectAllCategories = (state) => state.categories.list;
export const selectSelectedCategoryId = (state) => state.categories.selectedCategoryId;

export const selectCategoryById = (categoryId) => createSelector(
  [selectAllCategories],
  (categories) => categories.find(cat => cat.id === categoryId)
);