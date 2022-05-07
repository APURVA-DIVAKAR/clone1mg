import React from "react";
import styles from "./Delivery.module.css";

const Delivery = () => {
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
        <div className={styles.address}></div>
        <button>CONTINUE</button>
      </div>
    </div>
  );
};

export default Delivery;
