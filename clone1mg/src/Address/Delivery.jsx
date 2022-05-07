import React,{useState,useEffect,useContext} from 'react'
import { AddressContext } from './AddressApi'
import styles from './Delivery.module.css'

const Delivery = () => {
  const[address,setAddress] = useState([])
  const {id} = useContext(AddressContext)
  const getAddress = async() =>{
    let res = await fetch(`http://localhost:8080/address`)
    let data1 = await res.json();
    //  console.log(data1)
    setAddress(...address,data1)
  }
  // console.log(address)
  // console.log(id)
  useEffect(() => {            
    getAddress();
  }, []);
 let data ;
 let data1 = address.filter(element => element.id == id);
data = data1[0];
console.log(data);

  return (
    <div className={styles.container}>
        <div>
            <h2>Choose Delivery Option(s)</h2>
            <div className={styles.box}>
                <p>Choose a delivery speed</p>
               <div className={styles.inputflex}>
                    <input type="radio" name="date" value="date" />
                    <label for="date">Between 14-15 May</label>
               </div>
            </div>
            <p>*1mg Cash will be credited 7 days after your complete order is delivered in case of Products and in case of Lab Services 1mg Cash will be credited within 24 hours from the time of generation of test report. 1mg Cash will not be credited in case a return request is initiated for the order.</p>
            <p>**Coupon Discount value may change if the total order value changes.</p>
            <p>***Items in your cart will always reflect the most recent price as compared to the prices in their product detail page.</p>
        </div>
        <div className={styles.box2}>
             <div className={styles.header}>
             <h2>Select Address</h2>
             <button>CHANGE</button>
             </div>
             <div className={styles.address}>
                <div>
                    <h6>{data.address_place}</h6>
                    <p>{data.name}</p>
                    <p>{data.mobile},{data.buliding},{data.locality}</p>
                    <p>{data.city},{data.state}-{data.pincode}</p>
                 </div>
             </div>
             <button>CONTINUE</button>
            
        </div>
    </div>
  )
}

export default Delivery