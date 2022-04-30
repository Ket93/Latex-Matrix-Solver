import React from "react";
function MatrixInput(props) {
  // PROPS EXPECTED
  // row: INT (number of rows to be rendered)
  // col: INT (number of columns to be rendered)
  // setMatrix: function that takes in 2d array and sets this state for matrixParent component

  // RENDER EXPECTED
  //  grid of input boxes depending on row and column prop,
  //  submit button that calls setMatrix with whatever in inputted into the input boxes

  // matrixInputGrid[row][col]
  let matrixInputGrid = new Array(props.row);
  for (let i = 0; i < props.row; i++) {
    matrixInputGrid[i] = new Array(props.col).fill(0);
  }
  // row x col 2d array with all zeros for now as default value

  return <div></div>;
}

export default MatrixInput;
