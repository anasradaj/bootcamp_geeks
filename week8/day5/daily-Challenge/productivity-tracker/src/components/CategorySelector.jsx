import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllCategories, selectSelectedCategoryId, setSelectedCategory } from '../features/categories/categoriesSlice';

function CategorySelector() {
  const categories = useSelector(selectAllCategories);
  const selectedCategoryId = useSelector(selectSelectedCategoryId);
  const dispatch = useDispatch();

  const handleCategoryChange = (e) => {
    dispatch(setSelectedCategory(e.target.value));
  };

  return (
    <div style={{ marginBottom: '25px', textAlign: 'center' }}>
      <label htmlFor="category-select" style={{ marginRight: '10px', fontWeight: 'bold' }}>Filter by Category:</label>
      <select
        id="category-select"
        value={selectedCategoryId}
        onChange={handleCategoryChange}
        style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '1rem' }}
      >
        <option value="all">All Categories</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategorySelector;