import React from 'react'
import { Dropdown } from 'react-bootstrap'

export default function DropdownOption() {
  return (
    <div className="dropdown-container">
      <Dropdown className="m-3 background">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Quote Genre
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Funny</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Discovery</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Uplifting</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Disney</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="m-3 quote-genre">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Fonts
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Abril Fatface</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Dancing Script</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Monoton</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Press Start</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Shadows Into Light</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="m-3 fonts">
        <Dropdown.Toggle className="pr-4 pl-4" variant="success" id="dropdown-basic">
          Image Type
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Color</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Black</Dropdown.Item>
          <Dropdown.Item href="#/action-3">White</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="m-3 image-type">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
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
          <Dropdown.Item href="#/action-3">Food</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Flowers</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="m-3 frame">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Frame
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Rustic Wood</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Silver Metal</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Metallic</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Black Wood</Dropdown.Item>
          <Dropdown.Item href="#/action-3">White Wood</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Ornate</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Circular</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}