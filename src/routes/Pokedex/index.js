import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Nav from 'react-bootstrap/Nav'
import axios from 'axios'
import data from './data'

import './pokedex.sass'

const regions = [
  "Kanto",
  "Jhoto",
  "Hoenn",
  "Sinnoh",
  "Unova",
  "Kalos"
]

var kantoPokemon = []

const Pokedex = () => {
  const [entries, setEntries] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://pokeapi.co/api/v2/pokedex/2/')
      console.log('Got data')
      console.log(result.data)
      setEntries(result.data.pokemon_entries)
    }

    fetchData()
  }, [])

  if (entries) {

    for (let i = 1; i <= 151; i++) {
      kantoPokemon.push({
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`,
        name: entries[i - 1].pokemon_species.name
      })
    }

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
              {kantoPokemon.map((pokemon, index) => {
                return (
                  <div className="pokemon-item" key={index}>
                    <Nav.Link href={`/pokedex/${pokemon.name}`}>
                      <img src={pokemon.img} alt="pkmn" className="pokemon-image" />
                    </Nav.Link>
                    <p style={{ textTransform: "capitalize" }}>{pokemon.name}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </Col>
      </Row>
    )
  } else {
    return (
      <p>Loading...</p>
    )
  }
}

export default Pokedex
