import React,{ useContext } from 'react'
// import { Link } from 'react-router-dom'
// import 'react-slideshow-image/dist/styles.css'
// import { Fade } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import {Box,Blok} from "./Login.styled"
import { LoginContext } from './LoginProvider';


const Login = () => {
    const {Clicked,setClicked,toggle} = useContext(LoginContext)
  return (
   
   <>
   <button
     onClick={toggle}
   >Login</button>
   <Box block={Clicked}>
       <Blok>
       <div style={{display: 'flex', }} >
     
     <div style={{width: '30%',margin:"auto" }}>
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
             </SwiperSlide>g
           <p style={{textAlign: 'justifiy'}}>Make Healthcare Simpler</p>
            <p  style={{textAlign: 'justifiy',paddingBottom:"10px"}}>Get medicine information, order medicines, book lab tests and consult doctors online from the comfort of your home.</p>
           </Swiper>
   </div>        
    <div style={{textAlign: 'center'}}>
           <h1>Login</h1>
           <p>Get access to your orders, lab tests & doctor consultations</p>
           <br/>
           <input type="text" placeholder="Enter Mobile Number/email" />
           <br/>
           <input type="checkbox"/><span>Are you a healthcare professional?</span>
           <br/>
           <button type="submit" onClick={toggle}>Continue</button>
           <p>Have an account?<b style={{"color":"pink"}}>Login</b></p>
           <p>For corporate Sign up,<b style={{"color":"pink"}}>Click Here</b></p>
           <p>By signing up, you agree to our</p>
            <p>Terms and Conditions & Privacy Policy</p>
            <b style={{"color":"pink"}}>Need Help?Get in Touch</b>
            
       </div>
   </div>
   </Blok>
   </Box> 
   
   </>
  )
}

export default Login