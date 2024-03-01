import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { GameState } from '../GameState';
import BtnPlayAgain from './BtnPlayAgain';
import './Message.scss';


const MessageGameOver = ({ gameState, resetGame, session }) => {

    const messageRef = useRef(null);

    const slideOut = () => {
        gsap.to(messageRef.current, {
            y: '100vh',
            opacity: 0,
            duration: 0.5,
            ease: 'power3.in',
            onComplete: resetGame
           
        });
    };


    useEffect(() => {
        if (gameState !== GameState.inProgress) {
            gsap.to(messageRef.current, {
                y: '0vh', // Move up to the vertical center of the screen
                opacity: 1,
                duration: 1, // Duration in seconds, adjust as needed
                ease: 'power3.out', // Feel free to choose another easing function
               
            });
        }
    }, [gameState]);

    switch(gameState) {
        case GameState.inProgress:
            return <div></div>;
        case GameState.xWins:
            return <div ref={messageRef} className={`message-game-over ${gameState === 0 && 'x-winner'}`}><span>{session.x.name} wins!</span><BtnPlayAgain gameState={gameState} resetGame={resetGame} mute={session.mute} slideOut={slideOut} /></div>;
        case GameState.oWins:
            return <div ref={messageRef} className={`message-game-over ${gameState === 1 && 'o-winner'}`}><span>{session.o.name} wins!</span><BtnPlayAgain gameState={gameState} resetGame={resetGame} mute={session.mute} slideOut={slideOut} /></div>;
        case GameState.draw:
            return <div ref={messageRef} className={`message-game-over ${gameState === 2 && 'draw'}`}><span>Draw!</span><BtnPlayAgain gameState={gameState} resetGame={resetGame} mute={session.mute}  slideOut={slideOut} /></div>;
        default:
            return <div></div>;
    }
}

export default MessageGameOver
