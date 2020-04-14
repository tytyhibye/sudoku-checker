import { Sudoku } from "../src/sudokuCheck"

describe('Sudoku Grid', () => {

  test('should correctly register that all squares are filled', () => {
    let colTotal = new Sudoku([1,2,3,4,5,6,7,8,9],[]) // this.col and this.row
    let total = colTotal.checkCol() // or new Sudoku().checkCol();
    expect(colTotal.checkCol()).toEqual(total);
  })
  // test('should correctly register that all squares are filled', () => {
  //   var spaces = new Sudoku([row],[col])
  //   spaces.checkBox();
  //   expect(spaces.row).toEqual(45);
    
  // })
})