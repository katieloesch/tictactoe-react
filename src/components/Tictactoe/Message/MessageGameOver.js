import React from 'react';
import { GameState } from '../GameState';
import './Message.scss';
import BtnPlayAgain from './BtnPlayAgain';

const MessageGameOver = ({ gameState, resetGame }) => {

    switch(gameState) {
        case GameState.inProgress:
            return <div></div>;
        case GameState.xWins:
            return <div className='message-game-over'><span>X wins</span><BtnPlayAgain gameState={gameState} resetGame={resetGame} /></div>;
        case GameState.oWins:
            return <div className='message-game-over'><span>O wins</span><BtnPlayAgain gameState={gameState} resetGame={resetGame} /></div>;
        case GameState.draw:
            return <div className='message-game-over'><span>Draw</span><BtnPlayAgain gameState={gameState} resetGame={resetGame} /></div>;
        default:
            return <div></div>;
    }
}

export default MessageGameOver
