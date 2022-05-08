import { TextField } from "@mui/material";
import React from "react";
import { Otp_container } from "./Otp_styled";

export const Otp_form = ({ setting }) => {
  return (
    <Otp_container>
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
            <span className="LS_heading">Verify OTP</span>
          </div>

          <div className="otp_text">
            <span className="otp_text_span">
              Provide OTP sent to {Number}
              <span>Edit</span>
            </span>
          </div>

          <div>
            <TextField
              id="standard-basic"
              label="One Time Password"
              variant="standard"
            />
          </div>

          <div>
            <span>Get OTP on SMS</span>|<span>Get OTP on Call</span>
          </div>

          <div>
            <div type="submit">
              <span>Done</span>
            </div>

            <div>
              <div>
                <span>Need Help? Get In Touch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Otp_container>
  );
};
