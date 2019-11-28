import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import regions from './data'
import { useHistory } from 'react-router-dom'
import LoadingScreen from '../../components/LoadingScreen'

import './pokedex.sass'

const Pokedex = () => {
  const [regionId, setRegionId] = useState(0)
  const [regionPokemon, setRegionPokemon] = useState(null)
  const [regionName, setRegionName] = useState('Kanto')
  const [inputText, setInputText] = useState("")
  const [invalid, setInvalid] = useState(false)
  let history = useHistory()

  const handleChange = (e) => {
    setInputText(e.target.value)
    setInvalid(false)
  }

  const handleSubmit = () => {
    if (inputText === "") {
      setInvalid(true)
      alert("Search can not be blank.")
    } else {
      const textLowerCase = inputText.toLowerCase()
      history.push(`/pokedex/${textLowerCase}`)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      // Initially fetch data from Kanto region
      const result = await axios(`https://pokeapi.co/api/v2/pokedex/1/`)
      const activeRegion = regions[regionId]
      setRegionName(activeRegion.name)

      // Debugging
      // console.log('Got data')
      // console.log(result.data)
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
    document.body.style = `
    background: linear-gradient(to bottom, #D5DEE7 0%, #E8EBF2 50%, #E2E7ED 100%), linear-gradient(to bottom, rgba(0,0,0,0.02) 50%, rgba(255,255,255,0.02) 61%, rgba(0,0,0,0.02) 73%), linear-gradient(33deg, rgba(255,255,255,0.20) 0%, rgba(0,0,0,0.20) 100%);
    background-blend-mode: normal, color-burn;
    `
    // document.body.style = 'background-blend-mode: normal, color-burn;'

    return (
      <Row className="pokedex-container">
        <Col sm="4" style={{ marginBottom: "20px" }}>
          <section>
            <div className="sidebar">
              <div className="region-title">
                <h3>Regions</h3>
              </div>
              <ListGroup>
                {regions.map((region, index) => {
                  return (
                    <ListGroup.Item
                      action
                      key={index}
                      onClick={() => updateRegion(region.id)}
                      className="region-item"
                    >
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
              <div className="pokedex-title">
                <h3>Showing {regionName} Region Pokémon</h3>
                <div>
                  <Form onSubmit={handleSubmit} style={{ display: "flex", width: "100%" }}>
                    <Button variant="danger" onClick={handleSubmit}>
                      Search
                    </Button>
                    <Form.Control
                      type="text"
                      onChange={handleChange}
                      placeholder="ex: Pikachu"
                      isInvalid={invalid}
                    />
                  </Form>
                </div>
              </div>
              {regionPokemon.map((pokemon, index) => {
                return (
                  <div className="pokemon-item" key={index}>
                    <Nav.Link href={`/pokedex/${pokemon.name}`}>
                      <div className="transparent-overlay"></div>
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
      <LoadingScreen />
    )
  }
}

export default Pokedex
