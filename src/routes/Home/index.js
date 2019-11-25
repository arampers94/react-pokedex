import React from 'react'
import './home.sass'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Home = () => {
  return (
    <Row>
      <Col className="home-container">
        <div className="home">
          <Row>
            <section className="landing-container">
              <Col className="landing-section">
                <div className="title-text">
                  <img src="https://fontmeme.com/permalink/191125/cdb881eb17ca4b6488e3e0987de3e1ca.png" alt="pokemon-font" border="0" height="40%" width="100%" />
                  <small>
                    Image provided by <a href="https://fontmeme.com/permalink/191125/cdb881eb17ca4b6488e3e0987de3e1ca.png">fontmeme.com</a>
                  </small>
                </div>
              </Col>
              <Col className="landing-section">
                <Form>
                  <Form.Control type="text" placeholder="ex: Lucario" />
                  <Form.Text>
                    Start by searching for your favorite Pokémon!
                  </Form.Text>
                </Form>
              </Col>
              <Col className="landing-section">
                <Button variant="danger" href="/pokedex">
                  View Full Pokédex
                </Button>
              </Col>
            </section>
          </Row>
        </div>
      </Col>
    </Row>
  )
}

export default Home
