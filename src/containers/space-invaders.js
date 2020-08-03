import {
  addMissle,
  setMissles,
  setCanvas,
  setGame,
  setShip
} from 'actions'
import {
  BREAKPOINTS,
  DIRECTIONS,
  GAME_DISPATCH_THROTTLE,
  GAME_UPDATE_EVERY,
  MISSLE_PIXELS_WIDTH,
  SPRITE_MOVE_DISTANCE,
  TIMINGS,
  ZINDEX
} from 'constants'
import { Missle, Ship, SpaceInvadersInstructions } from 'components'
import { useRefWithBoundingClientRect } from 'hooks'
import throttle from 'lodash.throttle'
import React, { useCallback, useEffect } from 'react'
import { withState } from 'state'
import styled from 'styled-components'
import { animations } from 'utils'
import { v4 as uuidv4 } from 'uuid'

const SpaceInvaders = styled.section`
  align-items: center;
  animation: ${animations.fadeInUp} ${TIMINGS.MEDIUM} ease ${TIMINGS.LONG} 1 forwards;
  display: ${process.env.NODE_ENV === 'development' ? 'flex' : 'none'};
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
`

const SpaceInvadersCanvas = styled.svg`
  border: 1px dashed white;
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
    missles,
    ship
  } = withState()

  // throttled dispatch function
  const throttledDispatch = useCallback(throttle(dispatch, GAME_DISPATCH_THROTTLE), [])

  // svg canvas ref
  const canvasRef = useRefWithBoundingClientRect(bcr => {
    dispatch(setCanvas({
      height: bcr.height,
      width: bcr.width
    }))
  })

  // ship image ref
  const shipRef = useRefWithBoundingClientRect(bcr => {
    dispatch(setShip({
      height: bcr.height,
      width: bcr.width
    }))
  })

  // add new missle
  const fireMissle = useCallback(() => {
    throttledDispatch(addMissle({
      id: uuidv4(),
      x: Math.floor(ship.x - MISSLE_PIXELS_WIDTH / 2 + ship.width / 2),
      y: ship.y - 40
    }))
  }, [ship.width, ship.x, ship.y])

  // move missles up
  const moveMissles = useCallback(() => {
    dispatch(setMissles(
      missles.map(({ y, ...missle }) => ({
        ...missle,
        y: y - SPRITE_MOVE_DISTANCE
      }))
    ))
  }, [missles])

  // move ship left & right
  const moveShip = useCallback((direction, amount) => {
    // NOPs
    if ((direction === DIRECTIONS.LEFT && ship.x - amount < 0)
    || (direction === DIRECTIONS.RIGHT && ship.x + amount + ship.width > canvas.width)) {
      return
    }

    throttledDispatch(
      setShip({
        x: ship.x + (direction === DIRECTIONS.RIGHT ? amount : (amount * -1))
      })
    )
  }, [canvas.width, ship.width, ship.x])

  // keydown handler
  const handleKeydown = useCallback(({ code, repeat }) => {
    switch (code) {
      case 'ArrowLeft':
        game.initialized && moveShip(DIRECTIONS.LEFT, SPRITE_MOVE_DISTANCE)
        break
      case 'ArrowRight':
        game.initialized && moveShip(DIRECTIONS.RIGHT, SPRITE_MOVE_DISTANCE)
        break
      case 'Space':
        game.initialized && !repeat && fireMissle()
        break
      default:
        // NOP
        break
    }
  }, [fireMissle, game.initialized, moveShip])

  // every frame
  const onTick = useCallback(() => {
    moveMissles()
  }, [moveMissles])

  // keyboard listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown)

    return () => window.removeEventListener('keydown', handleKeydown)
  }, [handleKeydown])

  // game tick
  useEffect(() => {
    const tick = setInterval(onTick, GAME_UPDATE_EVERY)

    return () => clearInterval(tick)
  }, [onTick])

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
        {missles.map(({ id, ...missle }) => (
          <Missle key={id} {...missle} />
        ))}
      </SpaceInvadersCanvas>
    </SpaceInvaders>
  )
}
