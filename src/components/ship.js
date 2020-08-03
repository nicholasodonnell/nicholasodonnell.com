import { ship } from 'assets'
import { SHIP_WIDTH, TIMINGS } from 'constants'
import React from 'react'
import styled from 'styled-components'

const SHIP_ASPECT_RATIO = 0.771484375

const StyledShip = styled.image`
  cursor: pointer;
  height: calc(${SHIP_WIDTH} * ${SHIP_ASPECT_RATIO});
  opacity: 0.3;
  pointer-events: bounding-box;
  transform-origin: top center;
  transition: opacity ${TIMINGS.SHORT} ease-in-out,
    x ${TIMINGS.FAST} linear,
    y ${TIMINGS.FAST} linear;
  width: ${SHIP_WIDTH};

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
  <StyledShip
    active={active}
    href={ship}
    onClick={onClick}
    ref={innerRef}
    x={x}
    y={y}
  />
)
