import styled from "styled-components";

/* Header */
export const Header = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px 14px 18px;
  position: absolute;
  height: 65px;
  left: 0px;
  right: 0px;
  top: 0px;
  background: #0e4462;

  h1 {
    position: static;
    height: 31px;
    top: 17px;
    font-family: Pacifico, cursive, sans-serif;
    font-size: 20px;
    line-height: 20px;
    color: #49beff;
    margin: 0px 10px;
  }
`;

/* Bottom Nav */
export const Bnav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
  position: fixed;
  height: 65px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: #033b5b;
  color: #49beff;
  padding: 8px 16px 14px 18px;

  .nav-button {
    font-size: 12px;
    margin: 0px auto;
    bottom: 0px;
  }

  a {
    text-decoration: none;
  }

  .Active {
    color: white;
  }
`;

/* Account */
export const Acc = styled.body`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: space-between;

  .account-tab {
    padding: 6px;
    margin: 2px 0px;
    left: 0px;
    right: 0px;
    background: aliceblue;
  }
  p {
    margin-bottom: 0;
  }
`;

/* Add Item */
export const AI = styled.body`
  width: 100%;
  padding: 5px 10px;
  margin: auto;
  max-width: 400px;
  form {
  }
  .css-acap47-MuiAlert-message {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position: fixed;
    padding-left: 30px;

  }
  .css-secft3-MuiPaper-root-MuiAlert-root, .css-16sd9zo-MuiPaper-root-MuiAlert-root {
    height: 50px;
    position: fixed;
    bottom: 10%;
  }

  .subhead {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Inter, sans-serif;
    font-style: italic;
    font-weight: 300;
    font-size: 12px;
    line-height: 30px;
    min-width: 33%;
  }
  h3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px auto;
    min-width: 33%;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    color: #000000;
  }

  p {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
    margin: auto;
  }

  .item-name {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 20px;
    margin: auto;
  }
  .numbers {
    font-family: Inter, sans-serif;
    font-style: normal;
    padding: 8px 7px;
    font-weight: 900;
    font-size: 12px;
    position: absolute;
    line-height: 50%;
    background-color: #49beff;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 2px solid #49beff;
  }
  .name-input {
    margin: auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 276px;
    height: 41px;
    left: 66px;
    top: 200px;
    background: rgba(17, 169, 255, 0.12);
    color: black;
    border: 1px solid #49beff;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.1rem;
    line-height: 20px;
    margin: auto;
    padding-left: 1.2rem;
  }

  .input-group {
    width: 75px;
    height: 75px;
    display: flex;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: space-between;
    margin: auto 120px;
    border-radius: 100vw;
  }
  .input-group > .form-control {
    min-width: 75px;
  }

  .input-group > .form-control,
  .input-group > .form-select {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    text-align: center;
    position: static;
    height: 76px;
    top: 314px;
    margin: auto 15px !important;
    border-radius: 100vw !important;
    background: #ffffff;
    border: 2px solid #49beff;
    box-sizing: border-box;
  }
  .input-group .btn {
    position: static;
    height: 49px;
    width: 49px;
    top: 314px;
    margin: 15px 15px;
    border-radius: 100vw;
    background: #ffffff;
    color: #49beff;
    border: 2px solid #49beff;
    font-size: 2rem;
    color: #000000;
  }
  .input-group > .form-control,
  .input-group > .form-select {
    position: static;
    height: 76px;
    width: 75px;
  }
  .item-quantity {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    display: flex;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-between;
    margin: auto;
  }

  input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  opacity: 1;
  
}

  .number-input {
    -webkit-appearance: none;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    text-align: center;
    border: 2px solid #49beff;
  }

  .plus, .minus {
    text-align: center;
    border-radius: 50%;
    width: 50px;
    border: 2px solid #49beff;
    background: #ffffff;
    color: black;
    font-size: 2rem;
  }

  .select-input {
    border-radius: 100vw;
    background: #ffffff;
    border: 2px solid #49beff;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    height: 50px;
    width: 50px;
    margin: 0;
  }

  .Datepicker {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 276px;
    height: 41px;
  }

  .MuiInput-underline:before {
    border-bottom: 0px;
    content: none;
  }

  .MuiInput-underline:after {
    border-bottom: 0px;
  }

  .MuiInput-underline:hover {
    border-bottom: 0px;
  }
  .MuiInputBase-input {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    font-size: 18px;
    line-height: 20px;
    background: rgba(17, 169, 255, 0.12);
    border: 1px solid #49beff;
    box-sizing: border-box;
    border-radius: 5px;
    width: 276px;
    height: 41px;
    cursor: pointer;
  }
  .storages {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-between;
    height: 65px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
  .storage-options label {
    margin: auto 5px;
    width: 76px;
    height: 76px;
    padding-top: 8px;
    border-radius: 100vw;
    border: 2px solid #49beff;
    text-align: center;
    letter-spacing: 0.025em;
    cursor: pointer;
  }

  input:active + label {
    background-color: #49beff;
  }

  .storage-options input[type="radio"] {
    display: none;
  }

  .summary {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: space-between;
    height: 65px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }

  .summary-item {
    font-family: Inter, sans-serif;
    margin: auto;
  }
  .summary-title {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 30px;
  }
  .summary-subtitel {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;
    color: #49beff;
    text-transform: lowercase;
  }
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px auto;
    padding: 14px 16px 14px 18px;
    width: 311px;
    height: 48px;
    top: 740px;
    margin-top: 15px;
    border: #ffffff;
    background: #49beff;
    color: #ffffff;
    border-radius: 4px;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }


`;

