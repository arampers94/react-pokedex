import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import regions from './data'
import { useHistory } from 'react-router-dom'
import LoadingScreen from '../../components/LoadingScreen'
import { connect } from 'react-redux'
import { initialFetch, updateRegion } from '../../store/actions/pokedexActions'
import { Link } from 'react-router-dom'

import './pokedex.sass'

const Pokedex = (props) => {
  const [inputText, setInputText] = useState("")
  const [invalid, setInvalid] = useState(false)
  let history = useHistory()
  const { list, initialFetch, initialDataFetched, regionName, loading, updateRegion } = props

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
    if (!initialDataFetched) {
      initialFetch(1)
    }
  })

  if (loading) {
    return (
      <LoadingScreen />
    )
  } else {
    document.body.style = `
    background: linear-gradient(to bottom, #D5DEE7 0%, #E8EBF2 50%, #E2E7ED 100%), linear-gradient(to bottom, rgba(0,0,0,0.02) 50%, rgba(255,255,255,0.02) 61%, rgba(0,0,0,0.02) 73%), linear-gradient(33deg, rgba(255,255,255,0.20) 0%, rgba(0,0,0,0.20) 100%);
    background-blend-mode: normal, color-burn;
    `

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
              {list.map((pokemon, index) => {
                return (
                  <div className="pokemon-item" key={index}>
                    <Link to={`/pokedex/${pokemon.name}`}>
                      <div className="transparent-overlay"></div>
                      <img src={pokemon.img} alt={pokemon.name} className="pokemon-image" />
                    </Link>
                    <p style={{ textTransform: "capitalize" }}>{pokemon.name}</p>
                  </div>
                )
              })}
            </div>
          </section>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.pokedex.currentPokemonList,
    initialDataFetched: state.pokedex.initialDataFetched,
    regionName: state.pokedex.selectedRegion,
    loading: state.pokedex.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initialFetch: (regionId) => (dispatch(initialFetch(regionId))),
    updateRegion: (id) => (dispatch(updateRegion(id)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex)
