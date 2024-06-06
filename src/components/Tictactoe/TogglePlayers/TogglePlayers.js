import React from 'react'
import sounds from '../../../assets/soundEffects/sounds';
import './TogglePlayers.scss'
import { PLAYER_X } from '../helper';

const TogglePlayers = ({ session, setSession, resetGame, setCurrentSymbol }) => {

    const handleToggleChange = (e) => {

      if (!session.mute) {
        sounds.clickOSound.play();
      }
    
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

        setCurrentSymbol(PLAYER_X)
        resetGame();

        } else { // 1 player

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
        }
        
      setCurrentSymbol(PLAYER_X)
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
