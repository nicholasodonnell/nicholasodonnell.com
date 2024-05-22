import React from 'react'
import styled from 'styled-components'

import { Button } from '../components'
import {
  TIMINGS,
  ZINDEX,
} from '../constants'
import { animations } from '../utils'

const Buttons = styled.section`
  animation: ${animations.fadeInDown} ${TIMINGS.LONG} ease ${TIMINGS.SHORT} 1 forwards;
  display: flex;
  flex-direction: row;
  opacity: 0;
  z-index: ${ZINDEX.CONTENT};
`

export default () => (
  <Buttons>
    <Button href="https://github.com/nicholasodonnell" target="_blank" rel="noopener noreferrer">
      Explore Work
    </Button>
    <Button href="https://www.linkedin.com/in/nicholasodo" target="_blank" rel="noopener noreferrer">
      View Profile
    </Button>
  </Buttons>
)
