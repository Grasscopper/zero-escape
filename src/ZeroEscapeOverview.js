import React from 'react'

import ZeroEscapeTrilogy from './characters/Zero Escape Trilogy.jpg'

const ZeroEscapeOverview = (props) => {
  let p = {
    "padding-top": "20px",
    "padding-left": "10px",
    "padding-right": "10px",
    "margin-bottom": "0px"
  }

  let i = {
    "border": "none",
    "padding-top": "20px",
    "padding-left": "10px",
    "padding-right": "10px",
    "padding-bottom": "0px"
  }

  return (
    <>
      <h2>Overview</h2>

      <div className="columns">
        <div className="column is-half" style={{ "text-align": "center" }}>
          <img src={ZeroEscapeTrilogy} alt="Zero Escape Trilogy" style={i} />
        </div>

        <div className="column is-half">
          <p style={p}>
          Zero Escape is a video game trilogy of visual novel adventures
          featuring puzzle solving and branching story paths created by
          video game developer Spike Chunsoft. The series first launched in Japan in 2009
          with "9 Hours, 9 Persons, 9 Doors" on the Nintendo DS.
          The second game, Virtue's Last Reward, was released in 2012
          and the third and final game, Zero Time Dilemma, launched in 2016.</p>
          <p style={p}>
          The setting of each game involves 9 persons who are kidnapped
          and brought to an isolated environment cut off from the outside
          world. The mastermind behind each game is known as "Zero"
          and forces them to play a deadly game to escape. While surviving
          their capture, we learn about time travel, the
          interesting characters, and the secrets of the "Nonary Games".</p>
        </div>

      </div>
    </>
  )
}

export default ZeroEscapeOverview
