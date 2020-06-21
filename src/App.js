import React from "react";
import Screen from "./components/Screen.js";
import Remote from "./components/Remote.js";
import styled from "styled-components";

const Calculator = styled.div`
  width: 400px;
  // border: solid orange;
  // border-radius: 10px;  //Why does't this make everything inside Calculator have a border-radius of 10px?
  > * {
    border-radius: 10px;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pastEquationAnswer: "",
      currentEquation: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonValue) => () => {
    this.setState(
      (prevState) => {
        return {
          currentEquation: prevState.currentEquation + buttonValue,
        };
      },
      () => {
        console.log("Callback ", this.state.currentEquation);
      }
    );

    console.log(this.state);
  };

  render() {
    return (
      <Calculator>
        <Screen currentEquation={this.state.currentEquation} />
        <Remote handleClick={this.handleClick} />
      </Calculator>
    );
  }
}

export default App;
