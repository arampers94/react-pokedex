import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './loadingScreen.sass'

const LoadingScreen = () => {
  return (
    <Row className="loading-screen-wrapper">
      <Col xs="12" className="loading-screen-content">
        <div className="pokeball"></div>
        <h3>Loading...</h3>
      </Col>
    </Row>
  )
}

export default LoadingScreen
