// import productsFeatured from "../database/ProductsFeat"
import React,{useState,useEffect} from 'react'
import Cards from "./Cards"
import styles from "./Products.module.css"


const Products = () => {
      const [data, setData] = useState([]);
      const getData = async() =>{
        let res = await fetch(`http://localhost:8080/productsFeatured`)
        let productsFeatured = await res.json();
         console.log(productsFeatured)
        setData(...data,productsFeatured)
      }
      useEffect(() => {
        
        getData();
      }, []);
    
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
            {data.map((el,index)=>{
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