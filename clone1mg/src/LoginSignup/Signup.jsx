import React from 'react'
// import { Link } from 'react-router-dom'
// import 'react-slideshow-image/dist/styles.css'
// import { Fade } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import {Box,Blok} from "./Signup.styled"
import { SignupContext } from './SignupProvider';
import {useContext} from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import styles from './signup.module.css'

const Signup = () => {
    const {Clicked,setClicked,toggle} = useContext(SignupContext)
    console.log (Clicked,toggle);
  return (
   <>
      <button
    onClick={toggle}
   >SignUp</button> 
 <Box  block={Clicked}>
    <AiFillCloseCircle style={{width: '5%', height: '5%',marginLeft:'95%' }} onClick={toggle} />
    <Blok>
    <div style={{display: 'flex', justifyContent:'space-around', width:"75%" ,height:"70%", margin:"auto"}} >
     
     <div style={{width: '40%',margin:"auto"}}>
         <Swiper
           pagination={true}
           modules={[Pagination, Autoplay]}
           autoplay={{ delay: 5000 }}
           className="mySwiper"
         >
           <SwiperSlide>
             <img style={{marginLeft: '30%'}}
               src="https://www.1mg.com/images/login-signup/Health-Related-Queries.png"
               alt=""
             />
           </SwiperSlide>
           <SwiperSlide>
             <img style={{marginLeft: '30%'}}
               src="https://www.1mg.com/images/login-signup/Know-Your-Medicines.png"
               alt=""
             />
           </SwiperSlide>
           <SwiperSlide>
             <img style={{marginLeft: '30%'}}
               src="https://www.1mg.com/images/login-signup/Lab-Tests-at-Home.png"
               alt=""
             />
           </SwiperSlide>
           <SwiperSlide>
             <img style={{marginLeft: '30%'}}
               src="https://www.1mg.com/images/login-signup/Your-Go-To-Health-App.png"
               alt=""
             />
           </SwiperSlide>
           <p style={{textAlign: 'justifiy'}}>Make Healthcare Simpler</p>
            <p style={{textAlign: 'justifiy',paddingBottom:"10px"}} >Get medicine information, order medicines, book lab tests and consult doctors online from the comfort of your home.</p>
           </Swiper>
   </div>        
    <div style={{textAlign: 'center'}} className={styles.form}>
           <h1>Sign Up</h1>
           <p>Please enter your Mobile number to receive One Time Password (OTP)</p>
           <br/>
           <input type="number" placeholder="Enter Mobile Number" />
           <br/>
           <input type="checkbox"/><span>Are you a healthcare professional?</span>
           <br/>
           <button type="submit" onClick={toggle}> Continue</button>
           <p>Have an account?<b style={{"color":"pink"}}>Login</b></p>
           <p>For corporate Sign up,<a style={{"color":"pink"}}>Click Here</a></p>
           <p>By signing up, you agree to our</p>
            <a>Terms and Conditions & Privacy Policy</a>
            <a style={{"color":"pink"}}>Need Help?Get in Touch</a>
       </div>
   </div>
   </Blok>
</Box>
      
   </>
  )
}

export default Signup