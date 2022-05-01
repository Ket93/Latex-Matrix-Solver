import React from "react";
import "./matrix.css";

import gaussJordan from "../../gaussjordan.js";
import converter from "../matrix/converter.js";

function MatrixInput(props) {
  // PROPS EXPECTED
  // row: INT (number of rows to be rendered)
  // col: INT (number of columns to be rendered)
  // matrix: 2d array of size row x col that is the "default"/inputted
  // setMatrix: function that takes in 2d array and sets this state for matrixParent component
  // setREFMatrix: funciton that takes in 2d array and sets REFMatrix state in matrixParent
  // setLatexAnswer: function that takes in a string and sets this state in matrixParent

  // RENDER EXPECTED
  //  grid of input boxes depending on row and column prop,
  //  submit button that calls setMatrix with whatever in inputted into the input boxes

  // initialize empty matrix of row x col size
  //  matrixInputGrid[row][col]
  let matrixInputGrid = new Array(props.row);
  for (let i = 0; i < props.row; i++) {
    matrixInputGrid[i] = new Array(props.col).fill(0);
  }

  // set matrixInputGrid to the initial values
  //  dimensions of props.matrix may not correspond to row and col props, this gets fixed upon submission
  let actualRow = props.matrix.length;
  let actualCol = props.matrix[0].length;

  for (let i = 0; i < props.row; i++) {
    for (let j = 0; j < props.col; j++) {
      matrixInputGrid[i][j] =
        i < actualRow && j < actualCol ? props.matrix[i][j] : 0;
    }
  }

  // row x col 2d array with all zeros for now as default value

  // function that handles what happens when it is sumbitted
  //  sets matrixInputGrid to the correct values, then sets the state
  const handleSubmit = (event) => {
    event.preventDefault();
    let count = 0;
    for (let i = 0; i < props.row; i++) {
      for (let j = 0; j < props.col; j++) {
        // If the floating point number cannot be parsed, we set 0 for this value
        matrixInputGrid[i][j] = !isNaN(parseFloat(event.target[count].value))
          ? parseFloat(event.target[count].value)
          : 0;
        count += 1;
      }
    }
    props.setMatrix(matrixInputGrid);
    matrixInputGrid = gaussJordan(matrixInputGrid);
    props.setREFMatrix(matrixInputGrid);
    let latexString = converter(matrixInputGrid);
    props.setLatexAnswer(latexString);
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="GFG" className="mainForm">
        {matrixInputGrid.map((row, indexRow = 1) => {
          return (
            <div display="flex" key={indexRow}>
              {row.map((item, indexColumn = 1) => {
                return (
                  <input
                    className="matrixInput"
                    key={indexRow + " " + indexColumn}
                    type="text"
                    defaultValue={item}
                    name={indexRow + "," + indexColumn}
                  />
                );
              })}
            </div>
          );
        })}
        <button className="button" href="#">
          Calculate
        </button>
      </form>
    </>
  );
}

export default MatrixInput;
