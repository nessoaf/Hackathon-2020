import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/create">Create</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Nav>
        <Nav.Link className='content' href="/create">Create</Nav.Link>
        <Nav.Link className='content' href="/profile">Profile</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}