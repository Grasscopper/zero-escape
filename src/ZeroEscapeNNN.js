import React from 'react'
import ZeroEscapeIndexTile from './ZeroEscapeIndexTile'

import Title from './characters/Spike.jpg'
import Ace from './characters/Ace.jpg'
import Snake from './characters/Snake.jpg'
import Santa from './characters/Santa.jpg'
import Clover from './characters/CloverNNN.jpg'
import Junpei from './characters/Junpei.jpg'
import June from './characters/June.jpg'
import Seven from './characters/Seven.jpg'
import Lotus from './characters/Lotus.jpg'
import NinthMan from './characters/NinthMan.jpg'

const ZeroEscapeNNN = (props) => {
  //Characters from 9 Hours, 9 Persons, 9 Doors
  let characters = [
    {
      name: "Ace",
      game: "Virtue's Last Reward",
      picture: Ace
    },
    {
      name: "Snake",
      game: "Virtue's Last Reward",
      picture: Snake
    },
    {
      name: "Santa",
      game: "Virtue's Last Reward",
      picture: Santa
    },
    {
      name: "Clover",
      game: "Virtue's Last Reward",
      picture: Clover
    },
    {
      name: "Junpei",
      game: "Virtue's Last Reward",
      picture: Junpei
    },
    {
      name: "June",
      game: "Virtue's Last Reward",
      picture: June
    },
    {
      name: "Seven",
      game: "Virtue's Last Reward",
      picture: Seven
    },
    {
      name: "Lotus",
      game: "Virtue's Last Reward",
      picture: Lotus
    },
    {
      name: "Ninth Man",
      game: "Virtue's Last Reward",
      picture: NinthMan
    }
  ]

  let characterTiles = characters.map((character) => {
    return (
      <ZeroEscapeIndexTile key={character.name} character={character} />
    )
  })

  return (
    <div className="columns is-multiline">

        <div className="column is-one-third" />

        <div className="character column is-one-third" style={{ paddingBottom: 0 }}>
        <img
          src={Title}
          alt="9 Hours, 9 Persons, 9 Doors"
          style={{ border: "none", paddingBottom: 20, marginTop: 20 }}
        />
        </div>

        <div className="column is-one-third" />

        <div className="character column is-half">
        <img
          src="https://i.pinimg.com/originals/b7/d7/14/b7d71413929c2f20cf8d399ef95f8bda.jpg"
          alt="999 Cast"
        />
        </div>

        <div className="column is-half">
              <div className="columns is-multiline">
                    <div className="column is-full">
                      <p className="title has-text-white">The water is rising, there are 9 doors and time is running out...</p>
                    </div>

                    <div className="column is-full">
                      <p>
                      Junpei awakens to find himself locked in a flooding room. He notices
                      he is wearing a bracelet on his wrist that won't come off.
                      </p>
                    </div>

                    <div className="column is-full">
                      <p>
                      He solves the puzzle
                      and escapes to find 8 others prisoners all wearing the same bracelet.
                      On a speaker, the mastermind known as "Zero" announces the Nonary Game.
                      A game that must be played and won to escape.
                      </p>
                    </div>

                    <div className="column is-full">
                      <p>
                      Each person has been assigned a unique nonary number on their bracelet.
                      Using their numbers together and solving the corresponding puzzle,
                      the teams can pass through the 9 doors.
                      </p>
                    </div>

                    <div className="column is-full">
                      <p>
                      However, they are on a sinking ship and only have 9 hours
                      to escape through door number 9. Losing the game or running out of
                      time means certain death.
                      </p>
                    </div>

                    <div className="column is-full">
                      <p>
                      The countdown has begun.
                      </p>
                    </div>
              </div>
        </div>

        {characterTiles}
    </div>
  )
}

export default ZeroEscapeNNN
