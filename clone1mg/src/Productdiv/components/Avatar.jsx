import React from 'react';

import "./style.css"






function Avatar({fecture}) {
    console.log(fecture)
  return (
  
   <>
    <a className='allin' href={fecture.link}>
    <img src={fecture.image_url} alt="image"/>
     <div> <h4>{fecture.name}</h4></div>
     </a>
     </>
     
  )
}

export default Avatar