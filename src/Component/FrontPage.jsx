import React, { useState } from 'react'
import RecipeCard from './RecipeCard';

const FrontPage = () => {

    const [search, setSearch] = useState("");
    const [Mymeal, setMeal] = useState([]);
    const searchMeal = (event)=> {
        if(event.key === 'Enter'){
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res=>res.json())
            .then(data=>
            //    console.log(data)
              setMeal(data.meals)
            )
        }
    }
    return (
        <>
            <div className="header">
                <h1>Search Your Food Recipe</h1>
                <h4>"A Taste for Every Palate: Explore a World of Diverse Recipes."</h4>
            </div>
            <div className="search-container">
                <input type="search" className="search-input" placeholder='Enter food name' onChange={(e)=>setSearch(e.target.value)} onKeyPress={searchMeal}/>
            </div>

            <div className="container">
                {/* recipe cards will be rendered here */}
                {
                    (Mymeal == null)? <p>Not Found anything</p>: Mymeal.map((res) => {
                        return (  
                        <RecipeCard data = {res} key={res.idMeal}/>  
                        // console.log(res)
                        )
                    })
                    
                }
                
            </div>
            <div className="footer">
                &copy; 2021 - All rights reserved by Team Keshav
            </div>
        </>
    )
}

export default FrontPage;
