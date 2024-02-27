import React from 'react'
import Cell from './Cell';
import './GameBoard.scss'

const GameBoard = () => {
  return (
    <div className='grid-container flex'>
        <div className='grid'>
        
        {/* row 1 */}
            <Cell />
            <Cell />
            <Cell />

        {/* row 2 */}
            <Cell />
            <Cell />
            <Cell />

        {/* row 3 */}
            <Cell />
            <Cell />
            <Cell />
        
        </div>
    </div>
  )
}

export default GameBoard
