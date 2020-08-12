import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link className='navbar-brand-center title' href="/">InspoME</Nav.Link>
        <Nav className="ml-auto">
        </Nav>
        <Nav.Link className='content' href="/create">Create</Nav.Link>
        <Nav.Link className='content' href="/profile">Profile</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}