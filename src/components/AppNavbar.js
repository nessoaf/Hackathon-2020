import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function AppNavbar() {
  return (
    <Navbar bg="" expand="lg" className="p-3 navbarcolor">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav.Link className='title navbar-brand-centered' href="/">InspoME</Nav.Link>
        <Nav className="mr-auto">
        </Nav>
        <Nav.Link className='content textcolor' href="/"><img className='icon1' src="./img/002-like-1.png" alt=""/></Nav.Link>
        <Nav.Link href="/profile"><img src="./img/profile.png" alt=""/></Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}