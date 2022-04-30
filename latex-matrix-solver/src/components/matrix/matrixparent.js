import React, { useState } from "react";
import MatrixInput from "./matrix";
import MatrixSizeInput from "./matrixsizeinput";

function MatrixParent() {
  // STATES

  // row is an INT
  // setRow is a function to modify this state
  const [row, setRow] = useState(2);

  // col is an INT
  // setRow is a function to modify this state
  const [col, setCol] = useState(2);

  // matrix is a 2D array (square)
  // setMatrix is a function that modifies this state
  const [matrix, setMatrix] = useState([
    [0, 0],
    [0, 0],
  ]);

  // RENDER EXPECTED:
  //  MatrixSizeInput and MatrixInput with right props, + any other intermediary text
  //  (possibly) text box for the latex output
  return <div></div>;
}

export default MatrixParent;
