import React, { useState } from 'react'
import quotes from './quotes_data'
import './Quotes.css'

const Quotes = () => {
  const [showQuote, setShowQuote] = useState('')

  // function GetQuotes(props) {
  //   const text = props.text
  //   const newText = text.split('\n').map(str => <p>{str}</p>)
  //   debugger
  //   return newText
  // }

  // switch (showQuote) {
  //   case showQuote.length > 40:
  //     debugger
  //     return showQuote
  //     break;
  //   case showQuote.length = 0:
  //     return [showQuote.text1, showQuote.text1]
  //     break;
  //   default:
  //     return 'hello'
  //     break;
  // }

  return (
    <div className="main_quotes_container">
      {/* <GetQuotes text={'hello\nand hi'} /> */}
      {showQuote ? <p className="quote_text">{showQuote}</p> : null}
      <img
        src="/images/doddle_bubble.jpg"
        alt="sorry :("
        className="quote_img"
      />
      <button
        onClick={() =>
          setShowQuote(quotes[Math.floor(window.Math.random() * 95)])
        }
        className="quote_btn"
      >
        quote
      </button>
    </div>
  )
}

export default Quotes
