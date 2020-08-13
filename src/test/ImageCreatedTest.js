import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'




export default function ImageCreatedTest() {

  let [quote, setQuote] = useState(``)
  let [funny, setFunny] = useState(``)
  let [discovery, setDiscovery] = useState(``)
  let [uplifting, setUplifting] = useState(``)
  let [disney, setDisney] = useState(``)
  let [image, setImage] = useState(`./img/landingImg.png`)


  let quotes = [
    `You got this champ!`,
    `Sometimes you have to see the worst in life to appreciate the best in life.`,
    `I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean`,
    `Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein`,
    `Nothing is impossible. The word itself says I'm possible!. - Audrey Hepburn`,
    `It is never too late to be what you might have been. - George Eliot`,
    `Happiness is not by chance, but by choice. - Jim Rohn`,
    `People who wonder whether the glass is half empty or half full miss the point. The glass is refillable. – Simon Sinek`,
    `Think like a proton. Always positive.`,
    `No one is perfect — that’s why pencils have erasers.`,
    `Choose to be optimistic, it feels better. - Dalia Lama`,
    `The meaning of life is to find your gift. The purpose of life is to give it away.`,
    `If you focus on what you left behind, you will never be able to see what lies ahead. - Gusteau- Ratatoulle`
  ]

  let fun = [
    `I’m sick of following my dreams,man. I’m just going to ask where they’re going and hook up with’em later. -Mitch Hedberg`,
    `I always wanted to be somebody, but now I realize I should have been more specific. – Lily Tomlin`,
    `Before you Marry a person you should first make them use a computer with slow internet to see who they really are. -Will Ferrell`,
    `Maybe depression is the most reasonable response to all the crap around us. Maybe it’s the happy people who need medication. -Marc Maron`,
    `Chemistry can be a good and bad thing. Chemistry is good when you make love with it. Chemistry is bad when you make crack with it. -Adam Sandler`
  ]

  let discoveries = [
    `The real voyage of discovery consists not in seeking new landscapes, but in having new eyes. - Marcel Proust`,
    `Some beautiful paths can't be discovered without getting lost.― Erol Ozan`,
    `No great discovery was ever made without a bold guess.― Isaac Newton`,
    `Discovery consists of looking at the same thing as everyone else and thinking something different.― Albert Szent - Gyorgyi`,
    `We must risk going too far to discover just how far we can go.`,
  ]
  let upliftin = [
    `People who wonder whether the glass is half empty or half full miss the point.The glass is refillable.– Simon Sinek`,
    `Think like a proton.Always positive.– Anonymous`,
    `No one is perfect — that’s why pencils have erasers.– Anonymous`,
    `Choose to be optimistic, it feels better.– Dalai Lama`,
    `The meaning of life is to find your gift.The purpose of life is to give it away.– Anonymous`

  ]
  let disneys = [
    `If you focus on what you left behind, you will never be able to see what lies ahead. -- Gusteau (Ratatouille)`,
    `Oh yes, the past can hurt. But the way I see it, you can either run from it or learn from it. -- Rafiki (The Lion King)`,
    `All our dreams can come true, if we have the courage to pursue them. -- Walt Disney`,
    `Venture outside your comfort zone. The rewards are worth it. --Rapunzel (Tangled)`,
    `The things that make me different are the things that make me ME. -- Piglet (Winnie the Pooh)`
  ]









  let images = [
    `https://picsum.photos/id/10/800`,
    `https://picsum.photos/id/100/800`,
    `https://picsum.photos/id/1000/800`,
    `https://picsum.photos/id/1006/800`,
    `https://picsum.photos/id/1010/800`,
    `https://picsum.photos/id/1015/800`,
    `https://picsum.photos/id/1016/800`,
    `https://picsum.photos/id/1018/800`,
    `https://picsum.photos/id/1019/800`,
    `https://picsum.photos/id/1021/800`,
    `https://picsum.photos/id/1022/800`,
    `https://picsum.photos/id/1025/800`,
    `https://picsum.photos/id/1028/800`,
    `https://picsum.photos/id/1032/800`,
    `https://picsum.photos/id/1036/800`,
    `https://picsum.photos/id/1037/800`,
    `https://picsum.photos/id/1039/800`,
    `https://picsum.photos/id/1043/800`,
    `https://picsum.photos/id/1044/800`,
    `https://picsum.photos/id/1049/800`,
  ]
  let randQuotes = parseInt(Math.floor(Math.random() * quotes.length))
  let randFun = parseInt(Math.floor(Math.random() * fun.length))
  let randDiscovery = parseInt(Math.floor(Math.random() * discoveries.length))
  let randUpliftin = parseInt(Math.floor(Math.random() * upliftin.length))
  let randDis = parseInt(Math.floor(Math.random() * disneys.length))
  let randImg = parseInt(Math.floor(Math.random() * images.length))
  const handleQuote = () => {
    setQuote(quotes[randQuotes])
  }
  const handleFun = () => {
    setQuote(quotes[randFun])
  }
  const handleDiscovery = () => {
    setQuote(quotes[randDiscovery])
  }
  const handleUplifting = () => {
    setQuote(quotes[randUpliftin])
  }
  const handleDisney = () => {
    setQuote(quotes[randDis])
  }

  const handleImage = () => {
    setImage(images[randImg])
  }

  const handleClick = (e) => {
    e.preventDefault()
    handleQuote()
    handleImage()
    // console.log(image)
  }

  return (
    <div className="imagecreated-container">
      <Card className="ml-5 mr-5 mb-4 mt-5 w-80">
        <Card className='ml-5 mr-5 mb-4 mt-3 w-80'>
          <img src={image}></img>
          <div className=''>
            <h3 className='centered quotes'><span className=''>{quote}</span></h3>
          </div>
        </Card>
        <Button onClick={handleClick} className='content'>Generate Quote</Button>
      </Card>
      <div className="button-container">
        <Button className="m-3 content">Create</Button>
        <Dropdown className="m-3 border-0">
          <Dropdown.Toggle className="border-0 content" id="dropdown-basic">
            Export
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" className="content">Small</Dropdown.Item>
            <Dropdown.Item href="#/action-2" className="content">Medium</Dropdown.Item>
            <Dropdown.Item href="#/action-3" className="content">Large</Dropdown.Item>
            <Dropdown.Item href="#/action-3" className="content">Vector</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}