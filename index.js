function renderBoard(a) {
  let board = [];

  for (let i = 0; i = a; i++) {
    for (let y = 0; y < a; y++) {
      y === 0
        ? (board[i] = new Array())
        : i % 2 === 0
        ? y % 2 === 0
          ? (board[i][y] = '#')
          : (board[i][y] = 'O')
        : i % 2 !== 0
        ? y % 2 === 0
          ? (board[i][y] = 'O')
          : (board[i][y] = '#')
        : null;
    }
  }

  return board;
}

console.table(renderBoard(8));
