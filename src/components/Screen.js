import React from "react";
import styled from "styled-components";

const ScreenBackground = styled.div`
  background-color: yellow;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  border-radius: 10px 10px 0 0;
  flex-wrap: wrap;
`;

const Screen = (props) => {
  return (
    <ScreenBackground>
      <p>{props.pastEquationAnswer}</p>
      <p>{props.currentEquation}</p>
    </ScreenBackground>
  );
};

export default Screen;