import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './navbar.sass'

const MyNavbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect fixed="top" bg="light" variant="light" className="mynavbar">
        <Container>
          <Navbar.Brand href="/">React Pokedex</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="justify-content-end mynav">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/pokedex">Pokedex</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavbar
