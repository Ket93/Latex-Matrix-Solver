import React from "react";

function MatrixOutput(props) {

  const grid = props.REFMatrix;

  return (
    <div>
      <table>
        <tbody>
          {grid.slice(0, grid.length).map((item, index) => {
            return (
              <tr>
                {item.map((item2, index2) => {
                  return (
                    <td>{item2}</td>
                  );
                })
                }
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>Latex: {props.latexAnswer}</div>
    </div>
  );
}

export default MatrixOutput;