import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function AppNavbar() {
  return (
    <Navbar bg="" expand="lg" className="p-4 navbarcolor">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className='navbar-brand-centered'>
          <Nav.Link className='title textcolor' href="/">InspoME</Nav.Link>
        </div>
        <Nav className="mr-auto">
        </Nav>
        <Nav.Link className='content textcolor' href="/">Random</Nav.Link>
        <Nav.Link className='content textcolor' href="/create">Create</Nav.Link>
        <Nav.Link className='content textcolor' href="/profile">Profile</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}