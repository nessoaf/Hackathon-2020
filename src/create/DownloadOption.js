import React from 'react'
import { Dropdown } from 'react-bootstrap'


export default function DownloadOption() {
  return (
    <div className="download-container"> 
      <div className="image-container">
        <img src="./img/facebook.png" />
        <img src="./img/instagram.png" />
        <img src="./img/pinterest.png" />
        <img src="./img/twitter.png" />
      </div>
      <Dropdown className="m-5">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
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