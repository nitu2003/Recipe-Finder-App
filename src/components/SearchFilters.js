import React from 'react';

const SearchFilters = ({ setDiet }) => {
  return (
    <div className="search-filters">
      <label htmlFor="diet">Diet Preference: </label>
      <select onChange={(e) => setDiet(e.target.value)} id="diet">
        <option value="">None</option>
        <option value="vegan">Vegan</option>
        <option value="vegetarian">Vegetarian</option>
      </select>
    </div>
  );
};

export default SearchFilters;
