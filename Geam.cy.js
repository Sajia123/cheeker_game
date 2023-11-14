// Simple Checker Game in JavaScript

// Initialize the board
let board = [
    ['-', 'B', '-', 'B', '-', 'B', '-', 'B'],
    ['B', '-', 'B', '-', 'B', '-', 'B', '-'],
    ['-', 'B', '-', 'B', '-', 'B', '-', 'B'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-'],
    ['O', '-', 'O', '-', 'O', '-', 'O', '-'],
    ['-', 'O', '-', 'O', '-', 'O', '-', 'O'],
    ['O', '-', 'O', '-', 'O', '-', 'O', '-']
  ];
  
  // Function to print the current state of the board
  function printBoard() {
    for (let row of board) {
      console.log(row.join(' '));
    }
    console.log('\n');
  }
  
  // Function to make a move
  function makeMove(startRow, startCol, endRow, endCol) {
    if (board[startRow][startCol] === 'O' && board[endRow][endCol] === '-') {
      board[endRow][endCol] = 'O';
      board[startRow][startCol] = '-';
      printBoard();
    } else {
      console.log('Invalid move.');
    }
  }
  
  // Perform five moves
  makeMove(5, 0, 4, 1);
  makeMove(2, 1, 3, 0);
  makeMove(5, 2, 4, 3);
  makeMove(2, 3, 3, 2);
  makeMove(5, 4, 4, 5);
 // makeMove(5, 4, 4, 5);