import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Nav from 'react-bootstrap/Nav'
import axios from 'axios'

import './pokedex.sass'

const regions = [
  {
    name: 'Kanto',
    id: 0,
    firstEntry: 1,
    lastEntry: 151
  },
  {
    name: 'Johto',
    id: 1,
    firstEntry: 152,
    lastEntry: 251
  },
  {
    name: 'Hoenn',
    id: 2,
    firstEntry: 252,
    lastEntry: 386
  },
  {
    name: 'Sinnoh',
    id: 3,
    firstEntry: 387,
    lastEntry: 493
  },
  {
    name: 'Unova',
    id: 4,
    firstEntry: 494,
    lastEntry: 649
  },
  {
    name: 'Kalos',
    id: 5,
    firstEntry: 650,
    lastEntry: 721
  },
]

const Pokedex = () => {
  const [regionId, setRegionId] = useState(0)
  const [regionPokemon, setRegionPokemon] = useState(null)
  const [regionName, setRegionName] = useState('Kanto')

  useEffect(() => {
    const fetchData = async () => {
      // Initially fetch data from Kanto region
      const result = await axios(`https://pokeapi.co/api/v2/pokedex/1/`)
      const activeRegion = regions[regionId]
      setRegionName(activeRegion.name)

      // Debugging
      console.log('Got data')
      console.log(result.data)
      // console.log('Active Region')
      // console.log(activeRegion)

      var pokemon = []

      // Get images and names for current region's pokemon
      for (let i = activeRegion.firstEntry; i <= activeRegion.lastEntry; i++) {
        pokemon.push({
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`,
          name: result.data.pokemon_entries[i - 1].pokemon_species.name
        })
      }

      setRegionPokemon(pokemon)
    }

    fetchData()
  }, [regionId])

  const updateRegion = (id) => {
    console.log('Update region called')
    setRegionId(id)
  }

  if (regionPokemon) {

    // console.log('REGION POKEMON')
    // console.log(regionPokemon)

    return (
      <Row className="pokedex-container">
        <Col sm="4" style={{ marginBottom: "20px" }}>
          <section>
            <div className="sidebar">
              <div style={{ padding: "5px 10px" }}>
                <h3 style={{ paddingLeft: "10px" }}>Regions</h3>
              </div>
              <ListGroup>
                {regions.map((region, index) => {
                  return (
                    <ListGroup.Item action key={index} onClick={() => updateRegion(region.id)}>
                      {region.name}
                    </ListGroup.Item>
                  )
                })}
              </ListGroup>
            </div>
          </section>
        </Col>
        <Col sm="8">
          <section className="main-content">
            <div className="pokemon-list">
              <h3 className="pokedex-title">Showing {regionName} Region Pokemon</h3>
              {regionPokemon.map((pokemon, index) => {
                return (
                  <div className="pokemon-item" key={index}>
                    <Nav.Link href={`/pokedex/${pokemon.name}`}>
                      <img src={pokemon.img} alt={pokemon.name} className="pokemon-image" />
                    </Nav.Link>
                    <p style={{ textTransform: "capitalize" }}>{pokemon.name}</p>
                  </div>
                )
              })}
            </div>
          </section>
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
