import { TYPES } from 'actions'

export default (state, { type, payload }) => {
  switch (type) {
    case TYPES.SET_CANVAS:
      return {
        ...state,
        canvas: {
          ...state.canvas,
          ...payload
        }
      }
    case TYPES.SET_GAME:
      return {
        ...state,
        game: {
          ...state.game,
          ...payload
        }
      }
    case TYPES.SET_LAYOUT:
      return {
        ...state,
        layout: {
          ...state.payload,
          ...payload
        }
      }
    case TYPES.SET_SHIP:
      return {
        ...state,
        ship: {
          ...state.ship,
          ...payload
        }
      }
    default:
      return state
  }
}