/* Storage */
export const ST = styled.body`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
  margin-bottom: 100px;
  h3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px auto;
    min-width: 33%;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    color: #000000;
  }

  .Storage-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: Inter, sans-serif;
    font-style: italic;
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;
    min-width: 33%;
  }
  .All-items {
  font-family: "Roboto", sans-serif;
    line-height: 21px;
    margin: 8px 0px;
    padding: 12px 0px 12px 14px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    background-color: #E5CAB0;
 }

  p {
    display: flex;
    align-items: center;
    font-family: "Roboto", sans-serif;
  }

  .Freezer,
  .Fridge,
  .Pantry {
    font-family: "Roboto", sans-serif;
    line-height: 21px;
    margin: 8px 0px;
    padding: 12px 0px 12px 14px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #000000;
  }
  .MuiAccordionSummary-content {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    margin: 0px;
    padding: 0px;
  }

  .item-name {
    color: #11a9ff;
  }

  .item-details {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: auto;
  }

  .item-details-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50%;
    border: 2px solid #11a9ff;
    background: #ffffff;
    color: black;
    width: 70px;
    height: 70px;
    margin: 0px 8px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    padding: 4px;
    transition: 0.2s ease-out;

  }

  .item-details-button:active {
    background: #49BEFF;
  }

  .item {
    width: 100%;
    /* display: flex; */
    align-items: left;
    padding-left: 14px;
    /* height: 45px; */
    list-style: none;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    background: #d5e4fb;
    margin: 8px 0px;
  }
  .item p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14;
    margin-right: auto;
    margin-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    text-transform: capitalize;
  }
  .item-info {
    right: 0px;
    display: flex;
    flex-direction: row;
  }

  .line {
    width: 1px;
    height: 30px;
    background-color: black;
    margin: 2px 10px;
  }
  .Freezer {
    background-color: #49beff;
  }
  .Fridge {
    background-color: #73abff;
  }
  .Pantry {
    background-color: #ffe1d5;
  }
  .css-acap47-MuiAlert-message {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    position: fixed;
    padding-left: 30px;
    width: 300px;
  }
  .css-secft3-MuiPaper-root-MuiAlert-root, .css-16sd9zo-MuiPaper-root-MuiAlert-root {
    height: 50px;
    width: 300px;
    position: fixed;
    bottom: 10%;
  }
`;

/* Shopping List */
export const SL = styled.body`
  margin-bottom: 100px;
  h3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px auto;
    min-width: 33%;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    color: #000000;
  }
  .Shoppinglist-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: Inter, sans-serif;
    font-style: italic;
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;
    min-width: 33%;
  }
 .All-items {
  font-family: "Roboto", sans-serif;
    line-height: 21px;
    margin: 8px 0px;
    padding: 12px 0px 12px 14px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    background-color: #E5CAB0;
 }
`;
