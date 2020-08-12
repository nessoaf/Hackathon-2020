import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className='navbar-brand-centered'>
          <Nav.Link className='title' href="/">InspoME</Nav.Link>
        </div>
        <Nav className="mr-auto">
        </Nav>
        <Nav.Link className='content' href="/">Random</Nav.Link>
        <Nav.Link className='content' href="/create">Create</Nav.Link>
        <Nav.Link className='content' href="/profile">Profile</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}