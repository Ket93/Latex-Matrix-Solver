import React from "react";

function MatrixOutput(props) {
  console.log(props.REFMatrix);

  const grid2 = props.REFMatrix;

  const grid = [[1,2,3,4], [1,2,3,4], [5,4,2,6]];

  return(
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