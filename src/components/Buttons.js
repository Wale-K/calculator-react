import React from "react";
import styled from "styled-components";

const allButtons = [
  " / ", // ÷
  "7",
  "8",
  "9",
  " * ", // ×
  "4",
  "5",
  "6",
  " - ",
  "1",
  "2",
  "3",
  " + ",
  "0",
  ".",
];

const ButtonsStyle = styled.button`
  background-color: pink;
  width: 100px;
  height: 100px;
  //   outline: none;
  border: solid orange 1px;
`;

const WideButtonsStyle = styled.button`
  background-color: pink;
  width: 200px;
  height: 100px;
  //   outline: none;
  border: solid orange 1px;
`;

export const Buttons = (props) => {
  // const buttonsMapped = allButtons.map((elem) => {
  //     return <ButtonsStyle onClick={props.handleClick} id={elem}>{elem}</ButtonsStyle>;
  //   });
  return (
    <>
      <WideButtonsStyle key="AC" onClick={props.handleAllClear}>AC</WideButtonsStyle>
      <ButtonsStyle onClick={props.handleDelete}>DEL</ButtonsStyle>
      {/* {buttonsMapped(props)} */}
      {allButtons.map((elem) => {
        return (
          <ButtonsStyle onClick={props.handleClick(elem)} key={elem.trim()}>
            {elem.trim()}
          </ButtonsStyle>
        );
      })}

      <WideButtonsStyle key="=" onClick={() => props.handleEvaluate(props.currentEquation)}>=</WideButtonsStyle>
    </>
  );
};
