import React ,{useState} from 'react';

const CustomRecipeForm =({customRecipes,setCustomRecipes}) =>{
   const [title, setTitle] = useState('');
   const [ingredients, setIngredients] = useState('');


   const addCoustomRecipe =(e) =>{
    e.preventDefault();
    const newRecipe = {title,ingredients: ingredients.split(',').map(i=>i.trim())};
    setCustomRecipes([...customRecipes,newRecipe]);
    setTitle('');
    setIngredients('');
   };

   return(
    <div className='custom-recipe-form'>
        <h2>Create your own recipe</h2>
        <form onSubmit={addCoustomRecipe}>
           <input
             type='text'
             value={title}
             onChange={(e)=>setTitle(e.target.value)}
             placeholder='Recipe Title'
             required 
           
           />
           <input
             type='text'
             value={ingredients}
             onChange={(e)=>setIngredients(e.target.value)}
             placeholder='Ingredients (comma separated'
             required
           />
           <button type='submit'>Add Recipe</button>
        </form>

        <h3>Your Custom Recipe</h3>
        {customRecipes.length> 0?(
            customRecipes.map((recipe,index)=>(
                <div key={index}>
                    <h4>{recipe.title}</h4>
                    <p>{recipe.ingredients.join(',')}</p>
                </div>    
            ))
        ):(
            <p>No custom recipes added yet!</p>
        )}

    </div>
   )
}

export default CustomRecipeForm;