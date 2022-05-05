import styled from "styled-components";

export const Product = styled.div``;

export const Upper_div = styled.div`
  margin: 0 0 20px;
  padding: 12px 100px 10px;
  min-height: 450px;
  display: flex;
  gap: 10px;
  font-family: "Clear Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;

  > div {
    width: 33.33333333%;
    // border: red solid;
  }

  .title {
    > h1 {
      font-size: 22px;
      font-weight: 700;
      color: #212121;
    }
    > p {
      color: #ff6f61;
    }
  }

  .highlights {
    div:nth-of-type(1) > {
      margin-bottom: 8px;
      font-size: 16px;
    }

    div > ul {
      word-break: break-word;
      font-size: 14px;
      font-weight: 400;
      padding: 0;
      list-style-type: disc;

      > li {
        margin: 4px 0;
        word-break: break-word;
        font-size: 14px;
        line-height: 25px;
      }
    }
  }

  .price_info {
    padding: 0;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 1px 2px 1px rgb(0 0 0 / 30%);

    > div:nth-of-type(1) {
      display: grid;
      grid-template-columns: 10% 90%;
      justify-content: center;
      align-items: center;
      background-color: #edf9ee;
      padding: 6px 5px;
      border-radius: 10px 10px 0 0;

      > img {
        width: 14px;
        margin: 0 8px 0 10px;
      }

      > p {
        color: #212121;
        font-size: 12px;
        margin: 5px;
      }
    }

    > div:nth-of-type(2) {
      padding: 1em;
      display: grid;
      grid-row-gap: 0.8em;

      .price_form {
        display: grid;
        grid-row-gap: 1em;

        > div:nth-of-type(2) {
          display: flex;
        }
      }

      input[type="radio"] {
        /* remove standard background appearance */
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        /* create custom radiobutton appearance */
        display: inline-block;
        width: 20px;
        height: 20px;
        padding: 3px;
        /* background-color only for content */
        background-clip: content-box;
        border: 2px solid #666;
        border-radius: 50%;
        margin-right: 15px;
      }

      input[type="radio"]:checked {
        background-color: #ff6f61;
        border: 2px solid #ff6f61;
      }

      .real_price {
        font-size: 23px;
        font-weight: 500;
        color: #3b3b3b;
        margin-right: 4px;
      }

      .cut_price {
        color: #666666;
        font-size: 16px;
        margin-right: 4px;
        text-decoration: line-through;
      }

      .discount {
        background-color: #edf9ee;
        color: #1aab2a;
        padding-left: 4px;
        padding-right: 4px;
        font-size: 16px;
      }

      .cashback {
        color: #3b3b3b;
      }

      .care_plan_png {
        margin-left: 4px;
        width: fit-content;
      }
    }
  }

  .choice_of {
    > select {
      width: 123px;
      font-size: 14px;
      border-radius: 4px;
      position: relative;
      border: 1px solid #e2e2e2;
      padding: 0 12px 8px;
      display: inline-block;
      text-align: left;
      outline: none;
      margin-right: 10px;
    }
  }

  .add_to_cart {
    border-radius: 4px;
    background-color: #ff6f61;
    color: #fff;
    font-weight: 700;
    padding: 11px 0px;
    cursor: pointer;
    text-transform: uppercase;
    text-align: center;
    width: 100%;

    > a {
      text-decoration: none;
      color: #fff;
    }
  }

  .offer_container {
    margin-top: 25px;
    border: 1px dashed #979797;
    border-radius: 10px;
    padding-top: 24px;
    position: relative;

    > h2 {
      font-size: 12px;
      text-align: center;
      color: #fff;
      background-color: #1aab2a;
      position: absolute;
      padding: 5px 10px 3px 8px;
      top: 3px;
      left: -3px;
      margin: 0;
      font-weight: 400;

      ::after {
        content: "";
        position: absolute;
        left: 100%;
        width: 0;
        height: 0;
        top: 0;
        border-top: 11px solid transparent;
        border-left: 9px solid #1aab2a;
        border-bottom: 11px solid transparent;
      }
    }

    > div > div {
      display: flex;

      > div:nth-of-type(1) {
        width: 18px;
        margin: 0 0 0 16px;
        display: flex;
        align-content: center;

        > img {
          max-width: 100%;
          vertical-align: middle;
          border: 0;
          margin: auto;
        }
      }

      > div:nth-of-type(2) {
        padding: 8px 14px;
        font-size: 12px;
        color: #212121;
        width: 100%;
      }
    }
  }

  .AdditionalOffers__show_button {
    text-align: right;
    padding: 0 14px 8px 0;
    font-size: 14px;
    font-weight: 700;
    color: #ff6f61;
    cursor: pointer;

    > span > img {
      max-width: 12px;
      vertical-align: middle;
      border: 0;
    }
  }
`;

