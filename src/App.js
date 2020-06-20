import React from "react";
import Screen from "./components/Screen.js";
import Remote from "./components/Remote.js";
import styled from "styled-components";

const Calculator = styled.div`
width: 400px;
// border: solid orange;
// border-radius: 10px;  //Why does't this make everything inside Calculator have a border-radius of 10px?
`


function App() {
  return (
    <Calculator>
      <Screen />
      <Remote />
    </Calculator>
  );
}

export default App;
