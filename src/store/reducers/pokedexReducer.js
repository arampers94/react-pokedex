import pokedexTypes from '../types/pokedexTypes'

const initState = {
  pokemonEntries: [],
  currentPokemonList: [],
  currentRegion: '',
  selectedRegion: 'Kanto',
  loading: false,
  error: null,
  initialDataFetched: false
}

const pokedexReducer = (state = initState, action) => {
  switch (action.type) {
    case pokedexTypes.INITIAL_FETCH_STARTED:
      return {
        ...state,
        loading: true
      }
    case pokedexTypes.INITIAL_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        initialDataFetched: true,
        pokemonEntries: action.payload.pokemonEntries,
        currentPokemonList: action.payload.currentPokemonList,
        currentRegion: action.payload.currentRegion
      }
    case pokedexTypes.INITIAL_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default:
      return {
        ...state
      }
  }
}

export default pokedexReducer