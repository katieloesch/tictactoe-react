import React from 'react'
import './TogglePlayers.scss'

const TogglePlayers = ({ session, setSession, resetGame }) => {

    const handleToggleChange = (e) => {
    
        if (e.target.checked) {
            // true: 2 players
            // false: 1 player

            setSession({
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

            console.log('2 player mode')

        } else {

           setSession({
                x: {
                  symbol: 'x',
                  name: 'Player',
                  wins: 0,
                  color: '#ffffff'
                },
                o: {
                  symbol: 'o',
                  name: 'Computer',
                  wins: 0,
                  color: '#ffffff'
                },
                draws: 0,
                players: 1,
                gamesPlayed: 0,
                mute: false
              })
           
            console.log('1 player mode')
        }

        resetGame();
    }

  return (
    <div className='toggle-1-2-players flex'>

        <span>
            <input type='checkbox' id='switcher' checked={session.players ? session.players === 2 : false} onChange={handleToggleChange} />

            <label htmlFor='switcher'></label>
        </span>

    </div>
  )
}

export default TogglePlayers
