const converter = function (data) {
  let output = "\\begin{bmatrix} \n";

  for (let i = 0; i < data.length; ++i) {
    for (let j = 0; j < data[0].length; ++j) {
      output += " ";
      output += `${data[i][j]}`;

      if (j != data[0].length - 1) {
        output += " &";
      } else {
        if (i != data.length - 1) {
          output += " \\\\ \n";
        }
      }
    }
  }

  output += " \\end{bmatrix}";
  return output;
}

export default converter;
