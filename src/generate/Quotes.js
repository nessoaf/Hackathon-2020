import React, {useState} from 'react'
//import QuoteButton from './QuoteButton'
import { Card } from 'react-bootstrap'
//import axios from 'axios'
import  {Button}  from 'react-bootstrap'



export default function Quotes() {
  let [quote, setQuote] = useState('')
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

  let images = [
    "https://picsum.photos/id/10/800",
    "https://picsum.photos/id/100/800",
    "https://picsum.photos/id/1000/800",
    "https://picsum.photos/id/1006/800",
    "https://picsum.photos/id/1010/800",
    "https://picsum.photos/id/1015/800",
    "https://picsum.photos/id/1016/800",
    "https://picsum.photos/id/1018/800",
    "https://picsum.photos/id/1019/800",
    "https://picsum.photos/id/1021/800",
    "https://picsum.photos/id/1022/800",
    "https://picsum.photos/id/1025/800",
    "https://picsum.photos/id/1028/800",
    "https://picsum.photos/id/1032/800",
    "https://picsum.photos/id/1036/800",
    "https://picsum.photos/id/1037/800",
    "https://picsum.photos/id/1039/800",
    "https://picsum.photos/id/1043/800",
    "https://picsum.photos/id/1044/800",
    "https://picsum.photos/id/1049/800",
  ]
  let randInt = parseInt(Math.floor(Math.random() * quotes.length))
  let randImg = parseInt(Math.floor(Math.random() * images.length))
  const handleQuote = () => {
    setQuote(quotes[randInt])
  }
  
  const handleImage = () => {
    setImage(images[randImg])
  }

  const handleClick= (e) => {
    e.preventDefault()
    handleQuote()
    handleImage()
    console.log(image)

  }

  return (
    <div>
      <Card className="m-5 w-a">
        <Card.Body className="image">

          <img src={image} alt="random img"></img>
          <h3><span>{quote}</span></h3>
     
        </Card.Body>
      </Card>
      <Button onClick={handleClick}>Generate Quote</Button>
    </div>
  )
}