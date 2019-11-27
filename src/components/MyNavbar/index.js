import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './navbar.sass'

const MyNavbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect fixed="top" bg="dark" variant="dark" className="mynavbar">
        <Container>
          <Navbar.Brand href="/">
            <img src="https://fontmeme.com/permalink/191125/cdb881eb17ca4b6488e3e0987de3e1ca.png" alt="pokemon-font" border="0" width="140px" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="justify-content-end mynav">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/pokedex">Pokédex</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavbar
