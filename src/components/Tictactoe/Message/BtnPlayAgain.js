import React from 'react'
import { GameState } from '../GameState'
import './Message.scss'

const BtnPlayAgain = ({ gameState, resetGame }) => {

    if (gameState === GameState.inProgress) {
        return;
    }

  return (
    <button className='btn' id='btn-play-again' onClick={resetGame}>
        Play Again
    </button>
  )
}

export default BtnPlayAgain
