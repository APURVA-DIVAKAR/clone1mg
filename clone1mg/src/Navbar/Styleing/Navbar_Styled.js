import styled from "styled-components";

export const Nav = styled.div`
  min-width: 1241px;

  > * {
    font-family: "Clear Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .navbar {
    display: flex;
    width: 100%;
    height: fit-content;
    // margin-top: -8px;
    justify-content: space-between;
    border-bottom: 1px solid #f1f4f6;
    // padding: 10px;
    background: #ffffff;
  }

  .navbarlogo_tabs {
    display: flex;
    align-items: center;
    /* border: red solid; */
    height: fit-content;
  }

  #logo {
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    /* border: red solid; */
  }

  .logo_img {
    height: 35px;
  }

  #tabs {
    display: flex;
    gap: 15px;
    color: #212121;
    box-sizing: border-box;
    padding: 13px 14px 14px;
    box-sizing: border-box;
  }

  #tabs > div {
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
  }

  #tabs > div:hover {
    color: #ff6f61;
  }

  .reddiv {
    height: 16px;
    box-sizing: border-box;
    display: flex;
    background-color: #ff6f61;
    color: white;
    font-size: 11px;
    align-items: center;
    padding: 0 3px;
    border-radius: 2px;
  }

  #loginSignup {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #212121;
    font-size: 14px;
    padding-right: 5px;
    text-align: right;
    gap: 25px;
  }

  #loginSignup > * {
    cursor: pointer;
  }

  .cart_icon {
    height: 24px;
  }

  .cart_svg {
    background: url(https://res.cloudinary.com/du8msdgbj/image/upload/v1570101941/cart-icon-rebrand_vp4k0f.svg)
      no-repeat;
    width: 23px;
    height: 23px;
    background-position: 50%;
  }

  .count {
    position: relative;
    font-size: 14px;
    background: #ff6f61;
    color: #fff;
    width: 20px;
    height: 18px;
    line-height: 18px;
    border-radius: 5px;
    box-shadow: 0 0 1px #333;
    right: -19px;
    top: -30px;
    text-align: center;
  }

  .logandsign {
    text-decoration: none;
    color: #212121;
    font-size: 13px;
  }

  .navbar1 {
    margin: auto;
    height: fit-content;
    display: flex;
    box-sizing: border-box;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #f1f4f6;
    background: #ffffff;
  }

  .navbar_inner_div {
    display: flex;
    justify-content: center;
    background-color: #fff;
    gap: 2px;
    /* border: red solid; */
  }

  .navbar_2nd_part {
    display: flex;
    align-items: center;
    /* border: red solid; */
  }

  .spark_img {
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
  }

  .upload_btn {
    /* border: red solid; */
    padding: 5px 10px;
    border-radius: 4px;
    background-color: #ff6f61;
    padding: 10px;
    margin-left: 5px;
    text-decoration: none;
    width: 140px;
    text-align: center;
  }

  .upload_anc {
    text-decoration: none;
    color: #ffffff;
  }

  .navbar_discount {
    /* border: rebeccapurple solid; */
    font-size: 14px;
  }

  .location_bar_innerdiv {
    display: flex;
    align-items: center;
  }

  .location_bar_innerdiv > div {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    background-color: #f1f4f6;
    padding: 0 10px;
    /* border: red solid; */
  }

  .location_icon {
    color: #666666;
  }

  .search_bar {
    padding: 6px 13px 6px 1px;
    width: 75%;
  }

  .search_bar_innerdiv {
    width: 500px;
    position: relative;
    background-color: #f1f4f6;
    /* border: #3e3e3e solid; */
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .search_icon {
    width: 27px;
    height: 33px;
    cursor: pointer;
    display: flex;
    align-items: center;
    /* border: red solid; */
  }

  .searchbarinfo {
    width: 100%;
    font-size: 14px;
    line-height: 21px;
    padding: 6px 30px 7px 0;
    border: none;
    outline: 0;
    bottom: 19px;
    color: #3e3e3e;
    text-indent: 12px;
    height: auto;
    border-radius: 0 3px 3px 0;
    background-color: #f1f4f6;
    display: inline;
  }

  .dropdown_div {
    display: flex;
    justify-content: center;
    font-size: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #dedede;
    background: #ffffff;
  }

  .dropdown_icon {
    margin-left: 5px;
    font-size: 10px;
  }

  ul {
    box-sizing: border-box;
    justify-content: center;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    list-style: none;
    background: #ffffff;
    padding: 0px;
    line-height: 1.42857143;
    margin: 0;
    font-family: "Clear Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  ul li {
    display: inline-block;
    position: relative;
    text-align: left;
  }
  ul li a {
    display: block;
    padding: 5px 15px;
    color: #333;
    text-decoration: none;
  }

  ul li a:hover {
    color: #ff6f61 !important;
  }

  ul li ul.dropdown {
    min-width: 100%; /* Set width of the dropdown */
    background: #ffffff;
    display: none;
    position: absolute;
    z-index: 999;
    left: 0;
    padding: 0;
    /* border: red solid; */
  }
  ul li:hover ul.dropdown {
    display: block; /* Display the dropdown */
  }
  ul li ul.dropdown li {
    display: block;
  }

  .container1 {
    background-color: #ffffff;
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    padding: 10px 0;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    /* border: green solid; */
  }

  .container2 {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    position: absolute;
    right: 0;
    background-color: #ffffff;
    padding: 10px 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }

  .container1 > div {
    width: 213px;
    font-size: 12px;
    text-align: center;
    color: #666;
    height: fit-content;
    border-left: 1px #dedede solid;
    line-height: 16px;
    /* border: red solid; */
  }
  .container2 > div {
    width: 213px;
    font-size: 12px;
    height: fit-content;
    border-left: 1px #dedede solid;
    line-height: 16px;
    /* border: green solid; */
  }

  .container1 a {
    font-size: 11.4px;
    color: #333;
    font-weight: 550;
  }

  .container2 a {
    font-size: 12px;
    color: #333;
    font-weight: 550;
  }

  .notborder {
    border: 0px solid !important;
  }

  .innerli > a {
    /* border: red solid; */
    font-size: 11px !important;
    font-weight: 400 !important;
    color: #757575 !important;
  }
`;
