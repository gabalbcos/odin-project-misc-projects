/* Make Board */

let chessBoard = [];
let alreadyVisited = [];
let pair;

function makeBoard() {
  for (i = 1; i < 9; i++) {
    for (j = 1; j < 9; j++) {
      chessBoard.push([i, j])
    }
  }
  console.log(chessBoard);
}

function checkValidMovement(array, arrayToCheck) {
  for(let coord of arrayToCheck) {
    if (coord[0] === array[0] && coord[1] === array[1]) {
      return true;
    }
  }
  return false
}

function chooseXY() {
  let x = parseInt(prompt("add number 1-8 for x"));
  let y = parseInt(prompt("add number 1-8 for y"));
  pair = [x, y];
}













makeBoard();
chooseXY();
console.log(checkValidMovement(pair, chessBoard));