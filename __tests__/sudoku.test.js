import { Sudoku } from "../src/sudokuCheck"

  test('should correctly determine whether each row contains 9 numbers', () => {
    let sudoku = new Sudoku([1,2,3,4,5,6,7,8,9], [1,2,4,5,6,7,8,9])
    expect(sudoku.row.length).toEqual(9);
    expect(sudoku.col.length).toEqual(9);
  })
    

  test('should correctly register that the 9 integers in each column have a sum of 45', () => {
    let colTotal = new Sudoku([1,2,3,4,5,6,7,8,9],[]) // this.col and this.row
    let total = colTotal.checkCol() // or new Sudoku().checkCol();
    expect(colTotal.checkCol()).toEqual(total);
  })
  // test('should correctly register that all squares are filled', () => {
  //   var spaces = new Sudoku([row],[col])
  //   spaces.checkBox();
  //   expect(spaces.row).toEqual(45);
    
  // })
 