import { combineReducers } from 'redux'
import pokedexReducer from './pokedexReducer'

const rootReducer = combineReducers({
  pokedex: pokedexReducer
})

export default rootReducer