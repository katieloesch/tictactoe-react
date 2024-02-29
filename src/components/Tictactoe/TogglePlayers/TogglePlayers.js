import React from 'react'
import './TogglePlayers.scss'

const TogglePlayers = () => {
  return (
    <div className='toggle-1-2-players flex'>

        <span>
            <input type='checkbox' id='switcher'/>
            <label for='switcher'></label>
        </span>

    </div>
  )
}

export default TogglePlayers
