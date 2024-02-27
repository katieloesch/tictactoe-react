import React from 'react'
import './GameBoard.scss'

const Cell = ({handleCellClick, cellId, content}) => {
  return (
    <div className={`cell ${content}`} onClick={handleCellClick} id={cellId}>
      
    </div>
  )
}

export default Cell
