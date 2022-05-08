import React, { useState, useEffect, useContext } from "react";
import { AddressContext } from "./AddressApi";
import styles from "./Delivery.module.css";

const Delivery = () => {
  const [address, setAddress] = useState([]);
  const { id } = useContext(AddressContext);
  const getAddress = async () => {
    let res = await fetch(`http://localhost:8080/address?id=${id}`);
    let address1 = await res.json();
    //  console.log(address1)
    setAddress(...address, address1);
  };
  // console.log(address)
  // console.log(id)
  useEffect(() => {
    getAddress();
  
  }, []);
 

  return (
    <div className={styles.container}>
      <div>
        <h2>Choose Delivery Option(s)</h2>
        <div className={styles.box}>
          <p>Choose a delivery speed</p>
          <div className={styles.inputflex}>
            <input type="radio" name="date" value="date" />
            <label htmlFor="date">Between 14-15 May</label>
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.header}>
            <h2>Select Address</h2>
            <button>CHANGE</button>
          </div>
          <div className={styles.address}>
            <div>
              <h6>{address.address_place}</h6>
              <p>{address.name}</p>
              <p>
                {address.mobile},{address.buliding},{address.locality}
              </p>
              <p>
                {address.city},{address.state}-{address.pincode}
              </p>
            </div>
          </div>
          <button>CONTINUE</button>
        </div>
        <div className={styles.address}></div>
        <button>CONTINUE</button>
      </div>
    </div>
  );
};

export default Delivery;
