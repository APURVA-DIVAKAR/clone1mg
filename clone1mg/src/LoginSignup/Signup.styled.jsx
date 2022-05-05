import styled from "styled-components"

export const Box =styled.div `
  display : ${(props) =>props.block ? 'block' : 'none'};
  position: fixed;
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto;
  background-color: #333; 
  background: rgba(54, 25, 25, .5);
`;

export const Blok =styled.div `
background-color: #fefefe;
margin: 15% auto; /* 15% from the top and centered */
padding: 20px;
padding-bottom:40px;
border: 1px solid #888;
width: 75%; /* Could be more or less, depending on screen size */
display: flex;
flex-direction: column;
`;