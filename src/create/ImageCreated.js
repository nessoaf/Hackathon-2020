import React from 'react'
import { Card } from 'react-bootstrap'
import  {Button}  from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'

export default function ImageCreated() {
  return (
    <div className="imagecreated-container">
      <Card className="ml-5 mr-5 mb-4 mt-5 h-20 w-100">
        <img className='image' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/inspirational-quotes-william-james-1562000241.png?crop=1xw:1xh;center,top&resize=980:*" />
      </Card>
      <div className="button-container">
      <Button varient="light" className="m-3 content">Create</Button>
        <Dropdown className="m-3 border-0">
          <Dropdown.Toggle className="border-0 content" varient="light" id="dropdown-basic">
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