import React from "react";
import "./matrix.css";

const gaussJordan = require("../../gaussjordan.js");
const converter = require("../matrix/converter.js");

function MatrixInput(props) {
  // PROPS EXPECTED
  // row: INT (number of rows to be rendered)
  // col: INT (number of columns to be rendered)
  // setMatrix: function that takes in 2d array and sets this state for matrixParent component
  // setREFMatrix: funciton that takes in 2d array and sets REFMatrix state in matrixParent
  // setLatexAnswer: function that takes in a string and sets this state in matrixParent

  // RENDER EXPECTED
  //  grid of input boxes depending on row and column prop,
  //  submit button that calls setMatrix with whatever in inputted into the input boxes

  // matrixInputGrid[row][col]
  let matrixInputGrid = new Array(props.row);
  for (let i = 0; i < props.row; i++) {
    matrixInputGrid[i] = new Array(props.col).fill(0);
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
    props.setMatrix(matrixInputGrid);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mainForm">
        {matrixInputGrid.map((row, indexRow = 1) => {
          return (
            <div display="flex" key={indexRow}>
              {row.map((item, indexColumn = 1) => {
                return (
                  <input
                    className="matrixInput"
                    key={indexRow + " " + indexColumn}
                    type="text"
                    defaultValue={0}
                    name={indexRow + "," + indexColumn}
                  />
                );
              })}
            </div>
          );
        })}
        <a href="#" class="button">Calculate</a>
      </form>
    </>
  );
}

export default MatrixInput;
