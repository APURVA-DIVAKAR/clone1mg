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
`;
