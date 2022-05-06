import styled from "styled-components";

export const Cart_div = styled.div`
  #container {
    /* border: 1px solid red; */
    background-color: rgb(246, 246, 246);
    font-family: "Clear Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  #header {
    /* border: 1px solid blue; */
    height: 45px;
    margin-bottom: 20px;
    background-color: white;
    display: flex;
  }
  #logo {
    src: url("https://www.1mg.com/images/tata_1mg_logo.svg");
    margin-left: 20px;
    height: 80%;
    cursor: pointer;
  }
  #search {
    display: flex;
    margin-right: 36%;
  }

  .header_search_icon {
    background: url("https://res.cloudinary.com/du8msdgbj/image/sprite/v1539261312/header_icons_v1.3.png")
      no-repeat;
    background-position: 0 -184px;
    width: 17px;
    height: 16px;
    cursor: pointer;
    position: relative;
    top: 30%;
    right: 25px;
  }

  #help {
    font-family: "Clear Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 13px;
  }
  #inputheader {
    width: 600px;
    height: 72%;
    background-color: rgb(241, 244, 246);
    border: none;
    margin-left: 5%;
    margin-top: 5px;
    padding-left: 20px;
    outline: none;
  }
  #body {
    /* border: 1px solid maroon; */
    height: auto;
    width: 75%;
    margin: auto;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
  #bodyLeft {
    /* border: 1px solid orange; */
    width: 56%;
    height: auto;
  }
  #bodyLeft > p,
  .smallbox0 > p {
    font-size: 16px;
    font-family: "Clear Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  #leftPurchaseDetail {
    /* border: 1px solid purple; */
    width: 100%;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    background: #fff;
    display: grid;
    grid-template-rows: 40% 20% 20%;
  }
  #leftPurchaseDetail > div {
    /* border:1px solid red ; */
    margin: 10px;
  }
  #leftPurchaseDetail > div:first-child {
    display: flex;
    justify-content: space-between;
  }
  #leftPurchaseDetail > div:nth-child(2) {
    color: rgb(158, 158, 158);
    font-weight: 700;
    font-size: 10px;
  }
  #leftPurchaseName {
    /* border:1px solid blue; */
    width: 65%;
    height: 100%;
    font-size: 14px;
    font-weight: 700;
    color: rgb(33, 33, 33);
  }
  #leftPurchasePrice {
    /* border: 2px solid green; */
    width: 12%;
    display: grid;
    grid-template-rows: repeat(2, 40%);
  }
  #leftPurchasePrice > div {
    /* border: 1px solid teal; */
    text-align: end;
  }
  #leftPurchasePrice > div:first-child {
    font-size: 12px;
  }
  #leftPruchaseMrp {
    display: inline-block;
    font-size: 10px;
    color: rgb(158, 158, 158);
  }
  #mrpdash {
    text-decoration: line-through;
    font-weight: bolder;
  }
  #quant {
    font-weight: bolder;
  }
  #removeItem {
    display: grid;
    grid-template-columns: 85% 15%;
  }
  #removeItem > div:first-child {
    /* border: 1px solid darkred; */
    display: flex;
    font-size: 12px;
    color: rgb(158, 158, 158);
  }
  #removeItem > div:last-child {
    /* border: 2px solid yellow; */
    display: flex;
    height: 20px;
  }
  #betweenIncDec {
    margin-top: 8px;
    font-size: 12px;
  }
  #inc,
  #dec,
  .remove {
    cursor: pointer;
  }
  .remove {
    margin-right: 1%;
  }

  #bodyRight {
    /* border: 1px solid orange; */
    width: 40%;
    height: 80%;
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
    margin-top: 37px;

    > div:nth-of-type(3) {
      > div {
        padding: 15px 15px;
      }
    }
  }

  #bodyRight > div {
    /* border: 1px solid green; */
    font-family: "Clear Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);

    > hr {
      border: 1px;
      border-top: 1px solid #e0e0e0;
      margin-bottom: 5px;
      margin-top: 0;
      width: 90%;
      display: flex;
    }
  }

  #carepadding {
    border-bottom: 1px solid #c7c7c7;
    padding: 12px 16px 16px 16px;
  }
  #bodyRight > div:first-child {
    line-height: 25px;
  }
  #saveLine {
    color: #1aab2a;
  }
  .member {
    font-size: 12px;
    color: rgb(91, 83, 83);
  }
  #carePlusButton {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }
  #carePlusButton > div:first-child {
    text-align: center;
    width: 46%;
    padding: 3px 20px;
    margin: 5px 20px 0 0;
    background-color: #fff;
    color: #ff6f61;
    font-weight: 700;
    cursor: pointer;
    border-radius: 4px;
    border: 1.5px solid #ff6f61;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #carePlusButton > div:last-child {
    text-align: center;
    width: 46%;
    padding: 3px 20px;
    margin: 5px 0 0;
    background-color: #ff6f61;
    font-weight: 700;
    cursor: pointer;
    margin-left: auto;
    border-radius: 4px;
    color: #fff;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #applyCoupon {
    /* border: 1px solid crimson; */
    padding: 6px 16px;
    display: flex;
    font-size: 14px;
  }
  #applyCoupon > img {
    color: #757575;
  }
  #applyCoupon > div {
    width: 100%;
    font-weight: bold;
    margin-left: 10px;
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
  }

  #couponSymbol {
    margin-top: 5px;
    width: 25px;
    height: 25px;
    text-align: center;
    border-radius: 100%;
    background-color: rgb(226, 226, 226);
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      width: 8px;
    }
  }

  #bodyRight > div:nth-child(2) {
    // padding-left: 16px;
    // padding-right: 10px;
    // padding-top: 12px;
  }

  #checkHealth {
    color: #212121;
    font-family: Clear Sans Medium, sans-serif;
    letter-spacing: 0;
    line-height: 24px;
    background-color: #fffcf8;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #checkHealth > div:nth-of-type(2) > img {
    position: relative;
    margin-top: 0px;
    height: 24px;
    width: 24px;
  }

  #checkbox {
    display: flex;
    padding: 4px 12px;
    font-weight: 500;
    gap: 5px;
  }
  #checkboxsize {
    height: 18px;
    width: 18px;
    accent-color: #db5b4e;
  }

  #checkbox > div > div:first-child {
    font-size: 14px;
    color: rgba(33, 33, 33, 0.87);
    margin-bottom: 10px;
    margin-top: 3px;
  }
  .healthorganfont {
    color: rgb(97, 97, 97);
    font-size: 12px;
    margin-bottom: 5px;
  }
  #paysamplegreen {
    color: rgb(26, 171, 42);
    font-size: 12px;
    line-height: 18px;
  }
  .cartSummary {
    /* border: 1px solid black; */
    height: 12%;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 12px;
    color: rgb(117, 117, 117);
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
  #fontbold {
    font-weight: 700;
    font-size: 14px;
  }
  .summaryline {
    padding-left: 16px;
    padding-right: 16px;
  }
  #cartTotalSavings {
    /* border: 1px solid black; */
    height: 13%;
    background-color: rgb(228, 246, 231);
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 12px;
    display: flex;
    justify-content: space-between;
  }
  #totalSavingFont {
    font-size: 12px;
    color: rgb(117, 117, 117);
  }
  #totalSavingGreen {
    font-weight: 700;
    font-size: 14px;
    color: green;
  }
  #checkoutBox {
    padding: 20px 16px 12px;
  }
  #deliveryLocation {
    /* border: 1px solid rebeccapurple; */
    display: flex;
    justify-content: space-between;
  }
  #deliveryLocation > div:first-child {
    font-size: 14px;
    color: rgb(117, 117, 117);
  }
  #deliveryLocation > div:last-child {
    color: rgb(255, 111, 97);
    font-size: 14px;
    font-weight: bolder;
  }

  #checkoutButton {
    background-color: rgb(255, 111, 97);
    margin-top: 3%;
    height: 50%;
    display: flex;
    cursor: pointer;
    border-radius: 4px;
  }
  #a {
    height: 50px !important;
    text-decoration: none;
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 40%;
  }

  #footer {
    /* border: 1px solid green; */
    height: 135px;
    width: 78%;
    margin: auto;
    display: grid;
    grid-template-columns: 56% 41%;
    justify-content: space-between;
    font-size: 10px;
    line-height: 14px;
  }
  .footertext {
    padding: 0px 10px;
    color: rgb(117, 117, 117);
    margin-bottom: -10px;
  }
  #termnCond {
    text-decoration: none;
    color: rgb(255, 111, 97);
    margin-left: 4px;
  }
  .footerstar {
    font-size: 15px;
  }

  .smallbox1 {
    background-color: #fff;
  }
`;
