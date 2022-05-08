import React, { useContext, useState } from "react";
import { AuthContext } from "../../Redux/Login_Auth";
import { Otp_container } from "../Styles/Otp_styled";

export const Otp = () => {
  const { Otpvisible, setOtpVisible } = useContext(AuthContext);

  return (
    <Otp_container disabled={Otpvisible}>
      <div id="container">
        <form id="otpform">
          <h3>Mobile phone verification</h3>
          <div>
            <p class="text">Enter the code we just send on your mobile phone</p>
            <p class="num_resend">+91 ******833</p>
          </div>
          <div id="otpcontiner">
            <input
              type="text"
              id="otp1"
              maxlength="1"
              oninput="this.value=this.value.replace(/[^0-9]/g,'');"
            />
            <input
              type="text"
              id="otp2"
              maxlength="1"
              oninput="this.value=this.value.replace(/[^0-9]/g,'');"
            />
            <input
              type="text"
              id="otp3"
              maxlength="1"
              oninput="this.value=this.value.replace(/[^0-9]/g,'');"
            />
            <input
              type="text"
              id="otp4"
              maxlength="1"
              oninput="this.value=this.value.replace(/[^0-9]/g,'');"
            />
          </div>
          <input id="btn" type="submit" value="Proceed" />
          <div>
            <p class="text">Don't receive the code?</p>
            <p class="num_resend">Resend</p>
          </div>
        </form>
      </div>
    </Otp_container>
  );
};
