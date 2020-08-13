import React from 'react'
import { Link } from 'react-router-dom'


export default function DownloadOption() {
  return (
    <div className="download-container"> 
      <div className="image-container">
        <a href="https://www.facebook.com/"><img className='icon content' src="./img/facebook1.png" /></a>
        <a href="https://www.instagram.com/"><img className='icon content' src="./img/instagram.png" /></a>
        <a href="https://www.pinterest.com/"><img className='icon content' src="./img/pinterest.png" /></a>
        <a href="https://www.twitter.com/"><img className='icon content' src="./img/twitter1.png" /></a>
      </div>
    </div>
  ) 
}