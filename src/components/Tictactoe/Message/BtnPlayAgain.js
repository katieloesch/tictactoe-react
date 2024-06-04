import React from 'react';
import { GameState } from '../GameState';
import sounds from '../../../assets/soundEffects/sounds';
import './Message.scss';

const BtnPlayAgain = ({ gameState, resetGame, mute, slideOut }) => {

    if (gameState === GameState.inProgress) {
        return;
    };

    const handlePlayAgain = () => {
      slideOut();
      
      if (!mute) {
        sounds.clickOSound.play();
      }
    };

  return (
    <button className='btn' id='btn-play-again' onClick={handlePlayAgain}>
        Play Again
    </button>
  )
}

export default BtnPlayAgain