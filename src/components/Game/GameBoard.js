import React, { useState } from 'react';
import gsap from 'gsap';

import Cell from './Cell';
import './GameBoard.scss';
import { boardTemplate, sessionTemplate } from './templates';

// import { tl1, tl2, tl3, tl4 } from './helperFunctions';
// import { winningCombinations } from './helperFunctions';


const GameBoard = () => {
  const [board, setBoard] = useState(boardTemplate)
  const [gridStatus, setGridStatus] = useState(null)
  const [xCurrent, setXCurrent] = useState('');
  const [session, setSession] = useState(sessionTemplate)

  const [player1, setPlayer1] = useState({
    name: 'Player 1',
    symbol: '',
    wins: 0,
    cells: [],
    color: 'white'

  })

  const [player2, setPlayer2] = useState(
    {
      name: 'Player 2',
      symbol: '',
      wins: 0,
      cells: [],
      color: 'white'
    })




  //timelines for transitions
  let gamesPlayed = 0; //number of games played
  let drawScore = 0; //number of draws

  let mute = false; //when false -> no sounds play, when true sound effects play
  let newColorPicked = [] //first element of array is which player picked the color, second is which color they picked
  
  
  const xMove = 'x'; // setting CSS 'x' class to a variable -> x appears on cell when user clicks
  const oMove = 'o'; // setting CSS 'o' class to a variable -> o appears on cell when user clicks

  const  clearAllCells = () => {
    setBoard(boardTemplate)
  }

  const startGame = (e) => {
    // if (!mute) {
    //   soundClick.play()
    // }

    initialiseGame()
    gsap.fromTo(e.target, { y: 0 }, { duration: 1.2, y: 2000, ease: "power2.inOut" }); //after start game btn is clicked it moves down
    setTimeout(function() {e.target.remove()}, 1200);                   //and then it disappears
  }

  const initialiseGame = () => {
    console.log('starting game....')
    clearAllCells();

    if (session.gamesPlayed === 0) {    //if this is the first game
      setXCurrent(true);  // x symbol/player1 starts by default
      // yourTurn(player1)  //player1's name is displayed on screen 
                                //to tell them it's their turn
                                setGridStatus('x')

    } else if (gamesPlayed%2 === 0) {   //After the first round(0), players take turns starting game
        setXCurrent(true);  
        setGridStatus('x')         // so x symbol starts for even number or games (i.e. 0, 2, 4, 6, etc)
        // yourTurn(player1)
        
    } else {                         //player2 starts the second round(1)
        setXCurrent(false);      //so o symbol starts for odd number of games (i.e. 1, 3, 5, 7, etc)
        // yourTurn(player2)     
        setGridStatus('o')
    }   
  }

  const handleCellClick = (e) => {
    //check whose turn it is
    const currentSymbol = xCurrent ? xMove : oMove;
    
    //display move on screen
    e.target.classList.remove('empty')
    e.target.classList.add(currentSymbol)

    console.log(gridStatus)
    
  }

  return (
    <div className='grid-container flex'>
        <div className={`grid ${gridStatus}`}>
        
        {
          board.map((cell) => (
            <Cell 
            key={`cell-${cell.id}`}
            handleCellClick={handleCellClick}
            cellId={cell.id}
            content={cell.content}
            
            />
          ))
        }
        
        </div>

        <button className='btn' id='btn-start-game' onClick={startGame}>
          Start Game
        </button>
    </div>
  )
}

export default GameBoard
