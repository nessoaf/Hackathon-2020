import React from 'react'
import { Card } from 'react-bootstrap'
import  {Button}  from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'

export default function ImageCreated() {
  return (
    <div className="imagecreated-container">
      <Card className="ml-5 mr-5 mb-4 mt-5 w-80">
        <img className='image' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/inspirational-quotes-william-james-1562000241.png?crop=1xw:1xh;center,top&resize=980:*" />
      </Card>
      <div className="button-container">
      <Button className="m-3">Create</Button>
        <Dropdown className="m-3">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Export 
          </Dropdown.Toggle>
          <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Small</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Medium</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Large</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Vector</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}