import { ship } from 'assets'
import { TIMINGS } from 'constants'
import React from 'react'
import styled from 'styled-components'

const SHIP_ASPECT_RATIO = 0.771484375
const SHIP_WIDTH = 2.5

const Ship = styled.image`
  cursor: pointer;
  height: ${SHIP_WIDTH * SHIP_ASPECT_RATIO}rem;
  opacity: 0.3;
  pointer-events: bounding-box;
  transition: opacity ${TIMINGS.SHORT} ease-in-out;
  width: ${SHIP_WIDTH}rem;

  &:hover {
    opacity: 1;
  }

  & {
    opacity: ${({ active }) => active && '1'};
  }
`

export default ({
  active,
  innerRef,
  onClick,
  x,
  y
}) => (
  <Ship
    active={active}
    href={ship}
    onClick={onClick}
    ref={innerRef}
    x={x}
    y={y}
  />
)
