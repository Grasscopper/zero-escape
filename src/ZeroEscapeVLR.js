import React from 'react'
import ZeroEscapeIndexTile from './ZeroEscapeIndexTile'

import Alice from './characters/Alice.jpg'
import Clover from './characters/Clover.jpg'
import Dio from './characters/Dio.jpg'
import K from './characters/K.jpg'
import Luna from './characters/Luna.jpg'
import Phi from './characters/Phi.jpg'
import Quark from './characters/Quark.jpg'
import Sigma from './characters/Sigma.jpg'
import Tenmyouji from './characters/Tenmyouji.jpg'

const ZeroEscapeVLR = (props) => {
  //Characters from Virtue's Last Reward
  let characters = [
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

  let characterTiles = characters.map((character) => {
    return (
      <ZeroEscapeIndexTile key={character.name} character={character} />
    )
  })

  // SQUARE Sigma and Phi
  // src="https://lh3.googleusercontent.com/proxy/lh-hpjqv-jrIytk_THlQlLaQ24yB6N8C7VM56W4x6tChXYIKLy2BWOhIc2zV52lfWAUQqp5cyXlyIHLuoAj5LfaxH0CnP5GIwpiGUaiPnd9-j-XIhH9SR1gGw7YTxrKgs18U-ReBIiwZbg"

  return (
    <div className="columns is-multiline">

        <div className="character column is-full" style={{ paddingBottom: 0 }}>
        <img
          src="https://lparchive.org/Zero-Escape-Virtues-Last-Reward/3-VLR-Logo.png"
          alt="Virtue's Last Reward"
          style={{ border: "none" }}
        />
        </div>

        <div className="character column is-half">
        <img
          src="https://lh3.googleusercontent.com/proxy/lh-hpjqv-jrIytk_THlQlLaQ24yB6N8C7VM56W4x6tChXYIKLy2BWOhIc2zV52lfWAUQqp5cyXlyIHLuoAj5LfaxH0CnP5GIwpiGUaiPnd9-j-XIhH9SR1gGw7YTxrKgs18U-ReBIiwZbg"
          alt="Sigma and Phi"
        />
        </div>

        <div className="column is-half">
              <div className="columns is-multiline">
                    <div className="column is-full">
                    <p className="title has-text-white">Will you choose to ally... Or to betray?</p>
                    </div>
                    <div className="column is-full">
                    <p>He awoke in an elevator. Across the room was a strange girl he’d never met before, even though she seemed to know him…</p>
                    </div>

                    <div className="column is-full">
                    <p>“Sigma…”</p>
                    </div>

                    <div className="column is-full">
                    <p>“How do you know my name?” he asked, but before she could answer a rabbit appeared.</p>
                    </div>

                    <div className="column is-full">
                    <p>“This elevator is about to fall!”</p>
                    </div>

                    <div className="column is-full">
                    <p>Sigma and the girl left the elevator only to find themselves in a massive room with seven other strangers…nine people in all.
                    The strange rabbit told them that they would have to play the Ambidex Game – a game of betrayal.
                    The penalty for losing was death.
                    Could these nine strangers trust one another long enough to escape their prison alive?</p>
                    </div>
              </div>
        </div>

        {characterTiles}
    </div>
  )
}

export default ZeroEscapeVLR
