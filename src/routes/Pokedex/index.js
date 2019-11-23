import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Nav from 'react-bootstrap/Nav'
import data from './data'

import './pokedex.sass'

const regions = [
  "Kanto",
  "Jhoto",
  "Hoenn",
  "Sinnoh",
  "Unova",
  "Kalos",
  "Alola"
]

const Pokedex = () => {
  return (
    <Row className="pokedex-container">
      <Col sm="4">
        <div className="sidebar">
          <div>
            <h3 style={{ paddingLeft: "10px" }}>Regions</h3>
          </div>
          <ListGroup>
            {regions.map((region, index) => {
              return (
                <ListGroup.Item action key={index}>
                  {region}
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </div>
      </Col>
      <Col sm="8">
        <div className="main-content">
          <div className="pokemon-list">
            {data.map((pokemon, index) => {
              return (
                <div className="pokemon-item">
                  <Nav.Link href='/pokemon/1'>
                    <img src={pokemon.img} alt="pkmn" className="pokemon-image" />
                  </Nav.Link>
                  <p>{pokemon.name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Pokedex
