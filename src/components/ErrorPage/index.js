import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Psyduck from '../../images/psyduck.jpg'

import './error.sass'

const ErrorPage = () => {
  return (
    <Row className="error-container">
      <section className="error-content">
        <Col xs="12">
          <img src={Psyduck} alt="Psyduck" width="100px" />
        </Col>
        <Col xs="12">
          <p>
            Sorry, it looks like we don't have data on that Pokemon yet.
          </p>
        </Col>
        <Col xs="12">
          <Nav.Link href="/pokedex" style={{ color: 'black' }}>
            <div className="back-button">
              <Button variant="danger">
                <span>Back to Pokedex</span>
              </Button>
            </div>
          </Nav.Link>
        </Col>
      </section>
    </Row>
  )
}

export default ErrorPage
