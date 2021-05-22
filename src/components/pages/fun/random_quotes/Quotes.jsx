import React, { useState } from 'react'
import quotes from './quotes_data'

const Quotes = (n) => {
  const [showQuote, setShowQuote] = useState('')

  return (
    <div>
      <button onClick={() => setShowQuote(quotes[Math.floor(window.Math.random() * 95)])}>quote</button>
      <div>{showQuote}</div>
    </div>
  )
}

export default Quotes
