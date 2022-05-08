import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { Form_container } from "./Login.styled";
import { LoginContext } from "./LoginProvider";

export const Login_form = ({ setting }) => {
  const [log, setLog] = useState(false);
  const handle = () => {
    setLog(true);
  };
  return (
    <Form_container>
      <div>
        <div className="style__cross-wrapper">
          <span
            className="style__pointer"
            onClick={() => setting.setvisible(false)}
          >
            ×
          </span>
        </div>

        <div>
          <div>
            <span className="LS_heading">Login</span>
          </div>

          <div className="otp_text">
            <span className="otp_text_span">
              Get access to your orders, lab tests & doctor consultations
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
                label="Enter Email ID or Mobile Number"
                variant="standard"
              />
            )}
          </div>

          <div>
            <div type="submit" onClick={handle}>
              <span>Login</span>
            </div>

            <div>
              <div>
                <span>Have an account?</span>
                <span onClick={() => setting.setShow(false)}>Sign Up</span>
              </div>
              <div>
                <span> For corporate Sign up,</span>
                <span>Click Here</span>
              </div>

              <div>By signing up, you agree to our</div>
              <div>
                <span>Terms and Conditions</span>&<span>Privacy Policy</span>
              </div>

              <div>
                <span>Need Help? Get In Touch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form_container>
  );
};
