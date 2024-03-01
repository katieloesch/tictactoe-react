import React, { useEffect, useState } from 'react';
import JSConfetti from 'js-confetti';

import { GameState } from './GameState'

import Grid from './Grid/Grid';
import TogglePlayers from './TogglePlayers/TogglePlayers';
import Settings from './Settings/Settings';
import PlayerEdit from './PlayerEdit/PlayerEdit';
import MessageGameOver from './Message/MessageGameOver';

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

  const handleTileClick = (index) => {

    if (gameState !== GameState.inProgress) {
      return;
    }

    if (board[index] !== null) {
      return;
    }

    const updatedBoard = [...board];
    updatedBoard[index] = currentSymbol;
    setBoard(updatedBoard);

    if (session.players == 2) {
      switchTurns();
    } else {
      //computer's turn
    }

  }

  const resetGame = () => {
    setGameState(GameState.inProgress);
    setBoard(Array(9).fill(null));
    //setCurrentSymbol(PLAYER_X) // need to track even/odd number of games

    if (session.gamesPlayed === 0) {    //if this is the first game
      setCurrentSymbol(PLAYER_X);  // x symbol/player1 starts by default

    } else if (session.gamesPlayed%2 === 0) {   //After the first round(0), players take turns starting game
       setCurrentSymbol(PLAYER_X);          // so x symbol starts for even number or games (i.e. 0, 2, 4, 6, etc)
        
    } else {                         //player2 starts the second round(1)
        setCurrentSymbol(PLAYER_O);      //so o symbol starts for odd number of games (i.e. 1, 3, 5, 7, etc)
    }

    setStrikePosition(null);
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
    <div className='tictactoe'>
      
      <Grid
        board={board}
        currentSymbol={currentSymbol}
        handleTileClick={handleTileClick}
        strikePosition={strikePosition}
        gameState={gameState}
      />

      <TogglePlayers session={session} setSession={setSession} resetGame={resetGame}/>

      <div className='stats flex'>
        <div className='draws flex'>
          <span>draws</span>
          <span>{session.draws}</span>
        </div>
        <div className='games-played flex'>
          <span>games played</span>
          <span>{session.gamesPlayed}</span>
        </div>
      </div>

      <Settings session={session} setSession={setSession} resetGame={resetGame} />

      <div className='scores flex'>
       
          <div className='score-x flex'>
            <span>{session.x.name} - X</span>
            <span>{session.x.wins}</span>
          </div>

          <button className='btn btn-edit' onClick={() => {setShowEditForm('show')}}>edit</button>

          <div className='score-o flex'>
            <span>{session.o.name} - O</span>
            <span>{session.o.wins}</span>
           
          </div>
      
      </div>

      <MessageGameOver gameState={gameState} resetGame={resetGame} session={session} />
      <PlayerEdit session={session} setSession={setSession} display={showEditForm} setDisplay={setShowEditForm} />
      
    </div>
  )
}

export default Tictactoe
