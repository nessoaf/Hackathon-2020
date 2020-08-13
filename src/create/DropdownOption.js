import React from 'react'
import { Dropdown } from 'react-bootstrap'

export default function DropdownOption(props) {
  
  return (
    <div className="dropdown-container">
      <Dropdown className="mb-4 background">
        <Dropdown.Toggle variant="light" id="dropdown-basic" className="pr-4 pl-4 z-idx">
          Quote Genre
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={props.phase1}>Funny</Dropdown.Item>

          <Dropdown.Item href="#/action-2">Discovery</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Uplifting</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Disney</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="mb-4 quote-genre">
        <Dropdown.Toggle variant="light" id="dropdown-basic" className="pr-4 pl-4 z-idx">
          Fonts
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item className='fatface' href="#/action-1">Abril Fatface</Dropdown.Item>
          <Dropdown.Item className='dancing' href="#/action-2">Dancing Script</Dropdown.Item>
          <Dropdown.Item className='monoton' href="#/action-3">Monoton</Dropdown.Item>
          <Dropdown.Item className='start2p' href="#/action-3" onClick={props.phase2}>Press Start</Dropdown.Item>
          <Dropdown.Item className='shadow' href="#/action-3">Shadows Into Light</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="mb-4 fonts z-idx">
        <Dropdown.Toggle className="pr-4 pl-4 z-idx" variant="light" id="dropdown-basic">
          Image Type
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Color</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={props.phase4}>Black and White</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="mb-4 image-type">
        <Dropdown.Toggle variant="light" id="dropdown-basic" className="pr-4 pl-4 z-idx">
          Background
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Cityscape</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Ocean</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Abstract</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Nature</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Landscape</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Patterns</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Texture</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={props.phase3}>Food</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Flowers</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Upload Photo<img className='icon2' src="./img/006-upload.png" /></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="mb-4 frame">
        <Dropdown.Toggle variant="light" id="dropdown-basic" className="pr-4 pl-4 z-idx">
          Frame
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Rustic Wood</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Silver Metal</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Metallic</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Black Wood</Dropdown.Item>
          <Dropdown.Item href="#/action-3">White Wood</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Ornate</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={props.phase5}>Fire</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
      <img hidden className='nesso' src="./img/nesso.png" alt=""/>
    </div>
  )
}