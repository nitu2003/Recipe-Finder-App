import React from 'react';

const Favorites =({favorites}) =>{
    return(
        <div className='favorites'>
            <h2>Favorite Recipe</h2>
            {favorites.length>0?(
                favorites.map((recipe,index)=>(
                    <div key={index} className='favorote-recipe' >
                        <h3>{recipe.label}</h3>
                        <img src='https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg' alt='Burger'/>

                    </div>
                ))
            )  :(
                <p>No favorite recipe yet!</p>
            )}

        </div>
    );
};

export default Favorites