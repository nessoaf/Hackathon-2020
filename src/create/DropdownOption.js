import React from 'react'
import { Dropdown } from 'react-bootstrap'

export default function DropdownOption() {
  return (
    <div className="dropdown-container">
      <Dropdown className="m-3 background">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Background 
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="m-3 quote-genre">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Quote Genre
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="m-3 fonts">
        <Dropdown.Toggle className="pr-4 pl-4" variant="success" id="dropdown-basic">
          Fonts
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="m-3 image-type">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Image Type
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="m-3 frame">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Frame
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}