import React from 'react'
import './../Grid/Grid.scss'

const Tile = ({ content, onClick }) => {
  return (
    <div className={`tile ${content}`} onClick={onClick}>
      
    </div>
  )
}

export default Tile
