import React from 'react'
// import { Link } from 'react-router-dom'
import 'react-slideshow-image/dist/styles.css'
// import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Signup = () => {
    // console.log(fadeImages[0].url)
  return (
    <div style={{display: 'flex', }}>
        
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