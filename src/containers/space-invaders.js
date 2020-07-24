import { ANIMATIONS, ZINDEX } from 'constants'
import { Ship } from 'components'
import React, { useRef } from 'react'
import { withState } from 'state'
import styled, { keyframes } from 'styled-components'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(2%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const SpaceInvaders = styled.svg`
  align-items: center;
  animation: ${fadeInUp} ${ANIMATIONS.MEDIUM} ease ${ANIMATIONS.LONG} 1 forwards;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transform: translateY(2%);
  width: 100%;
  z-index: ${ZINDEX.SPACE_INVADERS};
  pointer-events: none;

  visibility: hidden;
`

export default () => {
  const ship = useRef(null)

  const { layout } = withState()

  console.log(ship)

  return (
    <SpaceInvaders viewBox={`0 0 ${layout.width} ${layout.height}`}>
      <Ship innerRef={ship} x={0} y={0} />
    </SpaceInvaders>
  )
}
