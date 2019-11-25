import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Nav from 'react-bootstrap/Nav'
import axios from 'axios'
import data from './data'

import './pokedex.sass'

const regions = [
  {
    name: 'Kanto',
    id: 2,
    firstEntry: 1,
    lastEntry: 151
  },
  {
    name: 'Johto',
    id: 3,
    firstEntry: 152,
    lastEntry: 251
  },
  {
    name: 'Hoenn',
    id: 4,
    firstEntry: 252,
    lastEntry: 386
  },
  {
    name: 'Sinnoh',
    id: 5,
    firstEntry: 387,
    lastEntry: 493
  },
  {
    name: 'Unova',
    id: 6,
    firstEntry: 494,
    lastEntry: 649
  },
  {
    name: 'Kalos',
    id: 7,
    firstEntry: 650,
    lastEntry: 721
  },
]

var pokemon = []

const Pokedex = () => {
  const [entries, setEntries] = useState(null)
  const [regionId, setRegionId] = useState(2)
  const [activeRegion, setActiveRegion] = useState(null)
  const [regionPokemon, setRegionPokemon] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      // Initially fetch data from Kanto region
      const result = await axios(`https://pokeapi.co/api/v2/pokedex/${regionId}/`)
      console.log('Got data')
      console.log(result.data)
      setEntries(result.data.pokemon_entries)
      setActiveRegion(regions[regionId - 2])
    }

    fetchData()
  }, [regionId])

  const updateRegion = (id) => {
    console.log('Update region called')
    setRegionId(id)
  }

  if (entries && activeRegion) {
    console.log('STATE OF ENTRIES')
    console.log(entries)

    console.log('ACTIVE REGION')
    console.log(activeRegion)

    console.log('REGION POKEMON')
    console.log(regionPokemon)

    console.log(activeRegion)

    // Get images and names for current region's pokemon
    for (let i = activeRegion.firstEntry; i <= activeRegion.lastEntry; i++) {
      pokemon.push({
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`,
        name: entries[i - 1].pokemon_species.name
      })
    }

    return (
      <Row className="pokedex-container">
        <Col sm="4">
          <section>
            <div className="sidebar">
              <div>
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
              {pokemon.map((pokemon, index) => {
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
