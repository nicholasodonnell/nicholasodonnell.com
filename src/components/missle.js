import {
  COLORS,
  MISSLE_PIXELS_HEIGHT,
  MISSLE_PIXELS_WIDTH
} from 'constants'
import React from 'react'
import styled from 'styled-components'

const Missle = styled.rect`
  fill: ${COLORS.RED};
  height: ${MISSLE_PIXELS_HEIGHT}px;
  width: ${MISSLE_PIXELS_WIDTH}px;
`

export default ({ x, y }) => (
  <Missle x={x} y={y} />
)
