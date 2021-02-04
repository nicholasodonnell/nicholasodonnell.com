import { toUpper } from 'ramda'
import React from 'react'
import styled from 'styled-components'

import {
  COLORS,
  FONT_WEIGHTS,
  TIMINGS,
} from '../constants'
import { animations } from '../utils'

const Glitch = styled.span`
  font-weight: ${FONT_WEIGHTS.SEMI_BOLD};
  position: relative;
  text-transform: uppercase;
  white-space: nowrap;

  &:before,
  &:after {
    content: attr(data-text);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &:before {
    animation: ${animations.glitch1} ${TIMINGS.GLITCH} infinite linear alternate-reverse;
    background: ${COLORS.DARK_BLUE};
    left: 2px;
    text-shadow: -2px 0 ${COLORS.RED};
  }

  &:after {
    animation: ${animations.glitch2} ${TIMINGS.GLITCH} infinite linear alternate-reverse;
    background: ${COLORS.DARK_BLUE};
    left: -2px;
    text-shadow: -2px 0 ${COLORS.BLUE};
  }
`

export default ({ children }) => (
  <Glitch data-text={toUpper(children)}>{children}</Glitch>
)
