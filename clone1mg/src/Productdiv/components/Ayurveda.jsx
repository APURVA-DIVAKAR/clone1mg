import React from "react";
import aayurved  from "../database/ayurved";
import Avatar from "./Avatar";

import "./style.css";

const Ayurved = () => {
    return (
      <>
        <div>
         
          <div class="cat-title">
            <span className="style__heading___pc8n7">Ayurveda</span>
            <span>
              <button>SEE ALL</button>
            </span>
          </div>
          <div className="bigcontainer">
          {aayurved .map((elem) => {
            return (
              <div className="smallcontainer">
            <Avatar fecture={elem} />
            </div>
            )
          })}
          </div>
        </div>
      </>
    );
  };
  
  export default Ayurved;