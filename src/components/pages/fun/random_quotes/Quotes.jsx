import React, { useState, useEffect } from 'react'
import quotes from './quotes_data'

const Quotes = () => {
  const [showQuote, setShowQuote] = useState()

  // const getQuote = () => {
  // let displayQuote = quotes[1]
  // console.log(displayQuote)
  // }

  useEffect(() => {
    setShowQuote(quotes[1])
  }, [showQuote])

  return (
    <div>
      <button onClick={setShowQuote()}>quote</button>
      <h1>{showQuote}</h1>
    </div>
  )
}

export default Quotes
