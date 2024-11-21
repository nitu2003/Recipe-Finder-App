import React, { useState } from 'react';
import RecipeCard from './components/RecipeCard';
import Favorites from './components/Favorites';
import CustomRecipeForm from './components/CustomRecipeForm';
import SearchFilters from './components/SearchFilters';

const App = () => {
  const APP_ID = 'your_app_id'; // Replace with your Edamam App ID
  const APP_KEY = 'your_app_key'; // Replace with your Edamam App Key

  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [customRecipes, setCustomRecipes] = useState([]);
  const [diet, setDiet] = useState(''); // For filtering by diet preference

  // Fetch recipes based on ingredients and diet preference
  const getRecipes = async () => {
    const ingredientQuery = ingredients.split(',').map(i => i.trim()).join(',');
    const dietQuery = diet ? `&diet=${diet}` : '';
    const url = `https://api.edamam.com/search?q=${ingredientQuery}&app_id=${APP_ID}&app_key=${APP_KEY}${dietQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.hits);
  };

  // Add recipe to favorites
  const addFavorite = (recipe) => {
    setFavorites([...favorites, recipe]);
  };

  // Handle form submission for searching recipes
  const handleSearch = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="App">
      <h1>Recipe Finder</h1>

      {/* Search and Filter Form */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients (comma separated)"
        />
        <SearchFilters setDiet={setDiet} />
        <button type="submit">Search</button>
      </form>

      {/* Recipe Cards */}
      <div className="recipes">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard
              key={recipe.recipe.uri}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredientLines}
              addFavorite={() => addFavorite(recipe.recipe)}
            />
          ))
        ) : (
          <p>No recipes found. Try different ingredients!</p>
        )}
      </div>

      {/* Favorites and Custom Recipe Section */}
      <Favorites favorites={favorites} />
      <CustomRecipeForm customRecipes={customRecipes} setCustomRecipes={setCustomRecipes} />
    </div>
  );
};

export default App;

