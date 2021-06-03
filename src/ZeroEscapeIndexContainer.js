import React from 'react'
import ZeroEscapeOverview from './ZeroEscapeOverview'
import ZeroEscapeNNN from './ZeroEscapeNNN'
import ZeroEscapeVLR from './ZeroEscapeVLR'

import Alice from './characters/Alice.jpg'
import Clover from './characters/Clover.jpg'
import Dio from './characters/Dio.jpg'
import K from './characters/K.jpg'
import Luna from './characters/Luna.jpg'
import Phi from './characters/Phi.jpg'
import Quark from './characters/Quark.jpg'
import Sigma from './characters/Sigma.jpg'
import Tenmyouji from './characters/Tenmyouji.jpg'
import Zero from './characters/Zero.jpg'

const ZeroEscapeIndexContainer = (props) => {

  //Characters from Virtue's Last Reward
  let vlr = [
    {
      name: "Sigma",
      game: "Virtue's Last Reward",
      picture: Sigma
    },
    {
      name: "Phi",
      game: "Virtue's Last Reward",
      picture: Phi
    },
    {
      name: "Luna",
      game: "Virtue's Last Reward",
      picture: Luna
    },
    {
      name: "Clover",
      game: "Virtue's Last Reward",
      picture: Clover
    },
    {
      name: "Alice",
      game: "Virtue's Last Reward",
      picture: Alice
    },
    {
      name: "Dio",
      game: "Virtue's Last Reward",
      picture: Dio
    },
    {
      name: "Tenmyouji",
      game: "Virtue's Last Reward",
      picture: Tenmyouji
    },
    {
      name: "Quark",
      game: "Virtue's Last Reward",
      picture: Quark
    },
    {
      name: "K",
      game: "Virtue's Last Reward",
      picture: K
    }
  ]

  return (
    <div id="Zero-Escape-Index-Container">
      <h1 style={{ color: "#13947E" }}>Zero Escape</h1>
      <ZeroEscapeOverview />
      <h2>Games</h2>
      <ZeroEscapeVLR characters={vlr} />
    </div>
  )
}

export default ZeroEscapeIndexContainer
