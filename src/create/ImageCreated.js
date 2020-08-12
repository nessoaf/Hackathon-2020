import React from 'react'
import { Card } from 'react-bootstrap'
import  {Button}  from 'react-bootstrap'

export default function ImageCreated() {
  return (
    <div className="imagecreated-container">
      <Card className="m-3 w-50">
        <Card.Body>
        <img className='image' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/inspirational-quotes-william-james-1562000241.png?crop=1xw:1xh;center,top&resize=980:*" />
        </Card.Body>
      </Card>
      <Button className="m-3 justify-content-center">Create</Button>
    </div>
  )
}