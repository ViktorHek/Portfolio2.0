import React, { useState } from 'react'
import quotes from './quotes_data'
import './Quotes.css'

const Quotes = () => {
  const [showQuote, setShowQuote] = useState('')

  return (
    <div className="main_quotes_container">
      <p className="quote_text">{showQuote}</p>
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
