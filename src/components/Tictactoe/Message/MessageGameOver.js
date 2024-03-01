import React from 'react';
import { GameState } from '../GameState';
import './Message.scss';
import BtnPlayAgain from './BtnPlayAgain';

const MessageGameOver = ({ gameState, resetGame, session }) => {

    switch(gameState) {
        case GameState.inProgress:
            return <div></div>;
        case GameState.xWins:
            return <div className={`message-game-over ${gameState === 0 && 'x-winner'}`}><span>{session.x.name} wins!</span><BtnPlayAgain gameState={gameState} resetGame={resetGame} /></div>;
        case GameState.oWins:
            return <div className={`message-game-over ${gameState === 1 && 'o-winner'}`}><span>{session.o.name} wins!</span><BtnPlayAgain gameState={gameState} resetGame={resetGame} /></div>;
        case GameState.draw:
            return <div className={`message-game-over ${gameState === 2 && 'draw'}`}><span>Draw!</span><BtnPlayAgain gameState={gameState} resetGame={resetGame} /></div>;
        default:
            return <div></div>;
    }


}

export default MessageGameOver
