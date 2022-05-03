import React from 'react'
import { Link } from 'react-router-dom'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {
    Add_div} from "../Styleing/Advertisement_style";
  
  import { Swiper, SwiperSlide } from "swiper/react";
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/pagination";
  import { Pagination, Autoplay } from "swiper";

const Signup = () => {
    // console.log(fadeImages[0].url)
  return (
    <div style={{display: 'flex', }}>
         <Add_div>
        <div>
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 5000 }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://www.1mg.com/images/login-signup/Know-Your-Medicines.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.1mg.com/images/login-signup/Home-Delivery-of-Medicines.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.1mg.com/images/login-signup/Health-Related-Queries.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://www.1mg.com/images/login-signup/Your-Go-To-Health-App.png"
                alt=""
              />
            </SwiperSlide>
            </Swiper>
            </div>
            </Add_div>
        <div>
            <h1>Sign Up</h1>
            <p>Please enter your Mobile number to receive One Time Password (OTP)</p>
            <br/>
            <input type="number" placeholder="Enter Mobile Number" />
            <br/>
            <input type="checkbox"/><span>Are you a healthcare professional?</span>
            <br/>
            <button type="submit">Continue</button>
            <p>Have an account?<b style={{"color":"pink"}}>Login</b></p>
            <p>For corporate Sign up,<b style={{"color":"pink"}}>Click Here</b></p>
            <p>By signing up, you agree to our</p>
             <p>Terms and Conditions & Privacy Policy</p>
        </div>
    </div>
  )
}

export default Signup