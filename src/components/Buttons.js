import React from "react";
import styled from "styled-components";

const allButtons = [
  "DEL",
  "÷",
  "7",
  "8",
  "9",
  "×",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
];

const ButtonsStyle = styled.button`
  background-color: pink;
  width: 100px;
  height: 100px;
  outline: none;
  border: solid orange 1px;
`;

// button {
//     border: solid pink 1px;
//     background-color: cornflowerblue;
//     outline: none;
//     font-size: large;
//     font-weight: 900;
//   }

const WideButtonsStyle = styled.button`
  background-color: pink;
  width: 200px;
  height: 100px;
  outline: none;
  border: solid orange 1px;
`;

const buttonsMapped = allButtons.map((elem) => {
  return <ButtonsStyle>{elem}</ButtonsStyle>;
});

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pastEquationAnswer: "",
      currentEquation: "",
    };
    this.handleButtonOnClick = this.handleButtonOnClick.bind(this);
  }
  handleButtonOnClick = () => {
    console.log("hello");
  };

  render() {
    return (
      <>
        <WideButtonsStyle >AC</WideButtonsStyle>
        {buttonsMapped}
        <WideButtonsStyle >=</WideButtonsStyle>
      </>
    );
  }
}

export default Buttons;
