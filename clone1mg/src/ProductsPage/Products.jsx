import productsFeatured from "../database/ProductsFeat"
import React from 'react'
import Cards from "./Cards"


const Products = () => {
    
    
  return (
    <div>
       <div>
           <select>
               <option>By low to high price</option>
               <option>By High to low price</option>
               <option>by rating</option>
               <option>by review</option>
           </select>
        {productsFeatured.map((el,index)=>{
           return(
            <div className="cards">
            <Cards key={index} value={el} />
            </div> 
           )
        })}   
       
        </div> 
    </div>
  )
}

export default Products