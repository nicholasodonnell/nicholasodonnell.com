import { DIRECTIONS } from 'constants'
import setShip from '../set-ship'

export default (direction, amount) => async (dispatch, getState) => {
  const { canvas, game, ship } = getState()

  // NOPs
  if (!game.initialized
    || (direction === DIRECTIONS.LEFT && ship.x - amount < 0)
    || (direction === DIRECTIONS.RIGHT && ship.x + amount + ship.width > canvas.width)) {
    return
  }

  dispatch(
    setShip({
      x: ship.x + (direction === DIRECTIONS.RIGHT ? amount : (amount * -1))
    })
  )
}
