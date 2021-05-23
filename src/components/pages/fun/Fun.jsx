import React from 'react'
import RPS from './RPS/RPS'
import './Fun.css'
import Quotes from './random_quotes/Quotes'

const Fun = () => {
  return (
    <div className="mane_fun_page_container">
      <h1>
        I like to have fun. Hope you do to. I want this page to be more then
        just a presentation of me but also a place you can stay an have fun.
      </h1>
      <h3>At the moment I can only offer you a rock, paper, scissor game and a quote generator</h3>
      <RPS />
      <Quotes />
    </div>
  )
}

export default Fun
