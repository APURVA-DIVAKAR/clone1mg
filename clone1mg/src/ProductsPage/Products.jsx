import productsFeatured from "../database/ProductsFeat"
import React from 'react'
import Cards from "./Cards"
import styles from "./Products.module.css"


const Products = () => {
    console.log(productsFeatured);
    
  return (
    <div>
       <div>
           <select>
               <option>By low to high price</option>
               <option>By High to low price</option>
               <option>by rating</option>
               <option>by review</option>
           </select>
         <div className={styles.container}>
            {productsFeatured.map((el,index)=>{
            return(
                <div className="cards">
                <Cards key={index} value={el} />
                </div> 
            )
            })}   
         </div>

       
        </div> 
    </div>
  )
}

export default Products