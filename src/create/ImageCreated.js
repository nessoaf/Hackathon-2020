import React from 'react'
import { Card } from 'react-bootstrap'
import  {Button}  from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'

export default function ImageCreated(props) {
  return (
    <div className="imagecreated-container">

      <Card className="ml-5 mr-5 mb-4 mt-5 w-60">
        <img className="image" src={props.image}></img>
        <div className=''>
          <h3 className='centered quotes'><span className=''>{props.quote}</span></h3>
        </div>
      </Card>

      <div className="button-container">

      <Button variant="light" className="m-3 z-idx content" onClick={props.handleGenerate}>Create <img className='icon3' src="./img/refresh.png" /></Button>
        <Dropdown className="m-3 border-0">
          <Dropdown.Toggle className="border-0 z-idx content" variant="light" id="dropdown-basic">
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