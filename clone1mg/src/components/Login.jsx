import React from 'react'

const PopupLogin = (props) => {
  return (
    <div className="popup-login">
       <div className="popup-inner">
           <button className="close-btn">Submit</button>
           {props.children}
       </div>       
    </div>
  )
}

export default PopupLogin