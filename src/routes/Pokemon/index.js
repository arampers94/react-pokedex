import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './pokemon.sass'

const Pokemon = () => {

  return (
    <Row className="detail-container">
      <Col className="detail-card">
        <Row className="detail-wrapper">
          <Col xs="12" className="pokemon-image">
            <img src="https://via.placeholder.com/150" alt="pkmn-pic" />
          </Col>
          <Col xs="12" className="pokemon-name-type">
            <h4>Pikachu</h4>
            <div style={{ display: "inline-flex" }}>
              <p style={{ paddingRight: "10px" }}>
                Type: Electric
              </p>
              <p>
                Entry No. 25
              </p>
            </div>
          </Col>

          <section className="entry-section">
            <Col xs="12" className="section-title">
              <h5>Pokedex Entry</h5>
            </Col>
            <Col xs="12" className="section-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </Col>
          </section>

          <section className="entry-section">
            <Col xs="12" className="section-title">
              <h5>Abilities</h5>
            </Col>
            <Col xs="12" className="section-content">
              <p>
                Static, Lightning Rod
            </p>
            </Col>
          </section>

          <section className="entry-section">
            <Col xs="12" className="section-title">
              <h5>Physical traits</h5>
            </Col>
            <Col xs="12" className="section-content">
              <Col xs="4" className="grid-block">
                <p>0.6m</p>
                <h6>Height</h6>
              </Col>
              <Col xs="4" className="grid-block">
                <p>8kg</p>
                <h6>Weight</h6>
              </Col>
              <Col xs="4" className="grid-block" id="last-col">
                <p>8</p>
                <h6>Base Exp.</h6>
              </Col>
            </Col>
          </section>

          <section className="entry-section">
            <Col xs="12" className="section-title">
              <h5>Base Stats</h5>
            </Col>
            <Col xs="12" className="section-content">
              <Col xs="6" sm="4" className="grid-block">
                <p>35</p>
                <h6>HP</h6>
              </Col>
              <Col xs="6" sm="4" className="grid-block">
                <p>35</p>
                <h6>Atk.</h6>
              </Col>
              <Col xs="6" sm="4" className="grid-block">
                <p>40</p>
                <h6>Def.</h6>
              </Col>
              <Col xs="6" sm="4" className="grid-block">
                <p>50</p>
                <h6>Sp. Atk.</h6>
              </Col>
              <Col xs="6" sm="4" className="grid-block">
                <p>50</p>
                <h6>Sp. Def.</h6>
              </Col>
              <Col xs="6" sm="4" className="grid-block">
                <p>90</p>
                <h6>Speed</h6>
              </Col>
            </Col>
          </section>

          <section className="entry-section">
            <Col xs="12" className="section-title">
              <h5>Weak To</h5>
            </Col>
            <Col xs="12">
              <p>Ground</p>
            </Col>
          </section>

          <section className="entry-section">
            <Col xs="12" className="section-title">
              <h5>Resistant To</h5>
            </Col>
            <Col xs="12">
              <p>Grass</p>
            </Col>
          </section>

        </Row>
      </Col>
    </Row>
  )
}

export default Pokemon
