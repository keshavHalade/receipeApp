import React from 'react'

const RecipeCard =(getData)=> {

    return (
        <>
           <div className="card">
            <div className="info">
            <img src={getData.data.strMealThumb} alt=""/>

                <h2>{getData.data.strMeal}</h2>
                <p>{getData.data.strArea} food</p>
            </div>

            <div className="recipe">
                <h2>Recipe</h2>
                <p>{getData.data.strInstructions}</p>
                <div>
                <img src="https://www.themealdb.com/images/media/meals/va668f1683209318.jpg " alt="food img" /> 
                </div>
                <a href={getData.data.strSource}>Watch video</a>
            </div>
           </div>
        </>
    )
}

export default RecipeCard;