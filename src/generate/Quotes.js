import React, {useState} from 'react'
//import QuoteButton from './QuoteButton'
import { Card } from 'react-bootstrap'
import axios from 'axios'
import  {Button}  from 'react-bootstrap'



export default function Quotes() {
  let [quote, setQuote] = useState([])
  let [image, setImage] = useState('')

  let quotes = [
    "You got this champ!",
    "Sometimes you have to see the worst in life to appreciate the best in life.",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - 'Jimmy Dean'",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. - 'Albert Einstein'",
    'Nothing is impossible. The word itself says "I\'m possible!" - \'Audrey Hepburn\'',
    "It is never too late to be what you might have been. - 'George Eliot'",
    "Happiness is not by chance, but by choice. - 'Jim Rohn'"
  ]
  let randInt = Math.floor(Math.random * quotes.length)
  const handleQuote = () => {
    setQuote(quotes[randInt])
  } 

  const handleClick= (e) => {
    //e.preventDefault()
    handleQuote()
    axios.get('https://picsum.photos/200/300')
      .then(response => {
        setImage(response)
      }).catch(err => {
        console.log(err)
      })
    console.log(image)

  }
  console.log(quote)


  return (
    <div>
      <Card className="m-5 w-a">
        <Card.Body>

          <img className='image' src={image} alt="random pic"/>
          <h3><span>{quote}</span></h3>
     
        </Card.Body>
      </Card>
      <Button onClick={handleClick}>Generate Quote</Button>
    </div>
  )
}