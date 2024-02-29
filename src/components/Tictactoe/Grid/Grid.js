import React from 'react'
import Tile from './Tile'
import Strike from '../Strike/Strike'
import { GameState } from '../GameState';
import './Grid.scss'

const Grid = ({ board, currentSymbol, handleTileClick, strikePosition, gameState }) => {
  return (
    <div className={`grid ${gameState === GameState.inProgress && currentSymbol}`}>

    {board.map((content, index) => (
      <Tile key={`tile-${index}`} content={content} onClick={() => (handleTileClick(index))} />
    ))}

      <Strike strikePosition={strikePosition} />

    </div>
  )
}

export default Grid
