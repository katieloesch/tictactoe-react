import React from 'react'
import './GameBoard.scss'

const Cell = ({handleCellClick, cellId, content}) => {
  return (
    <div className={`cell ${content}`} onClick={(e) => (handleCellClick(e, cellId))} id={cellId}>
    </div>
  )
}

export default Cell
