import React from 'react' ;

const RecipeCard =({title,calories,image,ingredients,addFavorite})=>{
    retrun(
        <div className='recipe-card'>
            <h2>{title}</h2>
            <img src='https://media.istockphoto.com/id/511622035/photo/heallthy-organic-fruit-salad.jpg?s=612x612&w=is&k=20&c=NqctzCs3izS2DunvNJitI8Z4tGQqtEv2M3tg-9SbO6g=' alt='Delicious Fruit Salad' />
            <p><storng>Calories</storng>{calories.toFixed(0)}</p>
            <h3>Ingredients</h3>
            <ul>
                {ingredients.map((ingredient,index)=>(
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <button onClick={addFavorite}>Add to Favorites</button>

        </div>
    )
}

export default RecipeCard;