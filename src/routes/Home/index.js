import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './home.sass'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Footer from '../../components/Footer'

const Home = () => {
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

  document.body.style = `
    background: linear-gradient(to bottom, #D5DEE7 0%, #E8EBF2 50%, #E2E7ED 100%), linear-gradient(to bottom, rgba(0,0,0,0.02) 50%, rgba(255,255,255,0.02) 61%, rgba(0,0,0,0.02) 73%), linear-gradient(33deg, rgba(255,255,255,0.20) 0%, rgba(0,0,0,0.20) 100%);
    background-blend-mode: normal, color-burn;
    `

  return (
    // <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div>
      <Row>
        <Col className="home-container">
          <div className="home">
            <Row>
              <section className="landing-container">
                <Col className="landing-section">
                  <div className="title-text">
                    <img src="https://fontmeme.com/permalink/191125/cdb881eb17ca4b6488e3e0987de3e1ca.png" alt="pokemon-font" border="0" height="40%" width="100%" />
                    <small>
                      Font provided by <a href="https://fontmeme.com/permalink/191125/cdb881eb17ca4b6488e3e0987de3e1ca.png">fontmeme.com</a>
                    </small>
                  </div>
                </Col>
                <Col className="landing-section">
                  <Form onSubmit={handleSubmit}>
                    <div style={{ display: "flex" }}>
                      <Form.Group style={{ width: "100%" }}>
                        <Form.Label style={{ fontSize: ".75em" }}>
                          Start by searching for your favorite Pokémon!
                        </Form.Label>
                        <Form.Control
                          type="text"
                          onChange={handleChange}
                          style={{ marginRight: "10px" }}
                          placeholder="ex: Lucario"
                          isInvalid={invalid}
                        />
                      </Form.Group>
                    </div>
                    <Button variant="danger" onClick={handleSubmit} className="buttons">
                      Search
                    </Button>
                    <Button variant="dark" href="/pokedex" className="buttons">
                      View Full Pokédex
                    </Button>
                  </Form>
                </Col>
              </section>
            </Row>
          </div>
        </Col>
        {/* <Footer /> */}
      </Row>
    </div>
  )
}

export default Home
