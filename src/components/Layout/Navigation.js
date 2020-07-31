import React from 'react'
import { Nav, Navbar, NavDropdown, Image } from 'react-bootstrap'

export default function Navigation() {

    return (
        <Navbar  bg="dark" expand="lg">
        <Nav.Link href="https://cohuinco.com/"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
  <path fill-rule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg>

        Volver</Nav.Link>
        <Navbar.Brand  className="mx-auto" href="#home"><Image height={150} src="logo.png" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
    )
}