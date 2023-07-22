import React from 'react'
import './style.css';
import MealItems from './MealItems';
import { useState } from 'react';
const Meal = () => {
    const[search,setSearch]=useState("");
    const[Mymeal,setMeal]=useState();
    const searchMeal=(evt)=>{
        if(evt.key==="Enter")
        {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res=>res.json()).then(data=> {setMeal(data.meals);setSearch("")})
        }
    }
  return (
    <div className="main">
                <div className="heading">
                    <h1>Abdullah recipe search</h1>
                    <h4>Search your best food recipe and try to make it!</h4>
                </div>
                <div className="searchBox">
                    <input type="search" className="search-bar" onChange={(e)=>setSearch(e.target.value)} value={search} onKeyPress={searchMeal}/>
                </div>
                <div className="container">
                   {   
                  
                    (Mymeal==null)? <p className="notSearch">Not found</p> : 
                         Mymeal.map((res)=>{
                             return(
                            <MealItems data={res}/>)} 
                     
                    ) 
                   
                   }
                </div>
            </div>
  )
}

export default Meal
