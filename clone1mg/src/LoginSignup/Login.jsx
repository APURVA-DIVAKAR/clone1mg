// import React from 'react'
// // import { Link } from 'react-router-dom'
// // import 'react-slideshow-image/dist/styles.css'
// // import { Fade } from "react-slideshow-image";
// // import "react-slideshow-image/dist/styles.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination, Autoplay } from "swiper";
// import { Pagination, Autoplay } from "swiper";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverHeader,
//   PopoverBody,
//   PopoverFooter,
//   PopoverArrow,
//   PopoverCloseButton,
//   PopoverAnchor,
// } from '@chakra-ui/react'
// const Login = () => {
   
//   return (
//     <Popover style={{width:"100%"}}>
//     <PopoverTrigger>
//       <button>Sign Up</button>
//     </PopoverTrigger>
//     <PopoverContent>
//       <PopoverArrow />
//       <PopoverCloseButton />
//       <PopoverHeader>Signup</PopoverHeader>
//       <PopoverBody style={{width:"100%"}}>
//     <div style={{display: 'flex', }} >
     
//       <div style={{width: '30%',margin:"auto" }}>
//           <Swiper
//             pagination={true}
//             modules={[Pagination, Autoplay]}
//             autoplay={{ delay: 5000 }}
//             className="mySwiper"
//           >
//             <SwiperSlide>
//               <img
//                 src="https://www.1mg.com/images/login-Login/Health-Related-Queries.png"
//                 alt=""
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src="https://www.1mg.com/images/login-Login/Know-Your-Medicines.png"
//                 alt=""
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src="https://www.1mg.com/images/login-Login/Lab-Tests-at-Home.png"
//                 alt=""
//               />
//             </SwiperSlide>
//             <SwiperSlide>
//               <img
//                 src="https://www.1mg.com/images/login-Login/Your-Go-To-Health-App.png"
//                 alt=""
//               />
//             </SwiperSlide>
//             <p>Make Healthcare Simpler</p>
//              <p>Get medicine information, order medicines, book lab tests and consult doctors online from the comfort of your home.</p>
//             </Swiper>
//     </div>        
//      <div>
//             <h1>Login</h1>
//             <p>Get access to your orders, lab tests & doctor consultations</p>
//             <br/>
//             <input type="text" placeholder="Enter Mobile Number/email" />
//             <br/>
//             <input type="checkbox"/><span>Are you a healthcare professional?</span>
//             <br/>
//             <button type="submit">Continue</button>
//             <p>Have an account?<b style={{"color":"pink"}}>Login</b></p>
//             <p>For corporate Sign up,<b style={{"color":"pink"}}>Click Here</b></p>
//             <p>By signing up, you agree to our</p>
//              <p>Terms and Conditions & Privacy Policy</p>
//              <b style={{"color":"pink"}}>Need Help?Get in Touch</b>
             
//         </div>
//     </div>
//     </PopoverBody>
//     </PopoverContent>
//   </Popover>
//   )
// }

// export default Login