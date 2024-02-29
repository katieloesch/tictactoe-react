import React from 'react'
import Tile from './Tile'
import Strike from '../Strike/Strike'
import './Grid.scss'

const Grid = ({ board, currentSymbol, handleTileClick, strikePosition }) => {
  return (
    <div className={`grid ${currentSymbol}`}>

    {board.map((content, index) => (
      <Tile key={`tile-${index}`} content={content} onClick={() => (handleTileClick(index))} />
    ))}

    {/*
          
    <Tile value={board[0]} onClick={() => (handleTileClick(0))} />
    <Tile value={board[1]} onClick={() => (handleTileClick(1))} />
    <Tile value={board[2]} onClick={() => (handleTileClick(2))} />
    <Tile value={board[3]} onClick={() => (handleTileClick(3))} />
    <Tile value={board[4]} onClick={() => (handleTileClick(4))} />
    <Tile value={board[5]} onClick={() => (handleTileClick(5))} />
    <Tile value={board[6]} onClick={() => (handleTileClick(6))} />
    <Tile value={board[7]} onClick={() => (handleTileClick(7))} />
    <Tile value={board[8]} onClick={() => (handleTileClick(8))} />
  
    */}

      <Strike strikePosition={strikePosition} />

    </div>
  )
}

export default Grid
