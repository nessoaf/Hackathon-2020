import React from 'react'
import { Dropdown } from 'react-bootstrap'

export default function DropdownOptionTest() {
  return (
    <div className="dropdown-container">
      <Dropdown className="m-3 background">
        <Dropdown.Toggle variant="light" id="dropdown-basic" className="content">
          Quote Genre
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" className="content">Funny</Dropdown.Item>
          <Dropdown.Item href="#/action-2" className="content">Discovery</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="content">Uplifting</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="content">Disney</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="m-3 quote-genre">
        <Dropdown.Toggle variant="light" id="dropdown-basic" className="content">
          Fonts
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item className='fatface' href="#/action-1">Abril Fatface</Dropdown.Item>
          <Dropdown.Item className='dancing' href="#/action-2">Dancing Script</Dropdown.Item>
          <Dropdown.Item className='monoton' href="#/action-3">Monoton</Dropdown.Item>
          <Dropdown.Item className='start2p' href="#/action-3">Press Start</Dropdown.Item>
          <Dropdown.Item className='shadow' href="#/action-3">Shadows Into Light</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="m-3 fonts">
        <Dropdown.Toggle className="pr-4 pl-4 content" variant="light" id="dropdown-basic">
          Image Type
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" className="content">Color</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="content">Black & White</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="m-2 image-type">
        <Dropdown.Toggle variant="light" id="dropdown-basic" className="content">
          Background
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" className="content">Cityscape</Dropdown.Item>
          <Dropdown.Item href="#/action-2" className="content">Ocean</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="content">Abstract</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="content">Nature</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="content">Landscape</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="content">Patterns</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="content">Texture</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="content">Food</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="content">Flowers</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="m-3 frame">
        <Dropdown.Toggle variant="light" id="dropdown-basic" className="content">
          Frame
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" className="content">Rustic Wood</Dropdown.Item>
          <Dropdown.Item href="#/action-2" className="content">Silver Metal</Dropdown.Item>
          <Dropdown.Item href="#/action-3"className="content">Metallic</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="content">Black Wood</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="content">White Wood</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="content">Ornate</Dropdown.Item>
          <Dropdown.Item href="#/action-3" className="content">Circular</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}