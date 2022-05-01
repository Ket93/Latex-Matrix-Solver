import React, { useEffect, useState } from "react";
import MatrixInput from "./matrix";
import MatrixSizeInput from "./matrixsizeinput";
import MatrixOutput from "./matrixout.js";

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
    [1, 2],
    [3, 4],
  ]);

  // REFMatrix is a 2d array
  // setREFMatrix is a function that modifies this state
  const [REFMatrix, setREFMatrix] = useState([
    [0, 0],
    [0, 0],
  ]);

  // latexAnswer is a string (in latex)
  // setLatexAnswer is a function that modifies this state
  const [latexAnswer, setLatexAnswer] = useState("");

  // RENDER EXPECTED:
  //  MatrixSizeInput and MatrixInput with right props, + any other intermediary text
  //  (possibly) text box for the latex output
  return (
    <div>
      <MatrixSizeInput setRow={setRow} setCol={setCol} row={row} col={col} />
      <MatrixInput
        row={row}
        col={col}
        matrix={matrix}
        setMatrix={setMatrix}
        setREFMatrix={setREFMatrix}
        setLatexAnswer={setLatexAnswer}
      />
      <MatrixOutput REFMatrix={REFMatrix} latexAnswer={latexAnswer} />
    </div>
  );
}

export default MatrixParent;
