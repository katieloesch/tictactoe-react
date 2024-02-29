import React, { useEffect, useState } from 'react';
import Grid from './Grid/Grid';
import './Tictactoe.scss';

const PLAYER_X = 'x';
const PLAYER_O = 'o';

const checkWinner = (board, setStrikePosition) => {

  const winningCombinations = [

    // horizontal combinations
    { combo: [0, 1, 2], strikePosition: 'strike-row-1' },
    { combo: [3, 4, 5], strikePosition: 'strike-row-2' },
    { combo: [6, 7, 8], strikePosition: 'strike-row-3' },

    // vertical combinations
    { combo: [0, 3, 6], strikePosition: 'strike-column-1' },
    { combo: [1, 4, 7], strikePosition: 'strike-column-2' },
    { combo: [2, 5, 8], strikePosition: 'strike-column-3' },

    // diagonal combinations
    { combo: [0, 4, 8], strikePosition: 'strike-diagonal-1' },
    { combo: [2, 4, 6], strikePosition: 'strike-diagonal-2' },
  
  ]

  for (const { combo, strikePosition } of winningCombinations) {
    
    const tile0 = board[combo[0]];
    const tile1 = board[combo[1]];
    const tile2 = board[combo[2]];

    if (
      tile0 !== null &&
      tile0 === tile1 &&
      tile0 === tile2
    ) {
      setStrikePosition(strikePosition)

    }

  }




}

const Tictactoe = () => {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentSymbol, setCurrentSymbol] = useState(PLAYER_X);
  const [strikePosition, setStrikePosition] = useState('');


  const switchTurns = () => {
    if (currentSymbol === PLAYER_X) {
      setCurrentSymbol(PLAYER_O);
    } else {
      setCurrentSymbol(PLAYER_X);
    }
  }

  const handleTileClick = (index) => {
    if (board[index] !== null) {
      return;
    }

    const updatedBoard = [...board];
    updatedBoard[index] = currentSymbol;
    setBoard(updatedBoard);

    // check for win/ draw

    switchTurns();


  }

  useEffect(() => {

    checkWinner(board, setStrikePosition);

  }, [board])

  return (
    <div className='tictactoe'>
      
      <Grid
        board={board}
        currentSymbol={currentSymbol}
        handleTileClick={handleTileClick}
        strikePosition={strikePosition}
      />
    
      </div>
  )
}

export default Tictactoe
