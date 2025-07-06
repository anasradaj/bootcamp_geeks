import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialBooks = [
  { id: 'b1', title: 'Le Seigneur des Anneaux', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
  { id: 'b2', title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
  { id: 'b3', title: 'Ça', author: 'Stephen King', genre: 'Horror' },
  { id: 'b4', title: 'Fondation', author: 'Isaac Asimov', genre: 'Science Fiction' },
  { id: 'b5', title: 'Le Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
  { id: 'b6', title: 'Shining', author: 'Stephen King', genre: 'Horror' },
  { id: 'b7', title: 'Neuromancien', author: 'William Gibson', genre: 'Science Fiction' },
  { id: 'b8', title: 'Le Nom du Vent', author: 'Patrick Rothfuss', genre: 'Fantasy' },
  { id: 'b9', title: 'Dracula', author: 'Bram Stoker', genre: 'Horror' },
];

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    inventory: initialBooks,
    selectedGenre: 'All',
  },
  reducers: {
    // Un reducer pour changer le genre sélectionné par l'utilisateur
    setGenreFilter: (state, action) => {
      state.selectedGenre = action.payload; // Le payload sera le nom du genre (ex: 'Fantasy', 'Horror', 'All')
    },
  },
});


export const { setGenreFilter } = booksSlice.actions;

export default booksSlice.reducer;

// --- Création des Sélecteurs avec createSelector ---
// createSelector est importé de @reduxjs/toolkit (qui le réexporte de reselect)

// 1. Un sélecteur de base pour récupérer toute la liste des livres de l'état
// Ceci est la première "entrée" pour nos sélecteurs composés.
export const selectAllBooks = (state) => state.books.inventory;

// 2. Un sélecteur de base pour récupérer le genre actuellement sélectionné
export const selectSelectedGenre = (state) => state.books.selectedGenre;

// 3. Un sélecteur "mémorisé" pour obtenir la liste des livres filtrée
// Ce sélecteur ne se re-calculera que si selectAllBooks OU selectSelectedGenre changent.
export const selectFilteredBooks = createSelector(
  [selectAllBooks, selectSelectedGenre],
  (books, selectedGenre) => {
    if (selectedGenre === 'All') {
      return books;
    }
    return books.filter(book => book.genre === selectedGenre);
  }
);

// 4. Sélecteurs pour des genres spécifiques
// Ceux-ci sont aussi des sélecteurs composés qui utilisent `selectAllBooks`.
// Ils sont plus spécifiques et pourraient être utilisés si on avait des composants dédiés à chaque genre.
export const selectHorrorBooks = createSelector(
  [selectAllBooks],
  (books) => books.filter(book => book.genre === 'Horror')
);

export const selectFantasyBooks = createSelector(
  [selectAllBooks],
  (books) => books.filter(book => book.genre === 'Fantasy')
);

export const selectScienceFictionBooks = createSelector(
  [selectAllBooks],
  (books) => books.filter(book => book.genre === 'Science Fiction')
);