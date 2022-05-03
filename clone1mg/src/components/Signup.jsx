import React from 'react'
import { Link } from 'react-router-dom'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const fadeImages = [
    {
      url: 'https://www.1mg.com/images/login-signup/Know-Your-Medicines.png',
      caption: 'Slide 1'
    },
    {
      url: 'https://www.1mg.com/images/login-signup/Home-Delivery-of-Medicines.png',
      caption: 'Slide 2'
    },
    {
      url: 'https://www.1mg.com/images/login-signup/Health-Related-Queries.png',
      caption: 'Slide 3'
    },
    {
        url: 'https://www.1mg.com/images/login-signup/Your-Go-To-Health-App.png',
        caption: 'Slide 3'
      },
  ];
  
const Signup = () => {
    // console.log(fadeImages[0].url)
  return (
    <div style={{display: 'flex', }}>
         <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <img src={fadeImages[0].url} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[1].url} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[2].url} />
        </div>
      </Fade>
    </div>
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