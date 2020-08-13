import React from 'react'

export default function Profile() {
  return (
    <div>
      <div>
        <img className='right' src="./img/nick.png" alt="user image"/>
      </div>
        <h1 className='name'>Welcome Nick<img className='icon' src="./img/002-like-1.png" alt=""/>!</h1>
        <div className='left'>
        <p className='start2p'><img className='icon' src="./img/002-like-1.png"/>24k -- 'Cool Beans'</p>
        <p className='start2p'><img className='icon' src="./img/002-like-1.png"/>5K --'For what it 's worth'</p>
        <p className='start2p'><img className='icon' src="./img/002-like-1.png"/>10000k -- 'Pineapple Does NOT go on pizza'**</p>
        <p>**Nick may or may not have said this</p>
      </div>
      <div className='start2p center'>Nick is a software engineer with a love for good BBQ and long walks in the hills. Lets not forget his love for the ever evolving cool beans! </div>
    </div>
  )
}