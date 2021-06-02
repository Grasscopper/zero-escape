import React from 'react'
import ZeroEscapeIndexTile from './ZeroEscapeIndexTile'

import Clover from './characters/Clover.jpg'
import Dio from './characters/Dio.jpg'
import K from './characters/K.jpg'
import Lotus from './characters/Lotus.jpg'
import Luna from './characters/Luna.jpg'
import Phi from './characters/Phi.jpg'
import Quark from './characters/Quark.jpg'
import Sigma from './characters/Sigma.jpg'
import Tenmyouji from './characters/Tenmyouji.jpg'

const ZeroEscapeIndexContainer = (props) => {
  let characters = [
    {
      name: "Clover",
      picture: Clover
    },
    {
      name: "Dio",
      picture: Dio
    },
    {
      name: "K",
      picture: K
    },
    {
      name: "Lotus",
      picture: Lotus
    },
    {
      name: "Luna",
      picture: Luna
    },
    {
      name: "Phi",
      picture: Phi
    },
    {
      name: "Quark",
      picture: Quark
    },
    {
      name: "Sigma",
      picture: Sigma
    },
    {
      name: "Tenmyouji",
      picture: Tenmyouji
    }
  ]

  function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
  }

characters = shuffle(characters)
  let characterTiles = characters.map((character) => {
    return (
      <ZeroEscapeIndexTile key={character.name} character={character} />
    )
  })
  // <section className="hero is-small is-primary">
  // <div className="hero-body">
  // <p className="title">
  // Virtue's Last Reward
  // </p>
  // <p className="subtitle">
  // Characters
  // </p>
  // </div>
  // </section>
  return (
    <>
      <div id="Zero-Escape-Index-Container">
        <h1 style={{ color: "#13947E" }}>The Zero Escape Video Game Series</h1>
        <h2>Characters</h2>
        <div className="columns is-multiline">
          {characterTiles}
        </div>
      </div>
    </>
  )
}

export default ZeroEscapeIndexContainer
