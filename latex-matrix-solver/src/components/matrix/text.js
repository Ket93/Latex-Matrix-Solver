var inp1 ="\begin{bmatrix} 0.9 & 0.9 & 0.9 \\ 0.9 & 4 & 0.9 \\ 0.9 & 10.9& 0 end{bmatrix}";


tojs(inp1);

function tojs(inp) {
  console.log(inp);
  var arr = [];
  var pusharr = [];
  var strcat = "";
  inp = inp.substring(14, inp.length - 12);
  console.log(inp);
  arr = inp.split("\\");
  arr = arr.map(x => x.split("&"));
  arr = arr.map(x => x.map(j => parseFloat(j.trim())));
  console.log(arr);
  return arr;
}