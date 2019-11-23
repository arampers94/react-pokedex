import React from 'react'
import './home.sass'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const Home = () => {
  return (
    <Row>
      <Col className="home-container">
        <div className="home">
          <Row className="landing-content">
            <div>
              <Col>
                <h1 className="title-text">
                  React Pokedex
                </h1>
              </Col>
              <Col>
                <Form>
                  <Form.Control type="text" placeholder="ex: Lucario" />
                  <Form.Text>
                    Start by searching for your favorite Pokemon!
                </Form.Text>
                </Form>
              </Col>
            </div>
          </Row>
        </div>
      </Col>
    </Row>
  )
}

export default Home
