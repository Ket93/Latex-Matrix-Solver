import React from "react";
import "./matrixout.css";

function MatrixOutput(props) {

  const grid = props.REFMatrix;

  return (
    <div className="displayContainer">
      <div className="tableContainer">
        <h2 className="outputHeading">RREF Form:</h2>
        <table className="tableBody">
          <tbody>
            {grid.slice(0, grid.length).map((item, index) => {
              return (
                <tr>
                  {item.map((item2, index2) => {
                    return (
                      <td className="tableEntry">{item2}</td>
                    );
                  })
                  }
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="latexContainer">
        <h2 className="latexHeading">Latex Code:</h2>
        {props.latexAnswer}</div>
    </div>
  );
}

export default MatrixOutput;