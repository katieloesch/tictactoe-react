export const PLAYER_X = 'x';
export const PLAYER_O = 'o';

export const GameState = {
    xWins: 0,
    oWins: 1,
    draw: 2,
    inProgress: 3
}

export const winningCombinations = [
    { combo: [0, 1, 2], strikePosition: 'strike-row-1' },
    { combo: [3, 4, 5], strikePosition: 'strike-row-2' },
    { combo: [6, 7, 8], strikePosition: 'strike-row-3' },
    { combo: [0, 3, 6], strikePosition: 'strike-column-1' },
    { combo: [1, 4, 7], strikePosition: 'strike-column-2' },
    { combo: [2, 5, 8], strikePosition: 'strike-column-3' },
    { combo: [0, 4, 8], strikePosition: 'strike-diagonal-1' },
    { combo: [2, 4, 6], strikePosition: 'strike-diagonal-2' },
];

export const checkWinner = (board, player) => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const { combo } = winningCombinations[i];
      const [a, b, c] = combo;
      if (board[a] === player && board[b] === player && board[c] === player) {
        return true;
      }
    }
    return false;
};

export const minimax = (board, player) => {
  const emptyCells = board.reduce((acc, curr, idx) => {
    if (curr === null) acc.push(idx);
    return acc;
  }, []);

  if (checkWinner(board, PLAYER_X)) {
    return { score: -10 };
  } else if (checkWinner(board, PLAYER_O)) {
    return { score: 10 };
  } else if (emptyCells.length === 0) {
    return { score: 0 };
  }

  const moves = [];

  for (let i = 0; i < emptyCells.length; i++) {
    const move = {};
    move.index = emptyCells[i];
    board[emptyCells[i]] = player;

    if (player === PLAYER_O) {
      const result = minimax(board, PLAYER_X);
      move.score = result.score;
    } else {
      const result = minimax(board, PLAYER_O);
      move.score = result.score;
    }

    board[emptyCells[i]] = null;
    moves.push(move);
  }

  let bestMove;
  if (player === PLAYER_O) {
    let bestScore = -10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {
    let bestScore = 10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  return moves[bestMove];
};