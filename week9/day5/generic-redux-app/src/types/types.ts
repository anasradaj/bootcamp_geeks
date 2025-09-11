// src/types/types.ts

export interface Recipe {
  id: number;
  title: string;
  image: string;
  summary: string; // <-- Ajoute cette ligne
}

// DataState ne change pas
export interface DataState {
  items: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}