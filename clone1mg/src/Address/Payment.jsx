import React from 'react'
import { useSelector } from "react-redux"
import styles from "./payment.module.css"

const Payment = () => {
    const [Mtotal, setMtotal] = React.useState(0);
  const [Dtotal, setDtotal] = React.useState(0);
  const [Ptotal, setPtotal] = React.useState(0);
  const [change, setChange] = React.useState(false);
  let m = 0;
  let p = 0;
  let d = 0;
  const handleSubmit=()=>{
     
  }

  const { cartData } = useSelector((state) => {
    return state;
  });

  React.useEffect(() => {
    
    m = 0;
    p = 0;
    d = 0;
    cartData.map((el) => {
      console.log(el.qty);
      m += el.qty * el.mrp;
      p += el.qty * el.price;
      d += el.qty * Math.abs(el.mrp - el.price);
      setMtotal(m);
      setPtotal(p);
      setDtotal(d);
    });
  }, [change, cartData]);
  
  return (
    <div>
        <div className="dis_flex">
            <div>
                <div>
                    <img src="" alt="" />
                    <h2>WALLETS</h2>
                </div>
                <div>
                    <img src="" alt="" />
                    <h2>UPI</h2>
                </div>
                <div>
                    <img src="" alt="" />
                    <h2>CARDS</h2>
                </div>
                <div>
                    <img src="" alt="" />
                    <h2>NET BANKING</h2>
                </div>
                <div>
                    <img src="" alt="" />
                    <h2>PAY ON DELIVERY</h2>
                </div>
                <div>
                    <img src="" alt="" />
                    <h2>PAY LATER</h2>
                </div>
            </div>
            <div>
                 {/* ComponentS */}
            </div>
            <div>
            <div>
                  <div className={styles.cartSummary}>
                    <span style={{fontSize: "24px",paddingLeft:"-5px"}}>Item Total(MRP)</span>
                    <span style={{fontSize: "24px"}}>₹{Mtotal}</span>
                  </div>
                  <div className={styles.cartSummary}>
                    <span>Price Discount</span>
                    <span id="cartSummaryDiscount">-₹{Dtotal.toFixed(2)}</span>
                  </div>
                  <hr />
                  <div className={styles.cartSummary}>
                    <span>Shipping Fee</span>
                    <span id="cartSummaryShippingFee">
                      As per delivery address
                    </span>
                  </div>
                  <hr />
                  <div className={styles.cartSummary} id="fontbold">
                    <span>To be paid</span>
                    <span id="cartSummaryToBePaid">₹{Ptotal.toFixed(2)}</span>
                  </div>
                  <div className={styles.cartTotalSavings}>
                    <span id="totalSavingFont">Total Savings</span>
                    <span id="totalSavingGreen">₹{Dtotal.toFixed(2)}</span>
                  </div>
                </div>
                <button>Place Order</button>
            </div>
        </div>
    </div>
  )
}

export default Payment