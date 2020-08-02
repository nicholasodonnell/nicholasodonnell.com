import { PARTICLE_PER_SQUARE_PIXELS, ZINDEX } from 'constants'
import React from 'react'
import Particles from 'react-particles-js'
import { withState } from 'state'
import styled from 'styled-components'

const StyledParticles = styled(Particles)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: ${ZINDEX.PARTICLES};
`

export default () => {
  const { layout } = withState()

  return (
    <StyledParticles
      height={layout.height}
      params={{
        particles: {
          number: {
            value: Math.ceil(layout.height * layout.width / PARTICLE_PER_SQUARE_PIXELS)
          },
          size: {
            value: 1
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            }
          },
          modes: {
            repulse: {
              distance: 50,
              duration: 500
            }
          }
        }
      }}
      width={layout.width}
    />
  )
}