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
  flex-wrap: wrap
`;



const Screen = () => {
  return (
    
      <ScreenBackground>
        <p>This is where the past answer goes</p>
        <p>This is where the current equations goes</p>
      </ScreenBackground>
    
  );
};

export default Screen;
