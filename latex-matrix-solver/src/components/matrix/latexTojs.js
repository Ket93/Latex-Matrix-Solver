import React from "react";
import "./latexTojs.css";

import gaussJordan from "../../gaussjordan";
import converter from "./converter";

const inp1 =
  "\begin{bmatrix} 1 & 2 & 4 \\ 6 & 4 & 12 \\ 5 & 1 & 0 end{bmatrix}";

function LatexToJs(props) {
  const tojs = (inp) => {
    //console.log(inp);
    var arr = [];
    inp = inp.substring(15, inp.length - 13);
    //console.log(inp);
    arr = inp.split("\\\\");
    arr = arr.map((x) => x.split("&"));
    //console.log(arr);
    arr = arr.map((x) => x.map((j) => parseFloat(j)));
    //console.log(arr);
    return arr;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.str.value);
    var val = tojs(event.target.str.value);
    console.log(val);
    val = gaussJordan(val);
    props.setREFMatrix(val);
    let latexString = converter(val);
    props.setLatexAnswer(latexString);
  };

  return (
    <div className="inputContainer">
      <form onSubmit={handleSubmit} className="submitForm" id="latexForm">
        <label className="latexLabel">Latex Input:</label>
        <textarea type="text" name="str" className="latexInput" />
      </form>
      <div className="latexButton">
        <button type="submit" form="latexForm" className="button">
          Submit
        </button>
      </div>
    </div>
  );
}

export default LatexToJs;
