import React, { useEffect, useState } from 'react';
import JSConfetti from 'js-confetti';

import { GameState } from './GameState'

import Grid from './Grid/Grid';
import TogglePlayers from './TogglePlayers/TogglePlayers';
import Settings from './Settings/Settings';
import PlayerEdit from './PlayerEdit/PlayerEdit';
import MessageGameOver from './Message/MessageGameOver';
import TurnDisplay from './TurnDispay/TurnDisplay';


import sounds from '../../assets/soundEffects/sounds';
import './Tictactoe.scss';

const PLAYER_X = 'x';
const PLAYER_O = 'o';
const jsConfetti = new JSConfetti();

const checkWinDraw = (board, setStrikePosition, setGameState, session, setSession) => {

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
      
      const updatedSession = {...session};

      if (tile0 === PLAYER_X) {
        setGameState(GameState.xWins);
        updatedSession.x.wins += 1;
        updatedSession.gamesPlayed += 1;

        if (!session.mute) {
          sounds.winSound.play();
        }
      
        jsConfetti.addConfetti();

       

      } else {
        setGameState(GameState.oWins);
        updatedSession.o.wins += 1;
        updatedSession.gamesPlayed += 1;

        if (!session.mute) {
          sounds.winSound.play();
        }

        jsConfetti.addConfetti();
      }
      setSession(updatedSession);
      return; // if there is a winner, no need  to check for draw
    }
  }

  //check for draw
  const boardFull = board.every((tile) => (tile !== null));
  if (boardFull) {
    setGameState(GameState.draw);
    if (!session.mute) {
      sounds.drawSound.play();
    }

    const updatedSession = {...session};
    updatedSession.gamesPlayed += 1;
    updatedSession.draws += 1;
    setSession(updatedSession);

  }
}

const Tictactoe = () => {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentSymbol, setCurrentSymbol] = useState(PLAYER_X);
  const [strikePosition, setStrikePosition] = useState('');
  const [gameState, setGameState] = useState(GameState.inProgress)
  const [showEditForm, setShowEditForm] = useState('hide')
  const [session, setSession] = useState({
    x: {
      symbol: 'x',
      name: 'Player 1',
      wins: 0,
      color: '#ffffff'
    },
    o: {
      symbol: 'o',
      name: 'Player 2',
      wins: 0,
      color: '#ffffff'
    },
    draws: 0,
    players: 2,
    gamesPlayed: 0,
    mute: false
  })

  const switchTurns = () => {
    if (currentSymbol === PLAYER_X) {
      setCurrentSymbol(PLAYER_O);
    } else {
      setCurrentSymbol(PLAYER_X);
    }
  }

  const computerMove = (board) => {
    
    setCurrentSymbol(PLAYER_O);
    const emptyCells = [];

    board.forEach((cell, index) => {
      if (cell === null) {
        emptyCells.push(index)
      }
    })

    const randomIndex = Math.floor(Math.random() * emptyCells.length)
    const computerMove = emptyCells[randomIndex]
   
    const updatedBoard = [...board];
    updatedBoard[computerMove] = session.o.symbol;
    setBoard(updatedBoard);
    setCurrentSymbol(PLAYER_X);

  }

  const handleTileClick = (index) => {

    if (gameState !== GameState.inProgress) {
      return;
    }

    if (board[index] !== null) {
      return;
    }

    const updatedBoard = [...board];
    updatedBoard[index] = currentSymbol;
    setBoard(board => updatedBoard);

    if (session.players === 2) {
      switchTurns();
    } else {
      computerMove(updatedBoard);
    }

  }

  const resetGame = () => {
    setGameState(GameState.inProgress);
    setBoard(Array(9).fill(null));
    setStrikePosition(null);
    //setCurrentSymbol(PLAYER_X) // need to track even/odd number of games

    if (session.gamesPlayed === 0) {    //if this is the first game
      setCurrentSymbol(PLAYER_X);  // x symbol/player1 starts by default

    } else if (session.gamesPlayed%2 === 0) {   //After the first round(0), players take turns starting game
       setCurrentSymbol(PLAYER_X);          // so x symbol starts for even number or games (i.e. 0, 2, 4, 6, etc)
        
    } else {                         //player2 starts the second round(1)
        setCurrentSymbol(PLAYER_O);      //so o symbol starts for odd number of games (i.e. 1, 3, 5, 7, etc)
        if (session.players === 1 ) {
          computerMove(Array(9).fill(null));
        }
    }
  }


  useEffect(() => {
    checkWinDraw(board, setStrikePosition, setGameState, session, setSession);
  }, [board])

  useEffect(() => {

    if (board.some(tile => tile !== null)) {
      if (!session.mute) {

        if (currentSymbol === PLAYER_X) {
          sounds.clickXSound.play()
        } else {
          sounds.clickOSound.play()
        }
      }
    }
  }, [board, currentSymbol])

  // useEffect(() => {
  //   if (gameState !== GameState.inProgress) {
  //     if (!session.mute) {
  //       soundGameOver.play();
  //     }
  //   }
  // }, [gameState])

  return (
    <div className='tictactoe flex'>
      
      <Grid
        board={board}
        currentSymbol={currentSymbol}
        handleTileClick={handleTileClick}
        strikePosition={strikePosition}
        gameState={gameState}
      />

      <TogglePlayers session={session} setSession={setSession} resetGame={resetGame}/>


      <Settings session={session} setSession={setSession} resetGame={resetGame} />

      <div className='scores flex'>

        <div className='scores-top flex'>
          <button className='btn' id='btn-edit' onClick={() => {setShowEditForm('show')}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>
          </button>
          
          <div className='score-x flex'>
            <span><svg xmlns="http://www.w3.org/2000/svg" width='1em' height='1em' viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>            - {session.x.name}: </span>
            <span>{session.x.wins}</span>
          </div>

          <div className='score-o flex'>
            <span><b>O</b> - {session.o.name}: </span>
            <span>{session.o.wins}</span>
          </div>

        </div>

        <div className='scores-bottom flex'>
          <div className='draws flex'>
            <span>draws: </span>
            <span>{session.draws}</span>
          </div>

          <div className='games-played flex'>
            <span>games played: </span>
            <span>{session.gamesPlayed}</span>
          </div>

        </div>


      
      </div>

      <TurnDisplay session={session} currentSymbol={currentSymbol} gameState={gameState} />

      <MessageGameOver gameState={gameState} resetGame={resetGame} session={session} />
      <PlayerEdit session={session} setSession={setSession} display={showEditForm} setDisplay={setShowEditForm} />
      
    </div>
  )
}

export default Tictactoe
