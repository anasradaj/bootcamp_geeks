
export interface Recipe {
  id: number;
  title: string;
  image: string;
  summary: string; 
}

export interface DataState {
  items: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}