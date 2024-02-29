import gsap from 'gsap';

export const tl1 = gsap.timeline();
export const tl2 = gsap.timeline();
export const tl3 = gsap.timeline();
export const tl4 = gsap.timeline();

export const boardTemplate = new Array(9).fill('empty');

export const sessionTemplate1 = {
  player: {
    symbol: 'x',
    name: 'Player 1',
    wins: 0,
    color: 'white'
  },
  skynet: {
    symbol: 'o',
    name: 'Computer',
    wins: 0,
    color: 'white'
  },
  draws: 0,
  players: 1,
  gamesPlayed: 0,
  mute: false
}

export const sessionTemplate2 = {
  player1: {
    symbol: 'x',
    name: 'Player 1',
    wins: 0,
    color: 'white'
  },
  player2: {
    symbol: 'o',
    name: 'Player 2',
    wins: 0,
    color: 'white'
  },
  draws: 0,
  players: 2,
  gamesPlayed: 0,
  mute: false
}

export const checkForWin = (board, currentSymbol) => {

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal combinations
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical combinations
    [0, 4, 8], [2, 4, 6] //diagonal combinations
  ]

  const result = winningCombinations.some((combo) => { //for each possible winning combination (array of 3 indexes e.g. [0, 1, 2])
    return combo.every(index => { //iterate over those 3 indexes to find board cells with matching indexes
      return board[index] === currentSymbol // check if cells with matching indexes contain the current symbol
    })
  })

  console.log('win? ', result)
  return result // returns TRUE if current player won, returns FALSE if there is no win i.e. there's a draw or game continues
}


export const checkForDraw = (board) => { // checking grid if grid is full
  const result = board.every(cell => {  // i.e. every cell has 'x' or 'o'
      return cell === 'x' || cell === 'o'
  })

  console.log('draw? ', result)
  return result //returns TRUE if there is a draw, FALSE if there is no draw
}