export const Product_info = styled.div`
  display: flex;
  background-color: #f8f8f8;

  > div {
    display: flex;
    margin: 0 100px;
  }

  > div > div:nth-of-type(1) {
    width: 66.66666667%;
    padding-left: 15px;
    padding-right: 15px;

    > div {
      background-color: #ffffff;
    }

    .Product_Description {
      color: #212121;
      padding: 20px 25px;
      margin-top: 40px;
      word-wrap: break-word;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%);

      .Description_heading {
        font-size: 18px;

        > h2 {
          color: #1a1a1a;
          font-size: 1.15rem;
          font-weight: 400;
        }
      }

      .Description_content {
        font-size: 14px;
        margin-top: 16px;
        text-align: justify;

        > ul {
          padding: 0px;
          > li::marker {
            font-size: 16px !important;
          }
        }
      }
    }

    .Similar_Products {
      background-color: #fff;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%);
      margin: 20px 0;
      padding: 10px 24px;

      > h2 {
        color: #1a1a1a;
        font-size: 1.15rem;
        font-weight: 400;
      }
    }

    .SocialShare {
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%);
      display: flex;
      justify-content: space-between;
      padding: 1rem;

      > h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        color: #616161;
        font-weight: 700;
        padding: 0;
        margin: 0;
      }

      > div {
        display: flex;
        gap: 17px;
      }
    }

    .other_info {
      font-size: 12px;
      color: #212121;
      margin-top: 4px;
      padding: 20px 20px 15px;
      background-color: #f8f8f8;

      .OtcPage_title {
        font-size: 16px;
        color: #212121;
      }

      > ul {
        padding-left: 15px;
        > li {
          color: #1aab2a;
        }
      }

      .Manufacturer {
        > h3 {
          margin: 0;
          color: #1a1a1a;
          font-size: 16px;
          font-weight: 400;
        }

        > div {
          margin-top: 5px;
        }
      }
    }

    .license {
      margin-bottom: 12px;
      padding: 0;
      color: #212121;
      font-size: 12px;
      word-wrap: break-word;
      text-align: justify;
      background-color: #f8f8f8;

      > a {
        text-decoration: none;
        color: #ff6f61;
        margin: 0 5px;
      }
    }
  }

  > div > div:nth-of-type(2) {
    width: 33.33333333%;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;

    .Frequently_bought_together {
      background-color: #fff;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 30%);
      padding: 20px;
      margin-top: 40px;

      > div:nth-of-type(1) {
        font-size: 16px;
        color: #212121;
        margin-bottom: 32px;
        display: block;
      }
    }
  }

  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }

  .style__plus {
    display: block;
    margin: 10px 0 10px 20px;
  }

  .style__plus::after {
    background-color: #e0e0e0;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: calc(100% - 75px);
    margin-left: 55px;
  }

  .total_div {
    margin-top: 10px;
    display: flex;

    > div:nth-of-type(1) {
      font-size: 12px;
      color: #757575;
      width: 50%;

      .style__total-price_title {
        font-size: 12px;
        color: #757575;
      }

      .style__total-price_price {
        font-weight: 700;
        color: #212121;
        font-size: 16px;
      }
    }

    .add_both_to_cart {
      border-radius: 4px;
      background-color: #ff6f61;
      padding: 11px 6px;
      cursor: pointer;
      text-transform: uppercase;
      text-align: center;
      float: right;
      width: 135px;

      > a {
        text-decoration: none;
        color: #fff;
        font-size: 12px;
        font-weight: 700;
      }
    }
  }
`;

export const Listed_product = styled.div`
  display: flex;
  gap: 10px;

  > div > img {
    width: 100%;
    width: 80px;
  }

  .style__title {
    font-size: 14px;
    font-weight: 500;
    color: #212121;
    display: block;
    line-height: 1.2em;
    max-height: 2.4em;
    overflow: hidden;
  }

  .style__mrp {
    font-size: 12px;
    color: #757575;

    .style__slashed {
      font-size: 12px;
      color: #757575;
      text-decoration: line-through;
    }
  }

  .style__discount {
    font-size: 12px;
    color: #1aab2a;
  }
`;
