import React from "react";
import { Buttons } from "./Buttons";

const Remote = (props) => {
  return (
    <Buttons
      handleClick={props.handleClick}
      handleAllClear={props.handleAllClear}
      handleDelete={props.handleDelete}
      handleEqualsOnClick={props.handleEqualsOnClick}
      handleEvaluate={props.handleEvaluate}
      currentEquation={props.currentEquation}
      />
  );
};

export default Remote;
