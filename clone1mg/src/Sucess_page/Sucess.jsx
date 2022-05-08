import React from 'react'
// import "./Sucess.css"
import styles from "./Sucess.module.css"
// import {Link} from "react-router-dom;"


const Sucess = () => {
  return (
    < div className={styles.container1}>
    <div>
        <img src='https://www.clipartmax.com/png/full/179-1795386_patient-success-success-icon-png.png' />
        <h1>Thank you for your purchase!</h1>
        <br></br>
        <h4>Your order id: <span id="order">{Math.round(Math.random() * 3311000)}</span></h4>
        <br></br>
    </div>
    <div>
    {/* <Link to="/">Continue Shopping</Link> */}
    {/* <button onClick="btn()">Continue Shopping</button> */}
    </div>
 

    <div/>
    </div>
    
  )
}

export default Sucess





// body>
//     <img src="https://www.clipartmax.com/png/full/179-1795386_patient-success-success-icon-png.png" alt="">
//     <h2>Thank you for your purchase!</h2>
//     <p>Your order id: <span id='order'></span></p>

//     <button onclick="btn()">Continue Shopping</button>
// </body>
// <script>
//     document.getElementById("order").innerHTML = Math.round(Math.random() * 3311000);

//     function btn() {
//         location.replace("index.html")
//     }
// </script>