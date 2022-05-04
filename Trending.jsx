import React,{useState} from "react";
// import data from '../data.json'
import trending from '../trending.json'
// import CartButton from './CartButton'
import "./GDetails.css"
const Trending = ()=>{
// console.log(data)
const [count, setCount] = useState(0);

    // const counter =()=>{
    //     setCount(count+1);
    // }
    return(
        <div>
        {/* <h1 className="mini">Groceries</h1> */}
        <div className="sunny">
        <p className="topdeal">Trending now</p>
        </div>
        <div className="maincontainer">
        <div className="container">
            
            {/* map through the data and display the cards */}
            {trending.map(item => (
                <div className="card" key={item.id}>
                   
                    <div className="card-image">
                        <img src={item.imgURL} alt={item.name} />
                    </div>
                       <p>{item.title}</p> 
                       <p1>{item.info}</p1>
                       <br/>
                       <p2>{item.rating}</p2>                             
                    <div className="price">
                    <h4>{item.sellingPrice}</h4>
                    <p9>{item.mrp}</p9>  
                    <p4>{item.discount}</p4>                                           
                    </div>  
                   
                        </div>   
                
            ))}
        </div>
        </div>
        
        </div>
    )
}
export default Trending