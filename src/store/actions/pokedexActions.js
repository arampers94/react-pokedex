import pokedexTypes from '../types/pokedexTypes'
import axios from 'axios'

const regions = [
  {
    name: 'Kanto',
    id: 0,
    firstEntry: 1,
    lastEntry: 151
  },
  {
    name: 'Johto',
    id: 1,
    firstEntry: 152,
    lastEntry: 251
  },
  {
    name: 'Hoenn',
    id: 2,
    firstEntry: 252,
    lastEntry: 386
  },
  {
    name: 'Sinnoh',
    id: 3,
    firstEntry: 387,
    lastEntry: 493
  },
  {
    name: 'Unova',
    id: 4,
    firstEntry: 494,
    lastEntry: 649
  },
  {
    name: 'Kalos',
    id: 5,
    firstEntry: 650,
    lastEntry: 721
  },
]

export const initialFetch = () => {
  console.log('Fetching initial data')
  return dispatch => {
    dispatch(initialFetchStarted())
    // Initially get National dex data and map images and names for Kanto region pokemon
    axios
      .get(`https://pokeapi.co/api/v2/pokedex/1/`)
      .then(result => {
        console.log('Got data')
        const pokemonEntries = result.data.pokemon_entries
        console.log(pokemonEntries)
        const region = regions[0]
        var currentPokemonList = []

        // Get images and names for current region's pokemon
        for (let i = region.firstEntry; i <= region.lastEntry; i++) {
          currentPokemonList.push({
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`,
            name: pokemonEntries.pokemon_entries[i - 1].pokemon_species.name
          })
        }

        dispatch(initialFetchSuccess(pokemonEntries, currentPokemonList, region.name))
      }).catch(error => {
        console.log('Fetch failed')
        console.log(error.message)
        dispatch(initialFetchFailed(error.message))
      })
  }
}

const initialFetchStarted = () => ({
  type: pokedexTypes.INITIAL_FETCH_STARTED
})

const initialFetchSuccess = (pokemonEntries, currentPokemonList, currentRegion) => ({
  type: pokedexTypes.INITIAL_FETCH_SUCCESS,
  payload: {
    pokemonEntries,
    currentPokemonList,
    currentRegion
  }
})

const initialFetchFailed = error => ({
  type: pokedexTypes.INITIAL_FETCH_FAILED,
  payload: {
    error
  }
})