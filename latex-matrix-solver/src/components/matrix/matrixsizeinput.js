import React from "react";
import "./matrixsizeinput.css";

function MatrixSizeInput(props) {
  // PROPS EXPECTED:
  // setRow(int) function that modifies the row state in MatrixParent
  // setCol(int) function that modifies the row state in MatrixParent
  // row: INT
  // col: INT

  // RENDER EXPECTED:
  // two input boxes that call setRow and setCol when the inputted number changed (and also within reasonable bounds)

  return (
    <>
      <h1 className="title">Latex Matrix RREF Solver</h1>
      <form action="" id="setDimensions" className="sizeForm">
        <h2 className="sizeOfMatrix">Size Of Matrix:</h2>
        <input
          className="rowsInput"
          min="2"
          max="8"
          type="number"
          name="rows"
          defaultValue={props.row}
          onChange={(e) => {
            const rows = parseInt(e.target.value);

            // if we only want matrix of size between 2 and 8
            if (2 <= rows && rows <= 8) {
              props.setRow(rows);
            }
          }}
        />

        <h2 className="X">X</h2>

        <input
          className="colsInput"
          min="2"
          max="8"
          type="number"
          name="cols"
          defaultValue={props.col}
          onChange={(e) => {
            const cols = parseInt(e.target.value);

            // if we only want matrix of size between 2 and 8
            if (2 <= cols && cols <= 8) {
              props.setCol(cols);
            }
          }}
        />
      </form>
    </>
  );
}

export default MatrixSizeInput;
