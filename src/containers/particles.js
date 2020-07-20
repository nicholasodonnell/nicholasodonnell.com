import { ZINDEX } from 'constants'
import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'

const StyledParticles = styled(Particles)`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: ${ZINDEX.PARTICLES};
`

export default () => (
  <StyledParticles
    params={{
      particles: {
        number: {
          value: 45
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
        }
      }
    }}
  />
)
