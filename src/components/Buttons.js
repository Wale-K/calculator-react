import React from "react";
import styled from "styled-components";

const allButtons = [
  "DEL",
  " ÷ ",
  "7",
  "8",
  "9",
  " × ",
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

// const buttonsMapped = (bob) => {
//   return allButtons.map((elem) => {
//     return (
//       <ButtonsStyle onClick={bob.handleClick} id={elem}>
//         {elem}
//       </ButtonsStyle>
//     );
//   });
// };

export const Buttons = (props) => {
  // const buttonsMapped = allButtons.map((elem) => {
  //     return <ButtonsStyle onClick={props.handleClick} id={elem}>{elem}</ButtonsStyle>;
  //   });
  return (
    <>
      <WideButtonsStyle onClick={props.handleClick}>AC</WideButtonsStyle>
      {/* {buttonsMapped(props)} */}
      {allButtons.map((elem) => {
        return (
          <ButtonsStyle onClick={props.handleClick(elem)} key={elem.trim()}>
            {elem.trim()}
          </ButtonsStyle>
        );
      })}

      <WideButtonsStyle onClick={props.handleClick}>=</WideButtonsStyle>
    </>
  );
};
