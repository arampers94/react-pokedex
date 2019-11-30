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
    case pokedexTypes.UPDATE_REGION:
      let start = action.payload.region.firstEntry
      let end = action.payload.region.lastEntry
      let list = []

      for (let i = start; i < end; i++) {
        list.push({
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`,
          name: state.pokemonEntries[i - 1].pokemon_species.name
        })
      }

      return {
        ...state,
        currentPokemonList: list,
        selectedRegion: action.payload.region.name,
        currentRegion: action.payload.region.name
      }

    default:
      return {
        ...state
      }
  }
}

export default pokedexReducer