import React from "react";

function MatrixSizeInput(props) {
  // PROPS EXPECTED:
  // setRow(int) function that modifies the row state in MatrixParent
  // setCol(int) function that modifies the row state in MatrixParent

  // RENDER EXPECTED:
  // two input boxes that call setRow and setCol when the inputted number changed (and also within reasonable bounds)

  /*
  const form = document.getElementById("setDimensions");
  const rowsData = form.elements["rows"];
  const colsData = form.elements["cols"];

  let currentRows = rowsData.value;
  let currentCols = colsData.value;
  */

  return (
    <form action="" id="setDimensions">
      <input
        type="number"
        name="rows"
        defaultValue={2}
        onChange={(e) => {
          const rows = parseInt(e.target.value);

          // if we only want matrix of size between 2 and 8
          if (1 <= rows && rows <= 8) {
            props.setRow(rows);
          }
        }}
      />

      <input
        type="number"
        name="cols"
        defaultValue={2}
        onChange={(e) => {
          const cols = parseInt(e.target.value);

          // if we only want matrix of size between 2 and 8
          if (1 <= cols && cols <= 8) {
            props.setCol(cols);
          }
        }}
      />
    </form>
  );
}

export default MatrixSizeInput;
