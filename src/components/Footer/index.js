import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './footer.sass'

const Footer = () => {
  return (
    <Row className="footer-container">
      <Col xs="12" className="footer-content">
        <span>
          Pokémon and its trademarks are ©1995 - {new Date().getFullYear()} Nintendo, Creatures, and GAMEFREAK.
          I am not official in any shape or form, nor affiliated, sponsored, or otherwise
          endorsed by Nintendo, Creatures, GAMEFREAK, or Niantic.
        </span>
      </Col>
    </Row>
  )
}

export default Footer
