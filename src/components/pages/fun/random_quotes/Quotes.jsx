import React, { useState } from 'react'
import quotes from './quotes_data'
import './Quotes.css'

const Quotes = () => {
  const [showQuote, setShowQuote] = useState('')

  return (
    <div className="main_quotes_container">
      <button onClick={() => setShowQuote(quotes[Math.floor(window.Math.random() * 95)])} className="quote_btn">quote</button>
      <div>{showQuote}</div>
    </div>
  )
}

export default Quotes
