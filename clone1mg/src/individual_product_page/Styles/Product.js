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
      }
      
      input[type="radio"]:checked {
        background-color: #ff6f61;
        border: 2px solid #ff6f61;
      }
    }
  }
`;
