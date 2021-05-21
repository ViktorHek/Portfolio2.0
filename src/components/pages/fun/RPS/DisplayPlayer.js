import React from 'react'
import './RPS.css'

const DisplayPlayer = ({ dude }) => {
  return (
    <div className="player">
      <img className="player-img"
        src={dude === 'rock'
          ? '/images/bob_grill.png'
          : dude === 'paper'
          ? '/images/fred.png'
          : dude === 'scissor'
          ? '/images/fat_RPS.png'
          : '/images/flower.png'} alt="PLAYER"
      />
    </div>
  )
}
export default DisplayPlayer
