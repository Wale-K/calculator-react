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
      clearEquation: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleAllClear = this.handleAllClear.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEvaluate = this.handleEvaluate.bind(this);
    this.myTest = this.myTest.bind(this);
  }

  handleClick = (buttonValue, isOperator = false) => () => {
    if (this.state.clearEquation === true) {
      this.setState({currentEquation: "", clearEquation: false})
    }
    if (this.state.currentEquation.trim() === "0") {
      this.setState({ currentEquation: buttonValue });
    } else
      this.setState((prevState) => {
        return {
          currentEquation: prevState.currentEquation + buttonValue,
        };
      });
    console.log(
      `The currentEquation is: ${this.state.currentEquation} and the length is ${this.state.currentEquation.length}`
    );
  };

  handleAllClear = () => {
    this.setState({ pastEquationAnswer: "", currentEquation: "" });
  };

  handleDelete = () => {
// if (this.state.currentEquation.trim().length === 1) {
//   this.setState(currentEquation)
// }


    this.setState((prevState) => {
      return {
        currentEquation: prevState.currentEquation.slice(
          0,
          prevState.currentEquation.trim().length - 1
        ),
      };
    });
  };

  myTest = (obj) => {
    return Function("return (" + obj + ")")();
  };

  handleEvaluate = (obj) => {
    this.setState((prevState) => {
      return {
        pastEquationAnswer: this.myTest(obj), clearEquation: true
      };
    });
  };

  render() {
    return (
      <Calculator>
        <Screen
          currentEquation={this.state.currentEquation}
          pastEquationAnswer={this.state.pastEquationAnswer}
          
        />
        <Remote
          handleClick={this.handleClick}
          handleAllClear={this.handleAllClear}
          handleDelete={this.handleDelete}
          handleEqualsOnClick={this.handleEqualsOnClick}
          currentEquation={this.state.currentEquation}
          handleEvaluate={this.handleEvaluate}
        />
      </Calculator>
    );
  }
}

export default App;
