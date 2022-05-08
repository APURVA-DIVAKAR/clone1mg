import React, { useState, useEffect } from "react";
import styles from "./Delivery.module.css";

const ProductsDelivery = () => {
  const [data, setData] = useState([]);
  
  const getData = async () => {
    let res = await fetch(`http://localhost:8080/Cart`);
    let data1 = await res.json();
    //  console.log(data1)
    setData(...data, data1);
  };
  const [address, setAddress] = useState([]);
  const { id } = useContext(AddressContext);
  const getAddress = async () => {
    let res = await fetch(`http://localhost:8080/address?id=${id}`);
    let address1 = await res.json();
    //  console.log(address1)
    setAddress(...address, address1);
  };
  
  useEffect(() => {
    getData();
    getAddress();
  }, [id]);
  // console.log(address[0])
  // console.log(address[0])
  return (
    <div>
      return (
      <div className={styles.container}>
        <div>
          <h2>Choose Delivery Option(s)</h2>
          <div>
            shipment 1 out of 1
            <div className={styles.detail}>
              {data.map((el) => {
                return (
                  <div className={styles.card} key={el.id}>
                    <div>
                      <img src={el.image} alt="" />
                    </div>
                    <div>
                      <h6>{el.name}</h6>
                      <p>{el.bottle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.box}>
            <p>Choose a delivery speed</p>
            <div className={styles.inputflex}>
              <input type="radio" name="date" value="date" />
              <label for="date">Between 14-15 May</label>
            </div>
          </div>
          <p>
            *1mg Cash will be credited 7 days after your complete order is
            delivered in case of Products and in case of Lab Services 1mg Cash
            will be credited within 24 hours from the time of generation of test
            report. 1mg Cash will not be credited in case a return request is
            initiated for the order.
          </p>
          <p>
            **Coupon Discount value may change if the total order value changes.
          </p>
          <p>
            ***Items in your cart will always reflect the most recent price as
            compared to the prices in their product detail page.
          </p>
        </div>
        <div className={styles.box2}>
          <div className={styles.header}>
            <h2>Select Address</h2>
            <button>CHANGE</button>
          </div>
          <div className={styles.address}>
          {address.map((el)=>{
             return(
              <div>
              <h6>{el.address_place}</h6>
              <p>{el.name}</p>
              <p>
                {el.mobile},{el.buliding},{el.locality}
              </p>
              <p>
                {el.city},{el.state}-{el.pincode}
              </p>
            </div>
             )
           })}
          </div>
          <button>CONTINUE</button>
        </div>
      </div>
      )
    </div>
  );
};

export default ProductsDelivery;
