import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'

import { withState } from '../state'
import { PARTICLE_PER_SQUARE_PIXELS, ZINDEX } from '../constants'

const StyledParticles = styled(Particles)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: ${ZINDEX.BACKGROUND};
`

export default () => {
  const { layout } = withState()

  return (
    <StyledParticles
      height={layout.height}
      params={{
        particles: {
          lineLinked: {
            distance: 125,
          },
          move: {
            speed: 1.5,
          },
          number: {
            value: Math.ceil((layout.height * layout.width) / PARTICLE_PER_SQUARE_PIXELS),
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            repulse: {
              distance: 50,
              duration: 500,
            },
          },
        },
      }}
      width={layout.width}
    />
  )
}
