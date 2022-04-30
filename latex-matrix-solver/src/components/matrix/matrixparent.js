import React, { useState } from "react";
const MatrixSizeInput = require("matrixsizeinput.js");

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

  return <div></div>;
}

export default MatrixParent;
