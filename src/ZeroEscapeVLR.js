import React from 'react'
import ZeroEscapeIndexTile from './ZeroEscapeIndexTile'

const ZeroEscapeVLR = (props) => {
  let characterTiles = props.characters.map((character) => {
    return (
      <ZeroEscapeIndexTile key={character.name} character={character} />
    )
  })

  return (
    <div className="columns is-multiline">
      <div className="character column is-full" style={{ "padding-bottom": 0 }}>
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
