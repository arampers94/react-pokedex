import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Container from 'react-bootstrap/Container'

// Routes
import Home from './routes/Home'
import Pokemon from './routes/Pokemon'
import Pokedex from './routes/Pokedex'

// Components
import MyNavbar from './components/MyNavbar'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Container>
        <Router>
          <MyNavbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/pokedex/:id" component={Pokemon} />
            <Route path="/pokedex" component={Pokedex} />
          </Switch>
        </Router>
      </Container>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
