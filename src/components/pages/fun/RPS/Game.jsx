import React, { Component } from 'react'
import DisplayPlayer from './DisplayPlayer'
import './RPS.css'

const dudes = ['rock', 'paper', 'scissor', 'starter']
class Game extends Component {
  state = {
    player: dudes[3],
    computer: dudes[3],
    winner: '',
  }

  startFight = () => {
    let count = 0
    let interval = setInterval(() => {
      count++
      this.setState({
        computer: dudes[Math.floor(window.Math.random() * 3)],
        winner: '',
      })
      if (count > 5) {
        clearInterval(interval)
        this.setState({
          winner: this.champion(),
        })
      }
    }, 100)
  }

  champion = () => {
    const { player, computer } = this.state
    if (
      (player === 'rock' && computer === 'scissor') ||
      (player === 'scissor' && computer === 'paper') ||
      (player === 'paper' && computer === 'rock')
    ) {
      return 'YOU WIN'
    } else if (player === computer) {
      return "Friends don't fight friends"
    } else {
      return 'You lose!'
    }
  }

  chooseDude = (dude) => {
    this.setState({
      player: dude,
    })
  }

  render() {
    const { player, computer, winner } = this.state
    return (
      <div className="game_container">
        <h1>Rock Paper Scissor. Special</h1>
        <h3>
          This game is similar to Rock, Paper, Scissor, but with a twist!
          Instead of the normal characters you will be choosing between Bob,
          Fred and Kody. One of them is smart, the other one is strong and the
          last one is cunning. The smart one outsmarts the cunning one. The
          cunning one will cheat and win over the strong one. The strong one
          will knock out the smart one. the only problem is, I don't know who is
          the strong, smart och cunning one.
        </h3>
        <div id="playerSelection" className="player_display">
          <DisplayPlayer dude={player} />
          <DisplayPlayer dude={computer} />
        </div>
        <div className="button_container">
          <div className="select_button_container">
            <button onClick={() => this.chooseDude('rock')}>Bob</button>
            <button onClick={() => this.chooseDude('paper')}>Fred</button>
            <button onClick={() => this.chooseDude('scissor')}>Kody</button>
          </div>
          <button onClick={this.startFight} className="fight_btn">Fight!</button>

          <div className="winner">{winner && this.champion()}</div>
        </div>
      </div>
    )
  }
}

export default Game
