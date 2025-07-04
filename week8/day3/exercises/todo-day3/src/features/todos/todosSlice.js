import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

// Création du Slice pour les "todos"
const todosSlice = createSlice({
  name: 'todos', // Nom du slice (utilisé comme préfixe pour les types d'actions générés)
  initialState, // L'état initial
  reducers: {
    // Définition des "reducers" (fonctions qui mutent l'état EN APPARENCE grâce à Immer.js, inclus dans RTK)
    addTodo: (state, action) => {
      // RTK utilise Immer.js en interne, ce qui permet de "muter" l'état directement.
      // En réalité, Immer crée une nouvelle copie de l'état pour vous de manière immuable.
      state.todos.push({
        id: Date.now(),
        text: action.payload, 
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed; // Mutation directe autorisée par Immer
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

// createSlice génère automatiquement les actions creators et le reducer
export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;