import React from 'react'

export default function Quote({quote}) {
    
  return (
    <p>
        {quote.text} <br/>
        <span>- {quote.author}</span>
      </p>
  )
}
