import React from "react";
import "./latexTojs.css";

import gaussJordan from "../../gaussjordan";
import converter from "./converter";

const inp1 =
  "\begin{bmatrix} 1 & 2 & 4 \\ 6 & 4 & 12 \\ 5 & 1 & 0 end{bmatrix}";
function tojs(inp) {
  console.log(inp);

  var arr = [];
  var pusharr = [];
  var strcat = "";
  for (let i = 5; i < inp.length; i++) {
    // if a valid digit
    if (!isNaN(inp[i]) && inp[i] !== " ") {
      strcat += inp[i];
      // if the next digit is also valid
      if (inp[i + 1] === ".") {
        strcat += inp[i + 1];
        i += 1;
      }
    } else {
      // not a valid digit
      if (inp[i] == "\\" || inp[i] == "e") {
        if (!isNaN(pusharr[0]) && pusharr[0] !== " ") {
          pusharr.push(parseInt(strcat.slice()));
          arr.push(pusharr.slice());
          strcat = "";
          pusharr = [];
        }
      }
      if (inp[i] == "&") {
        pusharr.push(parseInt(strcat.slice()));
        strcat = "";
      }
    }
  }
  console.log(arr);
  return arr;
}

function LatexToJs(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.str.value);
    var val = tojs(event.target.str.value);

    /*
    props.setMatrix(val);
    props.setCol(val[0].length);
    props.setRow(val.length);
    */

    val = gaussJordan(val);
    props.setREFMatrix(val);
    let latexString = converter(val);
    props.setLatexAnswer(latexString);
  };

  return (
    <div className="inputContainer">
      <form onSubmit={handleSubmit} className="submitForm" id="latexForm">
        <label className="latexLabel">Latex Input:</label>
        <input type="text" name="str" className="latexInput" />
      </form>
      <div className="latexButton">
        <button type="submit" form="latexForm" className="button">Submit</button>
      </div>
    </div>
  );
}

export default LatexToJs;
