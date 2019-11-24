import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'

import './pokemon.sass'

const Pokemon = ({ match }) => {
  const [pokemonData, setPokemonData] = useState(null)
  const [speciesData, setSpeciesData] = useState(null)
  const [pokemonTypes, setPokemonTypes] = useState({ type1: null, type2: null })
  const id = match.params.id

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      console.log('Got data')
      console.log(result.data)
      const species = await axios(result.data.species.url)
      const firstType = await axios(result.data.types[0].type.url)

      let secondType = null
      if (result.data.types[1]) {
        secondType = await axios(result.data.types[1].type.url)
      }

      // Note: setting only 1 field will set the other to null
      if (secondType !== null) {
        setPokemonTypes({ type1: firstType.data, type2: secondType.data })
      } else {
        setPokemonTypes({ type1: firstType.data })
      }

      setSpeciesData(species.data)
      setPokemonData(result.data)
    }

    fetchData()
  }, [])



  if (pokemonData && speciesData && pokemonTypes.type1) {
    pokemonData.types = pokemonData.types.reverse()
    pokemonData.abilities = pokemonData.abilities.reverse()

    const types = []
    const abilities = []
    const weaknesses = []
    const resistances = []
    const weaknessList = []
    const resistanceList = []
    const immunities = []
    const immunitiesList = []

    pokemonData.types.forEach((type, index) => {
      if (pokemonData.types.length > 1 && index === 0) {
        types.push(
          <p className="list-item" key={index}>
            {type.type.name},
          </p>
        )
      } else {
        types.push(
          <p className="list-item" key={index}>
            {type.type.name}
          </p>
        )
      }
    })

    pokemonData.abilities.forEach((ability, index) => {
      if (index !== pokemonData.abilities.length - 1) {
        abilities.push(
          <span className="list-item" key={index}>
            {ability.ability.name}{ability.is_hidden === true ? " (Hidden)" : null},
          </span>
        )
      } else {
        abilities.push(
          <span className="list-item" key={index}>
            {ability.ability.name}{ability.is_hidden === true ? " (Hidden)" : null}
          </span>
        )
      }
    })

    const flavorTextEntries = speciesData.flavor_text_entries
    let flavorText = null

    for (var i = 0; i < flavorTextEntries.length; i++) {
      if (flavorTextEntries[i].language.name === "en") {
        flavorText = flavorTextEntries[i].flavor_text
        break
      }
    }

    // console.log("TYPE 1")
    // console.log(pokemonTypes)
    const weaks1 = pokemonTypes.type1.damage_relations.double_damage_from
    const strengths1 = pokemonTypes.type1.damage_relations.half_damage_from
    const weaks2 = pokemonTypes.type2 != null ? pokemonTypes.type2.damage_relations.double_damage_from : null
    const strengths2 = pokemonTypes.type2 != null ? pokemonTypes.type2.damage_relations.half_damage_from : null
    const immunes1 = pokemonTypes.type1.damage_relations.no_damage_from
    const immunes2 = pokemonTypes.type2 != null ? pokemonTypes.type2.damage_relations.no_damage_from : null

    for (let w1 = 0; w1 < weaks1.length; w1++) {
      weaknesses.push(weaks1[w1].name)
    }

    for (let s1 = 0; s1 < strengths1.length; s1++) {
      resistances.push(strengths1[s1].name)
    }

    if (weaks2 !== null) {
      for (let w2 = 0; w2 < weaks2.length; w2++) {
        if (!weaknesses.includes(weaks2[w2].name)) {
          weaknesses.push(weaks2[w2].name)
        }
      }
    }

    if (strengths2 !== null) {
      for (let s2 = 0; s2 < strengths2.length; s2++) {
        if (!resistances.includes(strengths2[s2].name)) {
          resistances.push(strengths2[s2].name)
        }
      }
    }

    for (let i1 = 0; i1 < immunes1.length; i1++) {
      immunities.push(immunes1[i1].name)
    }

    if (immunes2 != null) {
      for (let i2 = 0; i2 < immunes2.length; i2++) {
        immunities.push(immunes2[i2].name)
      }
    }

    var duplicates = []
    for (let weakIndex = 0; weakIndex < weaknesses.length; weakIndex++) {
      if (resistances.includes(weaknesses[weakIndex])) {
        duplicates.push(weaknesses[weakIndex])
        weaknesses.splice(weakIndex, 1)
        weakIndex--
      }
    }

    for (let dupIndex = 0; dupIndex < duplicates.length; dupIndex++) {
      let currDup = duplicates[dupIndex]
      let foundDup = resistances.findIndex((element) => element === currDup)
      resistances.splice(foundDup, 1)
    }

    // If a pokemon is immune to a certain type, the type is no longer a weakness
    for (let immuneIndex = 0; immuneIndex < immunities.length; immuneIndex++) {
      let currImmune = immunities[immuneIndex]
      console.log(currImmune)
      let foundImmune = weaknesses.findIndex((element) => element === currImmune)
      if (foundImmune !== -1) {
        weaknesses.splice(foundImmune, 1)
      }
    }

    immunities.forEach((type, index) => {
      // console.log(type)
      if (index !== immunities.length - 1) {
        immunitiesList.push(
          <span className="list-item" key={index}>
            {type},
          </span>
        )
      } else {
        immunitiesList.push(
          <span className="list-item" key={index}>
            {type}
          </span>
        )
      }
    })

    console.log('WEAKNESSES')
    console.log(weaknesses.length)
    weaknesses.forEach((type, index) => {
      console.log(type)
      if (index !== weaknesses.length - 1) {
        console.log(index)
        weaknessList.push(
          <span className="list-item" key={index}>
            {type},
          </span>
        )
      } else {
        weaknessList.push(
          <span className="list-item" key={index}>
            {type}
          </span>
        )
      }
    })

    console.log('RESISTANCES')
    console.log(resistances.length)
    resistances.forEach((type, index) => {
      console.log(type)
      if (index !== resistances.length - 1) {
        console.log(index)
        resistanceList.push(
          <span className="list-item" key={index}>
            {type},
          </span>
        )
      } else {
        resistanceList.push(
          <span className="list-item" key={index}>
            {type}
          </span>
        )
      }
    })

    return (
      <Row className="detail-container">
        <Col className="detail-card">
          <Row className="detail-wrapper">
            <Col xs="12" className="pokemon-image">
              <img src={pokemonData.sprites.front_default} alt="pkmn-pic" />
            </Col>
            <Col xs="12" className="pokemon-name-type">
              <h4>{pokemonData.name}</h4>
              <div style={{ display: "inline-flex" }}>
                <p style={{ paddingRight: "5px", fontWeight: "bold" }}>
                  Type:
                </p>
                {types}
                <p style={{ paddingLeft: "10px", fontWeight: "bold" }}>
                  Entry No.
                </p>
                <p style={{ paddingLeft: "5px" }}>
                  {pokemonData.id}
                </p>
              </div>
            </Col>

            <section className="entry-section">
              <Col xs="12" className="section-title">
                <h5>Pokedex Entry</h5>
              </Col>
              <Col xs="12" className="section-content">
                <p>
                  {flavorText}
                </p>
              </Col>
            </section>

            <section className="entry-section">
              <Col xs="12" className="section-title">
                <h5>Abilities</h5>
              </Col>
              <Col xs="12" className="section-content">
                {abilities}
              </Col>
            </section>

            <section className="entry-section">
              <Col xs="12" className="section-title">
                <h5>Physical traits</h5>
              </Col>
              <Col xs="12" className="section-content">
                <Col xs="4" className="grid-block">
                  <p>{pokemonData.height}m</p>
                  <h6>Height</h6>
                </Col>
                <Col xs="4" className="grid-block">
                  <p>{pokemonData.weight}kg</p>
                  <h6>Weight</h6>
                </Col>
                <Col xs="4" className="grid-block" id="last-col">
                  <p>{pokemonData.base_experience}</p>
                  <h6>Base Exp.</h6>
                </Col>
              </Col>
            </section>

            <section className="entry-section">
              <Col xs="12" className="section-title">
                <h5>Base Stats</h5>
              </Col>
              <Col xs="12" className="section-content">
                <Col xs="6" sm="4" className="grid-block">
                  <p>{pokemonData.stats[5].base_stat}</p>
                  <h6>HP</h6>
                </Col>
                <Col xs="6" sm="4" className="grid-block">
                  <p>{pokemonData.stats[4].base_stat}</p>
                  <h6>Atk.</h6>
                </Col>
                <Col xs="6" sm="4" className="grid-block">
                  <p>{pokemonData.stats[3].base_stat}</p>
                  <h6>Def.</h6>
                </Col>
                <Col xs="6" sm="4" className="grid-block">
                  <p>{pokemonData.stats[2].base_stat}</p>
                  <h6>Sp. Atk.</h6>
                </Col>
                <Col xs="6" sm="4" className="grid-block">
                  <p>{pokemonData.stats[1].base_stat}</p>
                  <h6>Sp. Def.</h6>
                </Col>
                <Col xs="6" sm="4" className="grid-block">
                  <p>{pokemonData.stats[0].base_stat}</p>
                  <h6>Speed</h6>
                </Col>
              </Col>
            </section>

            <section className="entry-section">
              <Col xs="12" className="section-title">
                <h5>Weak To</h5>
              </Col>
              <Col xs="12" className="section-content">
                {weaknessList.length > 0 ? weaknessList : "None"}
              </Col>
            </section>

            <section className="entry-section">
              <Col xs="12" className="section-title">
                <h5>Resistant To</h5>
              </Col>
              <Col xs="12" className="section-content">
                {resistanceList.length > 0 ? resistanceList : "None"}
              </Col>
            </section>

            <section className="entry-section">
              <Col xs="12" className="section-title">
                <h5>Immune To</h5>
              </Col>
              <Col xs="12" className="section-content">
                {immunitiesList.length > 0 ? immunitiesList : "None"}
              </Col>
            </section>

          </Row>
        </Col>
      </Row>
    )
  } else {
    return (
      <p>Loading...</p>
    )
  }
}

export default Pokemon
