export function Sudoku(col,row) {
  this.col = col; // new Sudoku
  this.row = row;
}


// let row = [1,2,3,4,5,6,7,8,9]

Sudoku.prototype.checkCol = function() {
  let total = 0
  this.col.forEach(function(element) {
    total += element;
    return total; // becomes colTotal
    }
  );
}

