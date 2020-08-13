import React from 'react'
import Quotes from '../generate/Quotes'

export default function Home() {
  return (
    <div>   
      <h1 className="home-header content">Random Quote</h1>   
      <Quotes />
    </div>
  )
}