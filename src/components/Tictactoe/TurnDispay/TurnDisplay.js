import React from 'react'
import './TurnDisplay.scss'

const TurnDisplay = ({ session, currentSymbol, gameState }) => {

  return (
    <div className='turn-display'>
        { gameState===3 ? <h3>{`${currentSymbol === 'x' ? session.x.name : session.o.name } it's your turn!`}</h3> : <h3>Game Over!</h3>}
    </div>
  )
}

export default TurnDisplay
