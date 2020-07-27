import {
  moveShip,
  setCanvas,
  setGame,
  setShip
} from 'actions'
import {
  BREAKPOINTS,
  DIRECTIONS,
  SPRITE_MOVE_DISTANCE,
  TIMINGS,
  ZINDEX
} from 'constants'
import { Ship, SpaceInvadersInstructions } from 'components'
import { useEventCallback, useRefWithBoundingClientRect } from 'hooks'
import React, { useEffect } from 'react'
import { withState } from 'state'
import styled from 'styled-components'
import { animations } from 'utils'

const SpaceInvaders = styled.section`
  align-items: center;
  animation: ${animations.fadeInUp} ${TIMINGS.MEDIUM} ease ${TIMINGS.LONG} 1 forwards;
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

const SpaceInvadersCanvas = styled.svg`
  // border: 1px dashed white;
  bottom: 0;
  height: 100%;
  max-width: ${BREAKPOINTS.EXTRA_LARGE};
  position: absolute;
  top: 0;
  width: calc(100% - 2rem);
`

export default () => {
  const {
    canvas,
    dispatch,
    game,
    ship
  } = withState()
  const canvasRef = useRefWithBoundingClientRect(bcr => {
    dispatch(setCanvas({
      height: bcr.height,
      width: bcr.width
    }))
  })
  const shipRef = useRefWithBoundingClientRect(bcr => {
    dispatch(setShip({
      height: bcr.height,
      width: bcr.width
    }))
  })

  const handleKeyPress = useEventCallback(({ code }) => {
    switch (code) {
      case 'ArrowLeft':
        dispatch(moveShip(DIRECTIONS.LEFT, SPRITE_MOVE_DISTANCE))
        break
      case 'ArrowRight':
        dispatch(moveShip(DIRECTIONS.RIGHT, SPRITE_MOVE_DISTANCE))
        break
      case 'Space':
        // TODO
        break
      default:
        // NOP
        break
    }
  }, [])

  // keyboard listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
  }, [])

  // center ship on canvas
  useEffect(() => {
    dispatch(setShip({
      x: canvas.width / 2 - ship.width / 2,
      y: canvas.height - ship.height - 30
    }))
  }, [canvas.height, canvas.width, ship.height, ship.width])

  return (
    <SpaceInvaders>
      {game.initialized && <SpaceInvadersInstructions active={!game.playing} />}
      <SpaceInvadersCanvas ref={canvasRef}>
        <Ship
          active={game.initialized}
          innerRef={shipRef}
          onClick={() => dispatch(setGame({
            initialized: true
          }))}
          x={ship.x}
          y={ship.y}
        />
      </SpaceInvadersCanvas>
    </SpaceInvaders>
  )
}
