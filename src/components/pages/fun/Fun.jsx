import React from 'react'
import Game from './RPS/Game'
import './Fun.css'

const Fun = () => {
  return (
    <div className="mane_fun_page_container">
      <h1>
        I like to have fun. Hope you do to. I want this page to be more then
        just a presentation of me but also a place you can stay an have fun.
      </h1>
      <h3>At the moment I can only offer you a rock, paper, scissor game</h3>
      <Game />
    </div>
  )
}

export default Fun
