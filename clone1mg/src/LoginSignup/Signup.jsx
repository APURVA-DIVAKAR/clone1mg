import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { Box, Blok, Signup_container } from "./Signup.styled";
import { SignupContext } from "./SignupProvider";
import { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import styles from "./signup.module.css";
import { Form_container } from "./Login.styled";
import { TextField } from "@mui/material";

const Signup = ({ setting }) => {
  const [log, setLog] = useState(false);

  const handle = () => {
    setLog(true);
  };

  return (
    <Signup_container>
      <div>
        <div className="style__cross-wrapper">
          <span
            className="style__pointer"
            onClick={(e) => {
              console.log(e);
              setting.setvisible(false);
            }}
          >
            ×
          </span>
        </div>

        <div>
          <div>
            <span>Sign Up</span>
          </div>

          <div>
            <span>
              Please enter your Mobile number to receive One Time Password (OTP)
            </span>
          </div>

          <div>
            {log ? (
              <TextField
                id="standard-basic"
                label="Enter OTP"
                variant="standard"
              />
            ) : (
              <TextField
                id="standard-basic"
                label="Enter Mobile Number"
                variant="standard"
              />
            )}
          </div>

          <div>
            <div>
              <input type="checkbox" />
              <span>Are you a healthcare professional?</span>
            </div>

            <div type="submit" onClick={handle}>
              Continue
            </div>
            <div>
              <span>Have an account?</span>
              <span onClick={() => setting.setIs_Or_S(true)}>Login</span>
            </div>
            <div>
              <span>For corporate Sign up,</span>
              <span>Click Here</span>
            </div>
            <div>By signing up, you agree to our</div>
            <div>
              <span>Terms and Conditions </span>& <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </Signup_container>
  );
};

export default Signup;
