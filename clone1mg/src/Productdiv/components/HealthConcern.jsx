import React from "react";
import shopByHealthConcerns  from "../../database/healthconcern";
import Avatar from "./Avatar";

import "./style.css";

const Healthconcern = () => {
    return (
      <>
        <div>
         
          <div class="cat-title">
            <span className="style__heading___pc8n7">Shop by Health Concerns</span>
            <span>
              <button>SEE ALL</button>
            </span>
          </div>
          <div className="bigcontainer">
          {shopByHealthConcerns .map((elem) => {
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
  
  export default Healthconcern;
  