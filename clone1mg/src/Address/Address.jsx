import React from 'react'
import styles from './Address.module.css'

const Address = () => {
  return (
    <div className={styles.address}>

        <form>
            <h2>Add New Address</h2>
            <div className={styles.form}>
                <input type="text" name="buliding" placeholder="Flat Number,Building Name,Street/Locality" />
                <input type="text" name="landmark" placeholder="Landmark(optional)"/>
                <input type="number" name="pincode" placeholder="Pincode"/>
                <input type="text" name="locality" placeholder="Locality"/>
                <input type="text" name="city" placeholder="City"/>
                <input type="text" name="state" placeholder="State"/>
                <input type="text" name="name" placeholder="Customer Name"/>
                <input type="number" name="mobile" placeholder="10 Digit Mobile Number"/>
               <div className={styles.flexip}>
                  
                    <input type="radio" name="address_place" value="Home" />
                    <label for="Home">Home</label>
                    <input type="radio" name="address_place" value="Office" />
                    <label for="Office">Office</label>
                    <input type="radio" name="address_place" value="Other" />
                    <label for="Other">Other</label>
               </div>
               <div className={styles.flexbtn}>
                   <button type="submit">CANCEL</button>
                   <button type="submit">SAVE</button>
               </div>

            </div>
        </form>
        <div className={styles.flexp}>
            <div>
                <p>Tata 1mg is a technology platform to facilitate transaction of business. The products and services are offered for sale by the sellers. The user authorizes the delivery personel to be his agent for delivery of the goods. For details read terms and conditions.</p>
            </div>
            <div >
                <p>*NeuCoins will be credited 7 days after your complete order is delivered in case of Products and in case of Lab Services NeuCoins will be credited within 24 hours from the time of generation of test report. NeuCoins will not be credited in case a return request is initiated for the order. NeuCoins are rounded to the nearest integer and the value of NeuCoins earned may change if total order value changes.</p>

                <p>**Coupon Discount value may change if the total order value changes.</p>

                <p>***Items in your cart will always reflect the most recent price as compared to the prices in their product detail page.</p>
            </div>
        </div>
    </div>
  )
}

export default Address