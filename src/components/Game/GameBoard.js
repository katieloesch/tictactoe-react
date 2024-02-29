import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

import Cell from './Cell';
import './GameBoard.scss';
import { boardTemplate, sessionTemplate1, sessionTemplate2, checkForWin, checkForDraw, skynetMove } from './helper';

// import { tl1, tl2, tl3, tl4 } from './helperFunctions';

const GameBoard = () => {
  const [board, setBoard] = useState(boardTemplate)
  const [gridStatus, setGridStatus] = useState(null)
  const [xCurrent, setXCurrent] = useState('');
  const [winner, setWinner] = useState(null)
  const [won, setWon] = useState(false)
  const [session, setSession] = useState(sessionTemplate1)

  useEffect(() => {
    console.log('b', board);
  }, [board]);
  

  const  clearAllCells = () => {
    setBoard(boardTemplate)
  }

  const startGame = (e) => {
    if (e.target.id === 'btn-start-2-player-game') {
      setSession(sessionTemplate2)
    } else {
      setSession(sessionTemplate1)
    }

    initialiseGame()
    gsap.fromTo(e.target.parentNode, { y: 0 }, { duration: 1.2, y: 2000, ease: "power2.inOut" }); //after start game btn is clicked it moves down
    setTimeout(function() {e.target.remove()}, 1200);                   //and then it disappears
  }

  const initialiseGame = () => {
    console.log('starting game....')
    clearAllCells();

    if (session.gamesPlayed === 0) {    //if this is the first game
      setXCurrent(true);  // x symbol/player1 starts by default
      setGridStatus('x')
      // yourTurn(player1)  
                               
    } else if (session.gamesPlayed%2 === 0) {   //After the first round(0), players take turns starting game
        setXCurrent(true);  
        setGridStatus('x')         // so x symbol starts for even number or games (i.e. 0, 2, 4, 6, etc)
        // yourTurn(player1)
    } else {
        setGridStatus('o')
        setXCurrent(false);      //so o symbol starts for odd number of games (i.e. 1, 3, 5, 7, etc)
        // yourTurn(player2)
    }   
  }

  const switchTurns = () => {
    setXCurrent(!xCurrent)
    setGridStatus(gridStatus === 'x' ? 'o' : 'x')
                 
    // if ((xCurrent && player1.symbol === 'x') || (!xCurrent && player1.symbol === 'o')) {
    //     // yourTurn(player1)
    //     console.log('your turn player 1')
    // } else if ((xCurrent && player1.symbol !== 'x') || (!xCurrent && player1.symbol !== 'o')) {
    //    console.log('your turn player 2')
    // } else {
    //     // yourTurn(undefined)
    // }

  }

  const skynetMove = (board) => {

    
    const emptyCells = board.reduce((acc, current, index) => {
      if (current === 'empty') {
        acc.push(index);
      }
      return acc;
    }, []);

    const randomIndex = Math.floor(Math.random() * emptyCells.length)
  
    console.log(emptyCells)

    const updatedBoard = [...board]
    updatedBoard[randomIndex] = session.skynet.symbol
    setBoard(updatedBoard)


    const win = checkForWin(board, session.skynet.symbol) // returns boolean
    const draw = checkForDraw(board) // returns boolean

  }

  const handleCellClick = (e, id) => {
    let currentSymbol;
    //check whose turn it is
    if (session.players === 2) {
      currentSymbol = xCurrent ? 'x' : 'o';
    } else {
      currentSymbol = session.player.symbol
    }
    
    //update the board state variable
    const updatedBoard = [...board]
    updatedBoard[id] = currentSymbol
    setBoard(updatedBoard)


    //display move on screen
    e.target.classList.remove('empty')
    e.target.classList.add(currentSymbol)

    //check for win / draw
    console.log('board: ', updatedBoard)
    const win = checkForWin(board, currentSymbol) // returns boolean
    const draw = checkForDraw(board) // returns boolean

    if (!win && !draw) {
      if (session.players === 2) {
        switchTurns()
      } else {
        skynetMove(board)
      }


    } else if (win) {
      console.log('winnn')

      if (session.players === 2) {
        if (currentSymbol === session.player1.symbol) {
          setWinner(session.player1)
          const updatedSession = {...session}
          updatedSession.player1.wins += 1
          setSession(updatedSession)
          console.log('player 1 (x) wins')
        } else if (currentSymbol === session.player2.symbol) {
          setWinner(session.player2)
          const updatedSession = {...session}
          updatedSession.player2.wins += 1
          setSession(updatedSession)
          console.log('player 2 (o) wins')
        }
      } else {

        if (currentSymbol === session.player.symbol) {
          setWinner(session.player)
          const updatedSession = {...session}
          updatedSession.player.wins += 1
          setSession(updatedSession)
          console.log('player (x) wins')
        } else if (currentSymbol === session.skynet.symbol) {
          setWinner(session.skynet)
          const updatedSession = {...session}
          updatedSession.skynet.wins += 1
          setSession(updatedSession)
          console.log('computer wins')
        }
       
      }
      
 



    } else if (draw) {
      console.log('drawww')
    }

    // if both false, switch turns

    // // check if current player won or if grid is full
    // if (checkForWin(currentSymbol)) {   //if one of the players won
    //     // gameEnd(false)                  //the game ends (the argument is false because there is no draw)
    //     console.log('game over')
    // } else if (checkForDraw()) {        //if there is a draw
    //     // gameEnd(true)                   //the game ends (argument is true because there is a draw)
    //     console.log('draw!')
    // } else {                            //if no win or draw the game continues
    //     switchTurns()                   //and it's the other player's turn
    //     // activateHoverSymbol()
    // }

  }

  return (
    <div className='grid-container flex'>
        <div className={`grid ${gridStatus}`}>
        
        {
          board.map((cell, index) => (
            <Cell 
            key={`cell-${index}`}
            handleCellClick={handleCellClick}
            cellId={index}
            content={cell}
            />
          ))
        }
        
        </div>

        <div className='overlay-start-game-btns'>
          <h2>Start Game</h2>
          <button className='btn start-game' id='btn-start-2-player-game' onClick={startGame}>
            2 players
          </button>
          <button className='btn start-game' id='btn-start-1-player-game' onClick={startGame}>
           1 player
          </button>
        </div>

    </div>
  )
}

export default GameBoard
