import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import styles from './Cards.module.css'
const Cards = ({value}) => {
    console.log(value)
    const {name,desc,image_url,mrp,off,price,review,star} =  value
  return (
    <div className={styles.box} >
        <div className={styles.imge}>
          <img src={image_url} alt={name} />
        </div>
        <div className={styles.box2} >
            <h5>{name}</h5>
            <p>{desc}</p>
            <div className={styles.flexGrenn}>
              <button>{star}<AiOutlineStar style={{color: 'white'}}/> </button>
              <p>{review} ratings</p>
            </div>
            <div className={styles.flexPrice}>
                <p>MRP</p>
                <s> ₹{mrp}</s>
                <p style={{color:"green"}}>{off}% OFF</p>
            </div>
            <div className={styles.flexLast}>
                <h4>₹{price}</h4>
                <button><h4>ADD</h4></button>
            </div>
        </div>
    </div>
  )
}

export default Cards