import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './home.sass'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SearchIcon from '../../images/search.png'
import Footer from '../../components/Footer'

const Home = () => {
  const [inputText, setInputText] = useState(null)
  let history = useHistory()

  const handleChange = (e) => {
    console.log(e.target.value)
    setInputText(e.target.value)
  }

  const handleSubmit = () => {
    const textLowerCase = inputText.toLowerCase()
    history.push(`/pokedex/${textLowerCase}`)
  }

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
                      <Form.Control type="text" onChange={handleChange} style={{ marginRight: "10px" }} placeholder="ex: Lucario" />
                      <img src={SearchIcon} alt="search icon" width="40px" onClick={handleSubmit} />
                    </div>
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
        {/* <Footer /> */}
      </Row>
    </div>
  )
}

export default Home
