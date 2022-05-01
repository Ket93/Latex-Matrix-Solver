import React from "react";

const inp1 = "\begin{bmatrix} 1 & 0 & 0.423444976076555 \\ 0 & 1 & -0.043062200956937795 \\ 0 & 0 & 0 \end{bmatrix}" 
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
    } else { // not a valid digit
      if (inp[i] == "\\" || inp[i] == "e") {
        if (!isNaN(pusharr[0]) && pusharr[0] !== " ") {
          pusharr.push(int(strcat.slice()));
          arr.push(pusharr.slice());
          strcat = "";
          pusharr = [];
        }
      } 
      if (inp[i] == "&") {
        pusharr.push(int(strcat.slice()));
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
    var val = tojs(event.target.str.value)
    props.setMatrix(val);
    props.setCol(val[0].length);
    props.setRow(val.length); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Latex Input: 
      </label>
      <input
          type="text"
          name="str"
        />
      <button type="submit">Submit</button>
    </form>
  )
}

export default LatexToJs;