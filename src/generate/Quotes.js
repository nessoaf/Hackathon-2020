import React from 'react'
import QuoteButton from './QuoteButton'
import { Card } from 'react-bootstrap'


export default function Quotes() {
  return (
    <div className="quote-container">
      <Card className="m-5 w-50">
        <Card.Body>
        <img className='image' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/inspirational-quotes-william-james-1562000241.png?crop=1xw:1xh;center,top&resize=980:*" />
        
        </Card.Body>
      </Card>
      <QuoteButton />
    </div>
  )
}