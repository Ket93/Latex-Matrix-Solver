const gaussJordan = function (arr) {
  console.log("start: ", arr);

  // m is number of rows
  // n is number of columns

  const m = arr.length;
  const n = arr[0].length;

  //for (i = 1; i < n; i ++) {

  //}

  var h = 0;
  var k = 0;

  while (h < m && k < n) {
    // finding the max element of a pivot column
    var curmax = arr[h][k];
    var imax = h;
    for (let i = h; i < m; i++) {
      if (Math.abs(arr[i][k]) > curmax) {
        curmax = Math.abs(arr[i][k]);
        imax = i;
      }
    }
    if (curmax == 0) {
      k += 1;
    } else {
      // swap rows
      var temp = arr[h];
      arr[h] = arr[imax];
      arr[imax] = temp;

      // do it for all rows below pivot
      for (let i = h + 1; i < m; i++) {
        let f = arr[i][k] / arr[h][k];
        // fill with zeroes the lower part of pivot column
        arr[i][k] = 0;
        // do for all remaining elements in current row
        for (let j = k + 1; j < n; j++) {
          arr[i][j] = arr[i][j] - arr[h][j] * f;
        }
      }
      h += 1;
      k += 1;
    }
  }
  console.log("REF: ", arr);

  // converting to rref via back substitution

  for (let row = m - 1; row >= 0; row--) {
    for (let col = 0; col < n; col++) {
      if (arr[row][col] != 0) {
        arr[row] = rowScale(arr[row], 1 / arr[row][col]);
        // for all the rows "above" the current row
        for (let r = row - 1; r >= 0; r--) {
          arr[r] = rowSpAdd(arr[r], arr[row], -1 * arr[r][col]);
        }
        break;
      }
    }
  }
  console.log("RREF: ", arr);

  return arr;
}

function rowScale(row, scale) {
  const len = row.length;
  for (let i = 0; i < len; i++) {
    if (row[i] != 0) {
      row[i] *= scale;
    }
  }
  return row;
}

// requires: rows are of the same length
function rowSpAdd(row1, row2, scale) {
  const len = row1.length;
  for (let i = 0; i < len; i++) {
    row1[i] = row1[i] + scale * row2[i];
  }
  return row1;
}

// sample usage:   var arr = [[1,1,2,3], [5,8,13,21], [34,55,89,144]]; gaussJordan(arr);
var arr = [
  [1, 1, 2, 3],
  [5, 8, 13, 21],
  [34, 55, 89, 144],
];
gaussJordan(arr);

export default gaussJordan;
