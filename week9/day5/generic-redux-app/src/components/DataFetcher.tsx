// src/components/DataFetcher.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch, RootState } from '../store'; // <-- La correction est ici
import { fetchData } from '../features/dataSlice';

interface DataFetcherProps<T> {
  searchTerm: string;
  renderItem: (item: T) => React.ReactNode;
}

function DataFetcher<T>({ searchTerm, renderItem }: DataFetcherProps<T>) {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    // Pour pouvoir relancer la recherche si besoin, on ne vérifie plus 'idle'
    dispatch(fetchData(searchTerm));
  }, [searchTerm, dispatch]); // On relance l'effet si searchTerm change

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{renderItem(item as T)}</div>
      ))}
    </div>
  );
}

export default DataFetcher;
