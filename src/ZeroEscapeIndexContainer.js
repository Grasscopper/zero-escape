import React from 'react'
import ZeroEscapeOverview from './ZeroEscapeOverview'
import ZeroEscape999 from './ZeroEscape999'
import ZeroEscapeVLR from './ZeroEscapeVLR'

const ZeroEscapeIndexContainer = (props) => {
  //ORIGNAL WEBSITE TITLE COLOR: #13947E
  return (
    <div>
      <section className="hero is-small">
        <div className="hero-body">
          <p className="title" style={{ color: "#1FD1B2" }}>
          Zero Escape
          </p>
          <p className="subtitle has-text-white">
          A visual novel adventure series
          </p>
        </div>
      </section>

      <div id="Zero-Escape-Index-Container">
        <ZeroEscapeOverview />
        <h2>Games</h2>
<<<<<<< HEAD
        <ZeroEscapeNNN />
=======
        <ZeroEscape999 />
>>>>>>> f58e8ae8892aa37b2100f75c74e7e0bcceadc7f6
        <ZeroEscapeVLR />
      </div>

    </div>
  )
}

export default ZeroEscapeIndexContainer
