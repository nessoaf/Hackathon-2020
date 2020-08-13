import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function AppNavbar() {
  return (
    <Navbar bg="" expand="lg" className="p-4 navbarcolor">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className='navbar-brand-centered'>
          <Nav.Link className='title' href="/">InspoME</Nav.Link>
        </div>
        <Nav className="mr-auto">
        </Nav>
        <Nav.Link className='content textcolor' href="/">Random</Nav.Link>
        <Nav.Link className='content textcolor' href="/create"><img className='icon' src="./img/002-like-1.png" alt=""/></Nav.Link>
        <Nav.Link href="/profile"><img src="./img/profile.png" alt=""/></Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}